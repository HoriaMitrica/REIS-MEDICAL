import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { getCurrentUserRole } from '../../store/store';
import { useSearchContractsQuery } from '../../services/contractApi';
import styles from './style.module.scss';

const Dashboard = () => {
    const navigate = useNavigate();
    const userRole = useAppSelector(getCurrentUserRole);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useState({
        cnp: '',
        page: 0,
        size: 10,
    });

    // TODO: Implement actual search when backend is ready
    const { data: contracts, isLoading, error } = useSearchContractsQuery(
        searchParams,
        { skip: !searchParams.cnp }
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams(prev => ({
            ...prev,
            cnp: searchTerm,
            page: 0
        }));
    };

    const isUploadAllowed = userRole === 'ADMIN' || userRole === 'ACCOUNTANT';

    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1>Contract Management</h1>
                {isUploadAllowed && (
                    <button
                        className={styles.uploadButton}
                        onClick={() => navigate('/dashboard/upload')}
                    >
                        Upload Contract
                    </button>
                )}
            </div>

            <div className={styles.searchSection}>
                <h2>Search Contracts</h2>
                <form onSubmit={handleSearch}>
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Enter CNP to search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                        <button type="submit" className={styles.searchButton}>
                            Search
                        </button>
                    </div>
                </form>

                <div className={styles.results}>
                    {isLoading && <p>Searching contracts...</p>}
                    {error && <p className={styles.error}>Error searching contracts. Please try again.</p>}
                    {contracts?.content && contracts.content.length > 0 ? (
                        <div className={styles.contractsList}>
                            {contracts.content.map((contract) => (
                                <div key={contract.id} className={styles.contractCard}>
                                    <h3>Contract {contract.id}</h3>
                                    <p>CNP: {contract.cnp}</p>
                                    <p>Status: {contract.status}</p>
                                    <p>Expiration: {new Date(contract.expirationDate).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    ) : searchParams.cnp && !isLoading ? (
                        <p>No contracts found.</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}; 
export default Dashboard;