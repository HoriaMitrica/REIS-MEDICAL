import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../auth/api/AuthApi';
import { LoginUserDto } from '../../shared/generated-sources';
import styles from './style.module.scss';

 const Login = () => {
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const [formData, setFormData] = useState<LoginUserDto>({
        email: '',
        password: ''
    });
    const [errorMessage, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await loginUser(formData).unwrap();
            if (result) {
                navigate('/dashboard');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <h2>Logare</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Parola</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <button 
                            type="button" 
                            className={styles.forgotPasswordButton}
                            onClick={() => navigate('/request-reset-password')}
                        >
                            Ai uitat parola?
                        </button>
                    </div>
                    {errorMessage && (
                        <div className={styles.error}>
                            {errorMessage}
                        </div>
                    )}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className={styles.submitButton}
                    >
                        {isLoading ? 'Conectare...' : 'Conectează-te'}
                    </button>
                </form>
            </div>
        </div>
    );
}; 

export default Login;