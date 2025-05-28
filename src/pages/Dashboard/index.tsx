import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { getCurrentUserRole, getCurrentUserEmail } from '../../store/store';
import { useSearchContractsQuery } from '../../services/contractApi';
import styles from './style.module.scss';
import { WorkContractWithDriveInfoDto } from '../../shared/generated-sources';
import UploadContractModal from './UploadContractModal';

const Dashboard = () => {
    const navigate = useNavigate();
    const userRole = useAppSelector(getCurrentUserRole);
    const userEmail = useAppSelector(getCurrentUserEmail);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useState<{ cnp: string }>({ cnp: '' });
    const [contracts, setContracts] = useState<WorkContractWithDriveInfoDto[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, isLoading, error } = useSearchContractsQuery(
        { cnp: searchParams.cnp },
        { skip: !searchParams.cnp }
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams({ cnp: searchTerm });
    };

    useEffect(() => {
        if (data) {
            setContracts(data);
        }
    }, [data]);

    const isUploadAllowed = userRole[0] === 'ADMIN' || userRole[0] === 'ACCOUNTANT';

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Gestionare Fișiere</h1>
                {isUploadAllowed && (
                    <button
                        className={styles.uploadButton}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Încarcă Fișier
                    </button>
                )}
                <div className={styles.userWidget}>
                    <p> {userEmail}</p>
                    <button
                        className={styles.logoutButton}
                        onClick={() => {
                            localStorage.clear();
                            navigate('/login');
                        }}
                    >
                        Deconectare
                    </button>
                    <Link to="/request-reset-password">
                        <button className={styles.resetPasswordButton}>Resetare parolă</button>
                    </Link>
                </div>
            </header>

            <main className={styles.mainContent}>
                <section className={styles.searchSection}>
                    <h2>Căutare Fișiere</h2>
                    <form onSubmit={handleSearch} className={styles.searchForm}>
                        <div className={styles.searchBar}>
                            <input
                                type="text"
                                placeholder="Introduceți CNP pentru căutare..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                            <button type="submit" className={styles.searchButton}>
                                Caută
                            </button>
                        </div>
                    </form>

                    <div className={styles.results}>
                        {isLoading && <p>Se caută fișiere...</p>}
                        {error && <p className={styles.error}>Eroare la căutarea fișierelor. Vă rugăm să încercați din nou.</p>}
                        {contracts.length > 0 ? (
                            <div className={styles.contractsList}>
                                {contracts.map((contractWithLink: WorkContractWithDriveInfoDto) => (
                                    <div key={contractWithLink.contract?.id} className={styles.contractCard}>
                                        <h3>Fișier {contractWithLink.contract?.id}</h3>
                                        <p>Nume Original: {contractWithLink.contract?.originalFileName}</p>
                                        <p>Data Expirării: {contractWithLink.contract?.expirationDate!}</p>

                                        <a
                                            href={contractWithLink.driveFileViewLink}
                                            download={contractWithLink.contract?.originalFileName} // This ensures the file is downloaded
                                            className={styles.downloadLink}
                                        >
                                            <button className={styles.downloadButton}>Descarcă Fișier</button>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : searchParams.cnp && !isLoading ? (
                            <p>Niciun fișier găsit.</p>
                        ) : null}
                    </div>
                </section>
            </main>

            {isModalOpen && <UploadContractModal onClose={() => setIsModalOpen(false)} />}

            <footer className={styles.footer}>
                <p>
                    &copy; {new Date().getFullYear()} ReisMedical. All rights reserved by
                    <a target="_blank" rel="noopener noreferrer" href="https://cleancodeit.com"> Clean Code Solutions</a>.
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;
