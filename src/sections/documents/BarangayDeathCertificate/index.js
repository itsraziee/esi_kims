import { Box } from '@mui/material';
import { fontWeight, style } from '@mui/system';
import React from 'react';
import styles from './BarangayDeathCertificate.module.css';

export default function BarangayDeathCertificate({
  // naa pay ibutang dire
  name,
  relationship,
  purok,
  day,
  month,
  year,
  deceasedname,
  placeofdeath,
  dateofbirth,
  dateofdeath,
  age,
  causeofdeath,
  address,
  civilstatus,
  placeburried,
  religion,
  occupation,
  nameoffather,
  maidennameofmother,
  captain,
  secretary,
  sec,
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
            WebkitTransform: 'rotate(0rad) translateZ(0px)',
            width: '103.5px',
            height: '100.23px',
            float: 'right',
          }}
        >
          <img
            alt=""
            src="/images/image1.png"
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
            width: '102.5px',
            height: '100.23px',
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
        <span className={styles.c1} />
      </p>
      <p className={styles.c0}>
        <span className={styles.c3} />
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>BARANGAY DEATH CERTIFICATE</span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1} />
      </p>
      <p className={styles.c0}>
        <span className={styles.c3} />
      </p>
      <p className={styles.c12}>
        <span className={styles.c5}>TO WHOM IT MAY CONCERN:</span>
      </p>
      <p className={(styles.c12, styles.c9)}>
        <span className={styles.c5} />
      </p>
      <p className={styles.c12}>
        <span className={styles.c7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that </span>
        <span className={styles.c3}>{name}</span>
        <span className={styles.c5}>
          {' '}
          &nbsp;Filipino citizen married and resident of Purok <span className={styles.c3}>{purok}</span>, Kimanait,
          Pangantucan, Bukidnon,
        </span>
        <span className={styles.c3}> {relationship}</span>
        <span className={styles.c5}> of the deceased name below:</span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c5} />
      </p>
      <table className={styles.deathTable} style={{ color: '#000000 ' }}>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DECEASED NAME</td>
          <td style={{ paddingLeft: '10px' }}>
            :{''}
            <span className={styles.c3}>{deceasedname}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLACE OF DEATH</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{placeofdeath}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE OF BIRTH</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{dateofbirth}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE OF DEATH</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{dateofdeath}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGE</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{age}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAUSE OF DEATH</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{causeofdeath}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADDRESS</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{address}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CIVIL STATUS</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{civilstatus}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLACE BURRIED</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{placeburried}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RELIGION</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{religion}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OCCUPATION</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{occupation}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME OF FATHER</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{nameoffather}</span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAIDEN NAME OF MOTHER</td>
          <td style={{ paddingLeft: '10px' }}>
            : <span className={styles.c3}>{maidennameofmother}</span>
          </td>
        </tr>
      </table>

      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>
      <p className={styles.c4}>
        <span className={styles.c7}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is issued upon request of the above-named
          person for whatever legal purpose this may serve best.
        </span>
      </p>
      <p className={styles.c4}>
        <span className={styles.c7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <p className={styles.c5}>
          <span className={styles.c1}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Done this <span className={styles.c3}>{day}</span> of{' '}
            <span className={styles.c3}>{month}</span>, <span className={styles.c3}>{year}</span> at the Office of the
            Punong Barangay of Kimanait, Pangantucan, Bukidnon.
          </span>
        </p>
      </p>
      <p className={styles.c4}>
        <span className={styles.c7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </p>
      <p className={styles.c5}>
        <span className={styles.c1}>
          NOTE: Any erasure or alteration of any entry invalidates this Barangay Certification.
        </span>
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>

      <div style={{ float: 'right' }}>
        <p className={styles.c4} style={{ textAlign: 'center' }}>
          <span className={styles.c3}>{captain}</span>
        </p>
        <p className={styles.c1} style={{ textAlign: 'center' }}>
          <span className={styles.c5}>Punong Barangay</span>
        </p>
      </div>

      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>
      <p className={(styles.c4, styles.c9)}>
        <span className={styles.c3} />
      </p>

      <div style={{ float: 'left' }}>
        <p className={styles.c5} style={{ textAlign: 'left' }}>
          <span className={styles.c5}>Prepared by:</span>
        </p>
        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c3} />
        </p>
        <p className={styles.c4} style={{ textAlign: 'center' }}>
          <span className={styles.c3}>{secretary}</span>
        </p>
        <p className={styles.c1} style={{ textAlign: 'center' }}>
          <span className={styles.c5}>Barangay Secretary</span>
        </p>
      </div>
      <p className="c0">
        <span className="c1" />
      </p>
      <p className="c0">
        <span className="c1" />
      </p>
      <p className="c13">
        <span className="c14" />
      </p>
    </Box>
  );
}
