import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { getCurrentUserRole } from '../../store/store';
import { useSearchContractsQuery } from '../../services/contractApi';
import styles from './style.module.scss';
import { WorkContract, WorkContractWithDriveInfoDto } from '../../shared/generated-sources';
import UploadContractModal from './UploadContractModal';

const Dashboard = () => {
    const navigate = useNavigate();
    const userRole = useAppSelector(getCurrentUserRole);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useState<{ cnp: string }>({ cnp: '' });
    const [contracts, setContracts] = useState<WorkContractWithDriveInfoDto[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, isLoading, error } = useSearchContractsQuery(
        { cnp: searchParams.cnp },
        { skip: !searchParams.cnp } // Skip the request if no CNP is entered
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams({ cnp: searchTerm }); // Set the search params to the entered CNP
    };

    useEffect(() => {
        if (data) {
            setContracts(data);
        }
    }
        , [data]);
    console.log(contracts);

    const isUploadAllowed = userRole[0] === 'ADMIN' || userRole[0] === 'ACCOUNTANT';
    console.log(userRole[0]);
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1>Contract Management</h1>
                {isUploadAllowed && (
                    <button
                        className={styles.uploadButton}
                        onClick={() => setIsModalOpen(true)}
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
                    { contracts.length > 0 ? (
                        <div className={styles.contractsList}>
                            {contracts.map((contractWithLink:WorkContractWithDriveInfoDto) => (
                                <div key={contractWithLink.contract?.id} className={styles.contractCard}>
                                    <h3>Contract {contractWithLink.contract?.id}</h3>
                                    <p>Original File Name: {contractWithLink.contract?.originalFileName}</p>
                                    <p>Expiration Date: {contractWithLink.contract?.expirationDate!}</p>

                                    {/* Download button with file download functionality */}
                                    <a
                                        href={contractWithLink.driveFileViewLink}
                                        download={contractWithLink.contract?.originalFileName} // This ensures the file is downloaded
                                        className={styles.downloadLink}
                                    >
                                        <button className={styles.downloadButton}>Download File</button>
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : searchParams.cnp && !isLoading ? (
                        <p>No contracts found.</p>
                    ) : null}
                </div>
            </div>

            {isModalOpen && <UploadContractModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Dashboard;
