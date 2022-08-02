import React from 'react';
import { Box } from '@mui/material';
import styles from './BarangayBirthCertificate.module.css';

export default function BarangayBirthCertificate({
  name,
  purok,
  nameofchild,
  sex,
  dateofbirth,
  weight,
  birthorder,
  death,
  placeofbirth,
  nameofmother,
  mothercitizenship,
  motheroccupation,
  nameoffather,
  fathercitizenship,
  fatheroccupation,
  dateofmarriage,
  placeofmarriage,
  nameofattendant,
  addressofattendant,
  since,
  namerequest,
  day,
  month,
  year,
  or,
  dateissued,
  placeissued,
  captain,
  secretary,
}) {
  return (
    <Box className={styles.c10}>
      <p class={styles.c5}>
        <span class={styles.c0}>Republic of the Philippines</span>
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
            width: '102.5px',
            height: '100.23px',
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
      <p className={styles.c5}>
        <span className={styles.c0}>Province of Bukidnon</span>
      </p>
      <p className={styles.c5}>
        <span className={styles.c0}>Municipality of Pangantucan</span>
      </p>
      <p className={styles.c5}>
        <span className={styles.c0}>BARANGAY KIMANAIT</span>
      </p>
      <p className={(styles.c5, styles.c3)}>
        <span className={(styles.c8, styles.c16)}></span>
      </p>
      <p className={(styles.c3, styles.c5)}>
        <span className={(styles.c4, styles.c8)}></span>
      </p>
      <p className={styles.c5}>
        <span className={styles.c0}>OFFICE OF THE SANGGUNIANG BARANGAY</span>
      </p>
      <hr />
      <p className={(styles.c5, styles.c3)}>
        <span className={(styles.c8, styles.c16)}></span>
      </p>
      <p className={(styles.c3, styles.c5)}>
        <span className={(styles.c4, styles.c8)}></span>
      </p>
      <p className={(styles.c5, styles.c3)}>
        <span className={(styles.c8, styles.c16)}></span>
      </p>
      <p className={(styles.c3, styles.c5)}>
        <span className={(styles.c4, styles.c8)}></span>
      </p>
      <p className={styles.c5}>
        <span className={styles.c0}>BARANGAY BIRTH CERTIFICATE</span>
      </p>
      <p className={(styles.c3, styles.c7)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c7, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c5, styles.c3)}>
        <span className={(styles.c8, styles.c16)}></span>
      </p>
      <p className={(styles.c3, styles.c5)}>
        <span className={(styles.c4, styles.c8)}></span>
      </p>
      <p className={styles.c7}>
        <span className={styles.c12}>TO WHOM IT MAY CONCERN:</span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span clasSName={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that </span>
        <span className={styles.c0}>
          <strong>
            <span className={styles.underline}>{name}</span>
          </strong>
        </span>
        <span className={styles.c2}>, a resident of </span>
        <span className={styles.c0}>
          <strong>
            <span className={styles.underline}>Purok {purok}</span>
          </strong>
        </span>

        <span className={styles.c12}>
          , Kimanait, Pangantucan, Bukidnon, Philippines, sought certification from the undersigned with the following:
        </span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <table className={styles.birthTable}>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Child</td>
          <td style={{ paddingLeft: '10px' }}>
            :{''}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}> {nameofchild}</span>
              </strong>{' '}
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sex</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}> {sex}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date and Time of Birth</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{dateofbirth}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weight</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{weight}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Birth Order</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{birthorder}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Death</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{death}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Place of Birth</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{placeofbirth}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Mother</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{nameofmother}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Citizenship</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{mothercitizenship}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Occupation</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{motheroccupation}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Father</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{nameoffather}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Citizenship</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{fathercitizenship}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Occupation</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{fatheroccupation}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date of Marriage of Parents</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{dateofmarriage}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Place of Marriage</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{placeofmarriage}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Attendant of Birth</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{nameofattendant}</span>
              </strong>
            </span>
          </td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address of Attendant of Birth</td>
          <td style={{ paddingLeft: '10px' }}>
            :{' '}
            <span className={styles.c0}>
              <strong>
                <span className={styles.underline}>{addressofattendant}</span>
              </strong>
            </span>
          </td>
        </tr>
      </table>
      <p className={(styles.c1, styles.c3)}>
        <span className={(styles.c4, styles.c2)}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c12}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This also certifies that the above-mentioned family was a
          resident in this barangay since <span className={(styles.c0, styles.fillup)}>{since}</span> up to date.
        </span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c12}>
        <span className={styles.c2}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is issued to{' '}
        </span>
        <span className={styles.c0}>
          <strong>
            <span className={styles.underline}>{namerequest}</span>
          </strong>
        </span>
        <span clasSName={styles.c12}>
          {' '}
          upon his/her request in connection with his/her desire to apply for delayed registration of birth at the civil
          registrars office of Pangantucan, Bukidnon, Philippines.
        </span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c12}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Done this{' '}
          <span className={(styles.c0, styles.fillup)}>{day}</span> day of{' '}
          <span className={(styles.c0, styles.fillup)}>{month}</span>,{' '}
          <span className={(styles.c0, styles.fillup)}>{year}</span> at Kimanait, Pangantucan, Bukidnon.
        </span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <div style={{ float: 'right' }}>
        <p className={styles.c1}>
          <span className={(styles.c4, styles.c8)} style={{ textAlign: 'center' }}>
            <strong>
              <span className={styles.underline}> {captain}</span>
            </strong>
          </span>
        </p>
        <p className={styles.c1}>
          <span className={styles.c12} style={{ textAlign: 'center' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;Punong Barangay
          </span>
        </p>
      </div>

      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p clasSName={styles.c1}>
        <span className={styles.c0}>Verified by:</span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span clasSName={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c4, styles.c8)}>
          <strong>
            <span className={styles.underline}>{secretary}</span>
          </strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c12}>&nbsp; &nbsp;Barangay Secretary</span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span clasSName={styles.c0}></span>
      </p>
      <p clasSName={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c6}>Amount Paid: P50.00</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c6}>
          O.R. No.:{' '}
          <strong>
            <span className={styles.underline}>{or}</span>
          </strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c6}>
          Date of Issued:{' '}
          <strong>
            <span className={styles.underline}>{dateissued}</span>
          </strong>
        </span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c6}>
          Place of Issued:
          <strong>
            <span className={styles.underline}>{placeissued}</span>
          </strong>
        </span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span className={styles.c6}></span>
      </p>
      <p className={(styles.c1, styles.c3)}>
        <span clasSName={styles.c6}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c6}>
          Note: A mark, erasure or alteration of any entry invalidates this certification.
        </span>
      </p>
    </Box>
  );
}
