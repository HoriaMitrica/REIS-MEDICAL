import React, { useState } from 'react';
import { usePasswordResetMutation } from '../../auth/api/AuthApi';
import { useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';

const PasswordResetPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [passwordReset, { isLoading }] = usePasswordResetMutation();
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email') || '';
    const code = searchParams.get('code') || '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        try {
            await passwordReset({ email, newPassword: password, code }).unwrap();
            setMessage('Your password has been reset successfully.');
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={styles.resetPasswordContainer}>
            <h2>Resetare parolă</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Parola nouă</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirmPassword">Confirmare parolă nouă</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default PasswordResetPage;