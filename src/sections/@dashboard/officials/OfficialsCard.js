import PropTypes from 'prop-types';
// material
import { Avatar, Box, Card, CardContent, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
//
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import SvgIconStyle from '../../../components/SvgIconStyle';
import { useAuth } from '../../../hooks/useAuth';
import { useProfile } from '../../../hooks/useProfile';
import { deleteOfficial } from '../../../service/official';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  height: 20,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

OfficialsCard.propTypes = {
  official: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function OfficialsCard({ official, index }) {
  const { uploadImage, name, title } = official;
  const latestPostLarge = index;
  const latestPost = index;
  const navigate = useNavigate();
  const user = useAuth();
  const profile = useProfile(user?.uid);

  const DELETE = [{ icon: 'fluent:delete-16-filled' }];
  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shapeAvatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              color: 'background.paper',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <AvatarStyle
            alt={name}
            src={uploadImage}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />
          <CoverImgStyle alt={name} src={uploadImage} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <TitleStyle
            color="inherit"
            variant="subtitle2"
            underline="hidden"
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            {name}
          </TitleStyle>
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {title}
          </Typography>

          {user && profile?.accountRole && profile?.accountRole !== 'Captain' && (
            <InfoStyle>
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500',
                  }),
                }}
              >
                <Tooltip title="Edit">
                  <IconButton
                    sx={{ mb: -2 }}
                    onClick={() => {
                      console.log('Edit clicked:', official.id);
                      navigate(`/dashboard/editOfficialsProfile?uid=${official.id}`);
                    }}
                  >
                    <EditIcon sx={{ width: 20, height: 22 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    sx={{ mb: -2 }}
                    onClick={() => {
                      deleteOfficial(official.id);
                    }}
                  >
                    <DeleteIcon sx={{ width: 20, height: 22 }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </InfoStyle>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
