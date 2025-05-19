import React, { useState } from 'react';
import styles from './style.module.scss';
import { usePasswordResetRequestMutation } from '../../auth/api/AuthApi';

const PasswordResetRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [passwordResetRequest, { isLoading }] = usePasswordResetRequestMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await passwordResetRequest({ email }).unwrap();
            setMessage('If an account with this email exists, a password reset link has been sent.');
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={styles.passwordResetContainer}>
            <h2>Cerere resetare parolă</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Adresă de email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Trimitere...' : 'Trimite link de resetare'}
                </button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default PasswordResetRequest;