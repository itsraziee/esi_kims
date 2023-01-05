import styles from './RequestStatus.module.css';

export default function RequestStatus({ referenceNumber, status, remarks, requestorName, number, typeOfDocument }) {
  return (
    <div>
      <p className={styles.c1}>
        <span>
          Reference Number: <strong>{referenceNumber}</strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span>
          Requestor Name: <strong>{requestorName}</strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span>
          Phone Number: <strong>{number}</strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span>
          Type Of Document: <strong>{typeOfDocument}</strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span>
          Status: <strong>{status}</strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span>
          Remarks: <strong>{remarks}</strong>
        </span>
      </p>
    </div>
  );
}
