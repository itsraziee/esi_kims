import { Box } from '@mui/material';
import React from 'react';
import styles from './BarangayClearance.module.css';

export default function index({
  fileNo,
  description,
  day,
  month,
  year,
  firstname,
  middlename,
  lastname,
  suffix,
  address,
  citizenship,
  sex,
  age,
  religion,
  civilstatus,
  birthday,
  birthmonth,
  birthyear,
  placeofbirth,
  height,
  weight,
  valday,
  valmonth,
  valyear,
  purpose,
  resCertNo,
  placeIssued,
  punongbarangay,
  barangayKagawad,
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
            width: '102.5px',
            height: '100.23px',
            float: 'left',
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
            float: 'right',
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
        <span className={styles.c2}></span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>OFFICE OF THE BARANGAY GOVERNMENT</span>
      </p>
      <hr />
      <p className={styles.c6}>
        <span className={styles.c14} style={{ fontWeight: 700 }}>
          BARANGAY CLEARANCE
        </span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c7}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c7}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c3}>
        <span className={styles.c1}>File No.{''}</span>
        <span className={(styles.c1, styles.underline)}>{fileNo}</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c1}>Date {''}</span>
        <span className={(styles.c1, styles.underline)}>
          {day}-{month}-{year}
        </span>
      </p>
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
          float: 'right',
        }}
      >
        <img
          alt=""
          src="images/image3.png"
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
      <p className={styles.c0}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c14}>
        <span className={styles.c1}>TO WHOM IT MAY CONCERN:</span>
      </p>
      <p className={styles.c4}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c7}>
        <span className={styles.c1}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that name register below whose thumbmark
          and signature, other information below, as of this date found <br />{' '}
        </span>
        <span className={(styles.c5, styles.underline)}>{description}</span>
        <span className={styles.c5}>.</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c1}>Name: {''}</span>
        <span className={(styles.c8, styles.underline)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{firstname}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; {lastname}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{middlename}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{suffix} &nbsp; &nbsp;
        </span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={(styles.c7, styles.c9)}>
          FIRST NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;MIDDLE
          NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; LAST
          NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          &nbsp;SUFFIX
        </span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>Address: {''}</span>
        <span className={(styles.c2, styles.underline)}>{address}</span>
        <span className={styles.c4}>&nbsp; &nbsp;Citizenship: {''}</span>
        <span className={(styles.c8, styles.underline)}>{citizenship}</span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c7, styles.c4)}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>Sex: {''}</span>
        <span className={(styles.c2, styles.underline)}>{sex}</span>
        <span className={styles.c4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Age: {''}</span>
        <span className={(styles.c2, styles.underline)}>{age}</span>
        <span className={styles.c4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Religion: {''}</span>
        <span className={(styles.c2, styles.underline)}>{religion}</span>
        <span className={styles.c4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status: {''}</span>
        <span className={(styles.c2, styles.underline)}>{civilstatus}</span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={styles.c8}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>Birthdate: {''}</span>
        <span className={(styles.c2, styles.underline)}>
          &nbsp;{birthday}-{birthmonth}-{birthyear}&nbsp;
        </span>
        <span className={styles.c4}>&nbsp; &nbsp; &nbsp;Place of Birth: {''}</span>
        <span className={(styles.c8, styles.underline)}>{placeofbirth}</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={styles.c9}>mm/dd/yyyy</span>
        <span className={(styles.c7, styles.c4)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>Height: {''}</span>
        <span className={(styles.c2, styles.underline)}>&nbsp;&nbsp;&nbsp;{height}&nbsp;&nbsp;&nbsp;</span>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weight: {''}
        </span>
        <span className={(styles.c2, styles.underline)}>&nbsp;&nbsp;&nbsp;{weight}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={(styles.c11, styles.c7)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Validity: {''}
        </span>
        <span className={(styles.c2, styles.underline)}>
          &nbsp;&nbsp;{valday}-{valmonth}-{valyear}&nbsp;&nbsp;&nbsp;
        </span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c7, styles.c9)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;In
          meters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;In
          kilograms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp; mm/dd/yyyy
        </span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c7, styles.c9)}></span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c11, styles.c7)}>Purpose: </span>
        <span className={styles.c2}>{purpose}</span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span
          style={{
            overflow: 'hidden',
            display: 'inline-block',
            margin: '0px 0px',
            border: '0px solid #000000',
            transform: 'rotate(0rad) translateZ(0px)',
            WebkitTransform: 'rotate(0rad) translateZ(0px)',
            width: '249px',
            height: '79px',
            float: 'right',
          }}
        >
          <img
            alt=""
            src="images/image4.png"
            style={{
              width: '249px',
              height: '79px',
              marginLeft: '0px',
              marginTop: '0px',
              transform: 'rotate(0rad) translateZ(0px)',
              WebkitTransform: 'rotate(0rad) translateZ(0px)',
            }}
            title=""
          />
        </span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c11, styles.c7)}></span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c11, styles.c7)}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={(styles.c1, styles.c4)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Left&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right
        </span>
        <p className={styles.c4}>
          <span className={styles.c1}></span>
        </p>
        <span className={(styles.c1, styles.c8)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thumb
          Mark
        </span>
      </p>
      <p className={styles.c4}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c4}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c1}>
        <span
          style={{
            overflow: 'hidden',
            display: 'inline-block',
            margin: '0px 0px',
            border: '0px solid #000000',
            transform: 'rotate(0rad) translateZ(0px)',
            WebkitTransform: 'rotate(0rad) translateZ(0px)',
            width: '300px',
            height: '68px',
          }}
        >
          <img
            alt=""
            src="images/image5.png"
            style={{
              width: '245px',
              height: '68px',
              marginLeft: '15px',
              marginTop: '0px',
              transform: 'rotate(0rad) translateZ(0px)',
              WebkitTransform: 'rotate(0rad) translateZ(0px)',
            }}
            title=""
          />
        </span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c11, styles.c7)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          &nbsp;Signature
        </span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c7, styles.c17)}></span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c11, styles.c7)}>&nbsp; &nbsp; &nbsp; &nbsp; Res. Cert No.: {''}</span>
        <span className={styles.c2}>{resCertNo}</span>
      </p>

      <p className={styles.c1}>
        <span className={(styles.c11, styles.c7)}>&nbsp; &nbsp; &nbsp; &nbsp; Date Issued: {''}</span>
        <span className={styles.c2}>
          {day}/{month}/{year}
        </span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c11, styles.c7)}>&nbsp; &nbsp; &nbsp; &nbsp; Place Issued: {''}</span>
        <span className={styles.c2}>{placeIssued}</span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c11, styles.c7)}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c11, styles.c7)}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified
          By:
        </span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c11, styles.c8)}>NOT VALID WITHOUT SEAL</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {''}
        </span>
        <span className={(styles.c8, styles.underline)}>{punongbarangay}</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={(styles.c7, styles.c4)}>Punong Barangay</span>
      </p>
      <p className={styles.c1}>
        <span className={(styles.c7, styles.c4)}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c7, styles.c12)}></span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c7, styles.c16, styles.c20)}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        </span>
        <span className={(styles.c11, styles.c8)}>By the Authority of the Punong Barangay</span>
      </p>
      <p className={(styles.c1, styles.c6)}>
        <span className={(styles.c11, styles.c7)}></span>
      </p>

      <p className={styles.c0}>
        <span className={styles.c0}></span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {''}
        </span>
        <span className={(styles.c8, styles.underline)}>{barangayKagawad}</span>
      </p>
      <p className={styles.c1}>
        <span className={styles.c4}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={(styles.c7, styles.c4)}>Barangay Kagawad OIC</span>
      </p>
    </Box>
  );
}
