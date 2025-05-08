import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddContractMutation } from '../../services/contractApi';
import styles from './style.module.scss';
import { CreateWorkContractDto } from '../../shared/generated-sources';

const UploadContractModal = ({ onClose }: { onClose: () => void }) => {
    const { register, handleSubmit, reset } = useForm<CreateWorkContractDto>();
    const [addContract, { isLoading }] = useAddContractMutation();
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: CreateWorkContractDto) => {
        try {
            const formData = new FormData();
            const fileInput = document.getElementById('file') as HTMLInputElement;
            if (fileInput?.files?.[0]) {
                formData.append('file', fileInput.files[0]);
            }
            formData.append('cnp', data.cnp);
            formData.append('expirationDate', data.expirationDate);

            await addContract(formData).unwrap();
            reset();
            onClose();
        } catch (err: any) {
            setError(err.data?.message || 'Failed to upload contract.');
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Upload Contract</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <label htmlFor="file">Contract File</label>
                        <input 
                            type="file" 
                            id="file" 
                            accept=".pdf,.doc,.docx"
                            {...register('file', { required: true })} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cnp">CNP</label>
                        <input 
                            type="text" 
                            id="cnp" 
                            {...register('cnp', { 
                                required: true,
                                pattern: {
                                    value: /^\d{13}$/,
                                    message: 'CNP must be exactly 13 digits'
                                }
                            })} 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <input 
                            type="date" 
                            id="expirationDate" 
                            {...register('expirationDate', { required: true })} 
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.actions}>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Cancel
                        </button>
                        <button type="submit" disabled={isLoading} className={styles.submitButton}>
                            {isLoading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadContractModal;