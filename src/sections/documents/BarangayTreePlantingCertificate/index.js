import { Box } from '@mui/material';
import React from 'react';
import styles from './BarangayTreePlantingCertificate.module.css';

const BarangayTreePlantingCertificate = React.forwardRef((props, ref) => {
  const { name, day, month, year, age, purok, citizenship, ctc, date, bearer, secretary, captain } = props;

  return (
    <Box className={styles.c7} ref={ref}>
      <p className={styles.c3}>
        <span className={styles.c0}>Republic of the Philippines</span>
        <span
          style={{
            overflow: 'hidden',
            display: ' inline-block',
            margin: '0px 0px',
            border: '0px solid #000000',
            transform: 'rotate(0rad) translateZ(0px)',
            WebkitTransform: 'rotate(0rad) translateZ(0px)',
            width: '102.5px',
            height: '100.23px',
            float: 'right',
          }}
        >
          <img
            alt=""
            src="/images/image1.png"
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
            src="/images/image2.png"
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
      <p className={styles.c3}>
        <span className={styles.c0}>Province of Bukidnon</span>
      </p>
      <p className={styles.c3}>
        <span className={styles.c0}>Municipality of Pangantucan</span>
      </p>
      <p className={styles.c3}>
        <span className={styles.c0}>BARANGAY KIMANAIT</span>
      </p>
      <p className={(styles.c3, styles.c4, styles.c9)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c3}>
        <span className={styles.c0}>OFFICE OF THE SANGGUNIANG BARANGAY</span>
      </p>
      <br />
      <hr />
      <p className={(styles.c3, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c3, styles.c4)}>
        <span className={(styles.c14, styles.c8)} />
      </p>
      <p className={styles.c3}>
        <span className={styles.c6}>TREE PLANTING CERTIFICATE</span>
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c1}>
        <span className={styles.c0}>TO WHOM IT MAY CONCERN:</span>
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c1}>
        <span className={styles.c2}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that MS./MR.{' '}
          <strong>
            <span className={styles.underline}>{name}</span>
          </strong>
          ,{' '}
          <strong>
            <span className={styles.underline}>{age}</span>
          </strong>
        </span>
        <span className={styles.c0}>
            {' '}
            <span className={styles.underline}>{citizenship}</span> citizen, single and bonafide resident of Purok{' '}
          <strong>
            <span className={styles.underline}>{purok}</span>
          </strong>
          , Kimanait, Pangantucan, Bukidnon, is a peaceful loving citizen and his/her character is beyond reproach.
        </span>
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c1}>
        <span className={styles.c0}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That under PD 1153 program, every Filipino citizen, male and
          female are required to plant trees (10 hills) each other, fruit trees, or useful trees before getting married.
        </span>
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c1}>
        <span className={styles.c0}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This tree planting requirements is strictly enforce and done
          before getting married and whatsoever legal purposes that may serve the bearer.
        </span>
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c1}>
        <span className={styles.c0}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issued this{' '}
          <strong>
            <span className={styles.underline}>{day}</span>
          </strong>{' '}
          day of{' '}
          <strong>
            <span className={styles.underline}>{month}</span>
          </strong>
          ,{' '}
          <strong>
            <span className={styles.underline}>{year}</span>
          </strong>{' '}
          at Kimanait, Pangantucan, Bukidnon, Mindanao, Philippines.
        </span>
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <div style={{ float: 'right' }}>
        <p className={styles.c1} style={{ textAlign: 'center' }}>
          <strong>
            <span className={styles.underline}>{name}</span>
          </strong>
        </p>
        <p className={styles.c4} style={{ textAlign: 'center' }}>
          <span className={styles.c0}>Bearer</span>
        </p>
      </div>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={(styles.c1, styles.c4)}>
        <span className={styles.c0} />
      </p>
      <p className={styles.c1}>
        <span className={styles.c5}>
          CTC NO:{' '}
          <strong>
            <span className={styles.underline}>{ctc}</span>
          </strong>{' '}
        </span>
      </p>

      <p className={styles.c1}>
        <span className={styles.c5}>
          DATE:{' '}
          <strong>
            <span className={styles.underline}>{date}</span>
          </strong>{' '}
        </span>
      </p>

      <p className={styles.c1}>
        <span className={styles.c5}>PLACE: KIMANAIT, PANGANTUCAN, BUKIDNON</span>
      </p>
      <p className={(styles.c4, styles.c13)}>
        <span className={styles.c10} />
      </p>
      <p className={(styles.c13, styles.c4)}>
        <span className={styles.c10} />
      </p>
      <table className={styles.thirdTable} style={{ color: '#000000' }}>
        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c1} />
        </p>
        <tr>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified by:</th>
          <th style={{ paddingLeft: '250px' }}>Approved by:</th>
        </tr>

        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c1} />
        </p>
        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c1} />
        </p>

        <tr>
          <th>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>
              <span className={styles.underline}>{secretary}</span>
            </strong>{' '}
          </th>
          <th style={{ paddingLeft: '250px' }}>
            <strong>
              <span className={styles.underline}>{captain}</span>
            </strong>{' '}
          </th>
        </tr>
        <tr>
          <td style={{ textAlign: 'center' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barangay Secretay</td>
          <td style={{ paddingLeft: '250px', textAlign: 'center' }}>Barangay Captain</td>
        </tr>
      </table>
    </Box>
  );
});

export default BarangayTreePlantingCertificate;
