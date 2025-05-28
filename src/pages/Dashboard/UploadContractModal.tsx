import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddContractMutation } from '../../services/contractApi';
import styles from './style.module.scss';
import { CreateWorkContractDto } from '../../shared/generated-sources';

const UploadContractModal = ({ onClose }: { onClose: () => void }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateWorkContractDto>();
    const [addContract, { isLoading }] = useAddContractMutation();
    const [error, setError] = useState<string | null>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const onSubmit = async (data: CreateWorkContractDto) => {
        try {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('files', file);
            });
            formData.append('cnp', data.cnp);
            formData.append('expirationDate', data.expirationDate);

            await addContract(formData).unwrap(); // Pass FormData object
            reset();
            onClose();
        } catch (err: any) {
            setError(err.data?.message || 'Failed to upload contract.');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files as FileList)]);
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Încarcă Fișiere</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <label htmlFor="files">Contract Files</label>
                        <input 
                            type="file" 
                            id="files" 
                            multiple
                            onChange={handleFileChange}
                        />
                        <ul>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cnp">CNP</label>
                        <input 
                            type="text" 
                            id="cnp" 
                            {...register('cnp', { 
                                required: 'CNP is required',
                                pattern: {
                                    value: /^\d{13}$/,
                                    message: 'CNP must be exactly 13 digits'
                                },
                                validate: {
                                    length: (value) => value.length === 13 || 'CNP must be exactly 13 digits'
                                }
                            })} 
                        />
                        {errors.cnp && <p className={styles.error}>{errors.cnp.message}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="expirationDate">Dată de expirare</label>
                        <input 
                            type="date" 
                            id="expirationDate" 
                            {...register('expirationDate', { required: true })} 
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.actions}>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Anulează
                        </button>
                        <button type="submit" disabled={isLoading} className={styles.submitButton}>
                            {isLoading ? 'Se încarcă...' : 'Încarcă'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadContractModal;