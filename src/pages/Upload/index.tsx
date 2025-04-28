import { useState } from 'react';
import style from './style.module.scss';

const Upload = () => {
    //const [uploadContract, { isLoading, isSuccess, isError }] = useUploadContractMutation();
    const [formData, setFormData] = useState({
        cnp: '',
        expirationDate: '',
        file: null as File | null,
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === 'file' && files) {
            setFormData(prev => ({ ...prev, file: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!formData.file || !formData.cnp || !formData.expirationDate) {
            setError('Please fill in all fields');
            return;
        }

        //try {
        //    await uploadContract({
        //        file: formData.file,
        //        cnp: formData.cnp,
        //        expirationDate: formData.expirationDate,
        //    }).unwrap();
        //} catch (err) {
        //    setError('Upload failed. Please try again.');
        //}
    };

    return (
        <div className={style.uploadContainer}>
            <h2>Upload Contract</h2>
            <form onSubmit={handleSubmit} className={style.uploadForm}>
                <div className={style.formGroup}>
                    <label htmlFor="cnp">CNP</label>
                    <input
                        type="text"
                        id="cnp"
                        name="cnp"
                        value={formData.cnp}
                        onChange={handleChange}
                        placeholder="Enter CNP"
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input
                        type="date"
                        id="expirationDate"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="file">Contract File</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        required
                    />
                </div>

                {error && <div className={style.error}>{error}</div>}
                {/*{isSuccess && <div className={style.success}>Contract uploaded successfully!</div>}*/}

                <button 
                    type="submit" 
                    className={style.submitButton}
                    //disabled={isLoading}
                >
                    {/*{isLoading ? 'Uploading...' : 'Upload Contract'}*/}
                    Upload Contract
                </button>
            </form>
        </div>
    );
} 

export default Upload;