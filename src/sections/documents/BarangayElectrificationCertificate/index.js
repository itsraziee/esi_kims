import { Box } from '@mui/material';
import { fontWeight, style } from '@mui/system';
import React from 'react';
import styles from './BarangayElectrificationCertificate.module.css';

export default function BarangayElectrificationCertificate({
  name,
  address,
  day,
  month,
  year,
  secretary,
  barangayCaptain,
}) {
  return (
    <Box className={styles.c13}>
      <p className={styles.c6}>
        <span className={styles.c1}>Republic of the Philippines</span>
        <span
          style={{
            overflow: 'hidden',
            display: 'inline-block',
            margin: '0px 0px',
            border: '0px solid #000000',
            transform: 'rotate(0rad) translateZ(0px)',
            width: '102.5px',
            height: '100.23px',
            WebkitTransform: 'rotate(0rad) translateZ(0px)',
            float: 'right',
          }}
        >
          <img
            alt=""
            src="images/image1.png"
            style={{
              width: '102.5px',
              height: '100.23px',
              marginLeft: '0px',
              marginTop: '0px',
              transform: 'rotate(0rad) translateZ(0px)',
              WebkitTransform: 'rotate(0rad) translateZ(0px)',
            }}
            title=""
          />
        </span>
        <span
          style={{
            overflow: 'hidden',
            display: 'inline-block',
            margin: '0px 0px',
            border: '0px solid #000000',
            transform: 'rotate(0rad) translateZ(0px)',
            WebkitTransform: 'rotate(0rad) translateZ(0px)',
            width: '103px',
            height: '98.52px',
            float: 'left',
          }}
        >
          <img
            alt=""
            src="images/image2.png"
            style={{
              width: '103px',
              height: '98.52px',
              marginLeft: '0px',
              marginTop: '0px',
              transform: 'rotate(0rad) translateZ(0px)',
              WebkitTransform: 'rotate(0rad) translateZ(0px)',
            }}
            title=""
          />
        </span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>Province of Bukidnon</span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>Municipality of Pangantucan</span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>BARANGAY KIMANAIT</span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1} />
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>OFFICE OF THE SANGGUNIANG BARANGAY</span>
      </p>
      <hr />
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c3}></span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c10}>C E R T I F I C A T I O N</span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c10}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c3}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c3}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c12}>
        <span className={styles.c5}>To Whom It May Concern:</span>
      </p>
      <p className={(styles.c12, styles.c9)}>
        <span className={styles.c5}></span>
      </p>
      <p className={styles.c12}>
        <span className={styles.c7}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that the following materials were used to
          the construction of{' '}
        </span>
        <span className={styles.c3}>{name}</span>
        <span className={styles.c5}>
          {' '}
          house situated{' '}
          <span className={styles.underline}>
            <strong>{address}</strong>
          </span>{' '}
          and the following materials are:
        </span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c5}></span>
      </p>
      <table className={styles.electricTable}>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Layout</td>
          <th style={{ paddingLeft: '10px' }}>16x18 Square Meters</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beam</td>
          <th style={{ paddingLeft: '10px' }}>Bayog</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GI</td>
          <th style={{ paddingLeft: '10px' }}>18 pcs</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wall</td>
          <th style={{ paddingLeft: '10px' }}>Hollow Blocks</th>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estimate Cost</td>
          <th style={{ paddingLeft: '10px' }}>P100,000.00</th>
        </tr>
      </table>

      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3}></span>
      </p>
      <p className={styles.c4}>
        <span className={styles.c7}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is issued upon request of the above-named
          person to support her desire for{' '}
        </span>
        <span className={styles.c1}>electrification installation purposes.</span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c4}>
        <span className={styles.c7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={styles.c5}>
          Issued this <span className={styles.underline}>{day}</span> day{' '}
          <span className={styles.underline}>
            {month}, {year}
          </span>{' '}
          at {address}.
        </span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c5}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c5}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c5}></span>
      </p>
      <div style={{ float: 'right' }}>
        <p className={styles.c4} style={{ textAlign: 'center' }}>
          <span className={styles.c3}>{name}</span>
        </p>
        <p className={styles.c4} style={{ textAlign: 'center' }}>
          <span className={styles.c1}>Applicant</span>
        </p>
      </div>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c1}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c1}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c1}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c1}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c1}></span>
      </p>

      <strong>
        {' '}
        <table className={styles.secondTable}>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O.R NO.:</td>
            <td style={{ paddingLeft: '250px' }}>CTC NO.:</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date Issued:</td>
            <td style={{ paddingLeft: '250px' }}>Date Issued:</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Place Issued</td>
            <td style={{ paddingLeft: '250px' }}>Place Issued</td>
          </tr>
        </table>
      </strong>

      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c8}></span>
      </p>

      <table className={styles.thirdTable}>
        <tr>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prepared by:</th>
          <th style={{ paddingLeft: '250px' }}>Approved by:</th>
        </tr>

        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c1}></span>
        </p>
        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c1}></span>
        </p>

        <tr>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{secretary}</th>
          <th style={{ paddingLeft: '250px' }}>{barangayCaptain}</th>
        </tr>
        <tr>
          <td style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barangay Secretay</td>
          <td style={{ paddingLeft: '250px', textAlign: 'center' }}>Barangay Captain</td>
        </tr>
      </table>
    </Box>
  );
}
