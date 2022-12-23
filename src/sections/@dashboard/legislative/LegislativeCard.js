// // @mui
// import { Card, Link, Typography } from '@mui/material';
// import { alpha, styled } from '@mui/material/styles';
// import PropTypes from 'prop-types';
// // utils
// // components
// import Iconify from '../../../components/Iconify';

// // ----------------------------------------------------------------------

// const IconWrapperStyle = styled('div')(({ theme }) => ({
//   margin: 'auto',
//   display: 'flex',
//   borderRadius: '50%',
//   alignItems: 'center',
//   width: theme.spacing(8),
//   height: theme.spacing(8),
//   justifyContent: 'center',
//   marginBottom: theme.spacing(3),
// }));

// // ----------------------------------------------------------------------

// LegislativeCard.propTypes = {
//   color: PropTypes.string,
//   icon: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
//   sx: PropTypes.object,
// };

// export default function LegislativeCard({
//   series,
//   ordinanceNumber,
//   authors,
//   title,
//   icon,
//   color = 'primary',
//   sx,
//   url = null,
//   ...other
// }) {
//   return (
//     <Link sx={{ textDecoration: 'none' }} href={url} color="#100720">
//       <Card
//         sx={{
//           py: 5,
//           px: 5,
//           boxShadow: 0,
//           height: '100%',
//           textAlign: 'center',
//           color: (theme) => theme.palette[color].darker,
//           bgcolor: (theme) => theme.palette[color].lighter,
//           ...sx,
//         }}
//         {...other}
//       >
//         <IconWrapperStyle
//           sx={{
//             color: (theme) => theme.palette[color].dark,
//             backgroundImage: (theme) =>
//               `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
//                 theme.palette[color].dark,
//                 0.24
//               )} 100%)`,
//           }}
//         >
//           <Iconify icon={icon} width={24} height={24} />
//         </IconWrapperStyle>
//         <Typography variant="subtitle4" sx={{ opacity: 0.72 }}>
//           Ordinance No. {ordinanceNumber}
//         </Typography>
//         <Typography variant="subtitle4" sx={{ opacity: 0.72 }}>
//           , Series of {series}: {title}
//         </Typography>
//         <Typography variant="subtitle8" sx={{ opacity: 0.72, display: 'flex' }}>
//           {authors}
//         </Typography>
//       </Card>
//     </Link>
//   );
// }
