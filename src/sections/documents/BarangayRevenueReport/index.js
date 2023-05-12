import moment from 'moment';
import React from 'react';
import styles from './BarangayRevenueReport.module.css';

const BarangayRevenueReport = React.forwardRef((props, ref) => {
  const { grandTotal, rows } = props;

  return (
    <div className={styles.c25} ref={ref}>
      <p className={styles.c9}>
        <span className={styles.c32} />
      </p>

      <table className={styles.c30}>
        <tr classNameName={styles.c3}>
          <td className={styles.c47} colSpan="1" rowSpan="1">
            <p className={styles.c52}>
              <span
                style={{
                  overflow: 'hidden',
                  display: 'inline-block',
                  margin: '0.00px 0.00px',
                  border: '0.00px solid #000000',
                  transform: 'rotate(0.00rad) translateZ(0px)',
                  WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
                  width: '76.50px',
                  height: '73.70px',
                }}
              >
                <img
                  alt=""
                  src="/images/image1.png"
                  style={{
                    width: '76.50px',
                    height: '73.70px',
                    marginLeft: '0.00px',
                    marginTop: '0.00px',
                    transform: 'rotate(0.00rad) translateZ(0px)',
                    WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
                  }}
                  title=""
                />
              </span>
            </p>
          </td>

          <td className={styles.c51} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c59}>R</span>
              <span className={styles.c20}>epublic of the Philippines</span>
            </p>

            <p className={styles.c12}>
              <span className={styles.c20}>Province of Bukidnon</span>
            </p>

            <p className={styles.c12}>
              <span className={styles.c20}>Municipality of Pangantucan</span>
            </p>

            <p className={styles.c12}>
              <span className={styles.c29}>Barangay Kimanait</span>
            </p>
          </td>

          <td className={styles.c60} colSpan="1" rowSpan="1">
            <p className={styles.c52}>
              <span
                style={{
                  overflow: 'hidden',
                  display: 'inline-block',
                  margin: '0.00px 0.00px',
                  border: '0.00px solid #000000',
                  transform: 'rotate(0.00rad) translateZ(0px)',
                  WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
                  width: '86.50px',
                  height: '82.48px',
                }}
              >
                <img
                  alt=""
                  src="/images/image2.png"
                  style={{
                    width: '86.50px',
                    height: '82.48px',
                    marginLeft: '0.00px',
                    marginTop: '0.00px',
                    transform: 'rotate(0.00rad) translateZ(0px)',
                    WebkitTransform: 'rotate(0.00rad) translateZ(0px)',
                  }}
                  title=""
                />
              </span>
            </p>
          </td>
        </tr>
      </table>
      <p className={styles.c9}>
        <span className={styles.c20} />
      </p>
      <p className={styles.c37}>
        <span className={styles.c24}>BARANGAY REVENUE REPORT</span>
      </p>
      <p className={(styles.c37, styles.c63)}>
        <span className={styles.c24} />
      </p>
      {/* <a id="t.94745eaf2d38522111e1402bd31c86a69ab1fb23"></a>
      <a id="t.1"></a> */}
      <table className={styles.c46}>
        <tr className={styles.c3}>
          <td className={styles.c62} colSpan="1" rowSpan="1">
            <p className={styles.c39}>
              <span className={styles.c0}>
                Date: <span className={styles.c1}>&nbsp; {moment().format('LL')}</span>{' '}
              </span>
            </p>
          </td>
        </tr>
        <tr className={styles.c3}>
          <td className={styles.c50} colSpan="2" rowSpan="1">
            <p className={styles.c39}>
              <span className={styles.c0}>
                Grand Total:<span className={styles.c1}>&nbsp; {grandTotal}</span>{' '}
              </span>
            </p>
          </td>
        </tr>
        <tr className={styles.c3}>
          {/* <td className={styles.c2}>
            <p className={styles.c12}>
              <span className={styles.c0}>Name</span>
            </p>
          </td> */}
          <td className={styles.c14}>
            <p className={styles.c12}>
              <span className={styles.c0}>Type of Document</span>
            </p>
          </td>
          <td className={styles.c18}>
            <p className={styles.c12}>
              <span className={styles.c0}>Date</span>
            </p>
          </td>
          <td className={styles.c15}>
            <p className={styles.c12}>
              <span className={styles.c0}>Amount</span>
            </p>
          </td>
          <td className={styles.c10}>
            <p className={styles.c12}>
              <span className={styles.c0}>Remarks</span>
            </p>
          </td>
        </tr>
        {rows.map((row) => {
          console.log({ row });
          return (
            <tr className={styles.c3} key={row.id}>
              {/* REQUESTOR NAME */}
              {/* <td className={styles.c2}>
                <p className={styles.c11}>{row?.requestorName}</p>
              </td> */}
              <td className={styles.c2}>
                <p className={styles.c11}>{row?.type}</p>
              </td>
              <td className={styles.c18}>
                <p className={styles.c11}>{moment(row?.datetime).format('l')}</p>
              </td>
              <td className={styles.c15}>
                <p className={styles.c11}>{row?.amount}</p>
              </td>
              <td className={styles.c10}>
                <p className={styles.c11}>{row?.treasurerRemarks}</p>
              </td>
            </tr>
          );
        })}
        {/* <tr className={styles.c3}>
          <td className={styles.c2} colSpan="3" rowSpan="1">
            {' '}
            <p className={styles.c11}>
              <span className={styles.c11} />
            </p>
          </td>
          <td className={styles.c18} colSpan="1" rowSpan="1">
            {' '}
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c14} colSpan="3" rowSpan="1">
            {' '}
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c15} colSpan="2" rowSpan="1">
            {' '}
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c10} colSpan="1" rowSpan="1">
            {' '}
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
        </tr> */}

        {/* <tr className={styles.c3}>
          <td className={styles.c2} colSpan="3" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c18} colSpan="1" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c14} colSpan="3" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c15} colSpan="2" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c10} colSpan="1" rowSpan="1">
            <p className={styles.c11} />
          </td>
        </tr> */}
        {/* <tr className={styles.c3}>
          <td className={styles.c2} colSpan="3" rowSpan="1">
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c18} colSpan="1" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c14} colSpan="3" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c15} colSpan="2" rowSpan="1">
            <p className={styles.c11} />
          </td>
          <td className={styles.c10} colSpan="1" rowSpan="1">
            <p className={styles.c11} />
          </td>
        </tr> */}
        {/* <tr className={styles.c3}>
          <td className={styles.c2} colSpan="3" rowSpan="1">
            <p className={styles.c39}>
              <span className={styles.c0}>Grand Total: </span>
            </p>
          </td>
          <td className={styles.c18} colSpan="1" rowSpan="1">
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c14} colSpan="3" rowSpan="1">
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c15} colSpan="2" rowSpan="1">
            <p className={styles.c11}>
              <span className={styles.c0}> {grandTotal}</span>
            </p>
          </td>
          <td className={styles.c10} colSpan="1" rowSpan="1">
            <p className={styles.c11}>
              <span className={styles.c0} />
            </p>
          </td>
        </tr> */}
      </table>
      <p className={styles.c21}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c21}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c21}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c49}>
        <span className={styles.c0} />
      </p>
      {/* <a id="t.e7688dbde837987064ba067343c119c8de98d309"></a>
      <a id="t.2"></a> */}
      <table className={styles.c46}>
        <tr className={styles.c3}>
          <td className={styles.c36} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c0}>Prepared by:</span>
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c36} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c0}>Approved by:</span>
            </p>
          </td>
        </tr>
        <tr>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
        </tr>
        <tr>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
        </tr>
        <tr>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
        </tr>
        <tr className={styles.c3}>
          <td className={styles.c36} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c0}>MRS. REGINA F. CANTONAO</span>
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c36} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c0}>HON. JERRY P. PARADILLO</span>
            </p>
          </td>
        </tr>
        <tr className={styles.c3}>
          <td className={styles.c19} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c32}>Barangay Treasurer</span>
            </p>
          </td>
          <td className={styles.c17} colSpan="1" rowSpan="1">
            <p className={styles.c9}>
              <span className={styles.c0} />
            </p>
          </td>
          <td className={styles.c36} colSpan="1" rowSpan="1">
            <p className={styles.c12}>
              <span className={styles.c32}>Barangay Captain</span>
            </p>
          </td>
        </tr>
      </table>
      <p className={styles.c9}>
        <span className={styles.c0} />
      </p>
    </div>
  );
});

export default BarangayRevenueReport;
