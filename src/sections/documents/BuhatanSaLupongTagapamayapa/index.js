import { Box } from '@mui/material';
import { fontWeight, style } from '@mui/system';
import React from 'react';
import styles from './BuhatanSaLupongTagapamayapa.module.css';

export default function BuhatanSaLupongTagapamayapa({
  nagsumbong,
  sinumbong,
  casenumber,
  about,
  ngadtokang,
  date,
  month,
  year,
  time,
  day1,
  month1,
  year1,
  captain,
}) {
  return (
    <Box className={styles.c15}>
      <p className={styles.c7}>
        <span className={styles.c1}>Republic of the Philippines</span>
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
      <p className={styles.c7}>
        <span className={styles.c1}>Province of Bukidnon</span>
      </p>
      <p className={styles.c7}>
        <span className={styles.c1}>Municipality of Pangantucan</span>
      </p>
      <p className={styles.c7}>
        <span className={styles.c1}>BARANGAY KIMANAIT</span>
      </p>
      <p className={(styles.c7, styles.c12)}>
        <span className={styles.c1}></span>
      </p>
      <p className={(styles.c7, styles.c12)}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c7}>
        <span className={styles.c3}>BUHATAN SA LUPONG TAGAPAMAYAPA</span>
      </p>
      <table className={styles.thirdTable} style={{ color: '#000000' }}>
        <p className={(styles.c4, styles.c9)}>
          <span className={styles.c1} />
        </p>

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
              <span className={styles.underline}>{nagsumbong}</span>
            </strong>{' '}
          </th>
          <th style={{ paddingLeft: '150px', textAlign: 'right' }}>
            <strong>
              <span className={styles.c1}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaso sa
                Barangay/Numero
              </span>
            </strong>{' '}
            <strong>
              <span className={styles.underline}>{casenumber}</span>
            </strong>{' '}
          </th>
        </tr>
        <th style={{ paddingLeft: '50px', textAlign: 'left' }}>
          <strong>
            <span className={(styles.underline, styles.c1)}>[Mga] Nagsumbong</span>
          </strong>{' '}
        </th>
        <th style={{ paddingLeft: '150px', textAlign: 'left' }}>
          <strong>
            <span className={styles.c1}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mahitungod sa{' '}
            </span>
          </strong>{' '}
          <strong>
            <span className={styles.underline}>{about}</span>
          </strong>{' '}
        </th>
      </table>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <ul className={styles.c16}>
        <p className={(styles.c2, styles.c11)}>
          <span className={styles.c1}>- batok -</span>
        </p>
      </ul>
      <br></br>
      <tr>
        <th>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.underline}>{sinumbong}</span>
        </th>
      </tr>
      <tr>
        <th>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>
            <span className={(styles.underline, styles.c1)}>[Mga] Sinumbong</span>
          </strong>{' '}
        </th>
      </tr>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c14}>
        <span className={styles.c3}>PAGTAWAG</span>
      </p>
      <p className={styles.c14}>
        <span className={styles.c1}>[Summons]</span>
      </p>
      <p className={styles.c9}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c2}>
        <strong>
          <span className={styles.c1}>Ngadto kang: </span>
        </strong>
        <strong>
          <span className={styles.underline}>{ngadtokang} </span>
        </strong>
      </p>
      
      <p className={styles.c2}>
        <span className={styles.c1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c14}>
        <span className={(styles.underline, styles.c1)}>[Mga] Sinumbong</span>
      </p>
      <p className={styles.c9}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c10}>
        <span className={styles.c4}>
          Gitawag ikaw / kamo dinhi sapag-atubang personal kanako uban sa imong /inyong mga testigos, sa ika{' '}
          <strong>
            <span className={styles.underline}>{date}</span>
          </strong>{' '}
          nga adlaw sa bulan sa{' '}
          <strong>
            <span className={styles.underline}>{month}</span>
          </strong>{' '}
          tuig{' '}
          <strong>
            <span className={styles.underline}>{year}</span>
          </strong>{' '}
          sa alas
          <strong>
            <span className={styles.underline}> {time}</span>
          </strong>{' '}
          ang takna sa buntag / hapon, dinhi sa{' '}
        </span>
        <span className={styles.c3}>LUPONG TAGAPAMAYAPA OFFICE </span>
        <span className={styles.c1}>
          ning barangay, aron sa pagtubag sa usa ka sumbong nga gihimo atubangan kanako [ang kopya sa maong sumbong
          gilakip dinhi], alang sa malinawong paghusay sa inyong kasamok uban sa magsumbong.
        </span>
      </p>
      <p className={styles.c8}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c10}>
        <span className={styles.c1}>
          Gipahimatngonan ikaw / kamo nga kung ikaw / kamo magdumili o motuyo sa pagpakyas sa pagpakita agi&rsquo;g
          pagtuman niining pagtawag, mahimo nga ikaw / kamo did-an na sa pagpasaka sa bisan unsang sumbalik sumbong nga
          mutuybo uban sa nagsumbong.
        </span>
      </p>
      <p className={styles.c8}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c10}>
        <span className={styles.c4}>Tumana kini o kon dili, atubanga ang silot &ldquo;</span>
        <span className={styles.c3}>as for contempt of court</span>
        <span className={styles.c1}>
          &rdquo; kon susama nga silot nga ipahamtang sa hukmanan alang niadtong mosupak sa kamanduan niini.
        </span>
      </p>
      <p className={styles.c8}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c1}>
        Niining ika{' '}
        <strong>
          <span className={styles.underline}>{day1}</span>
        </strong>{' '}
        nga adlaw sa{' '}
        <strong>
          <span className={styles.underline}>{month1}</span>
        </strong>{' '}
        ,
        <strong>
          <span className={styles.underline}>{year1}</span>
        </strong>{' '}
        .
      </p>
      <p className={styles.c8}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c0}>
        <span className={styles.c1}></span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c5}>{captain}</span>
      </p>
      <p className={styles.c6}>
        <span className={styles.c1}>Punong Barangay</span>
      </p>
    </Box>
  );
}
