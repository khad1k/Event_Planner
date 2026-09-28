import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'secondary.main' }}>
      <Typography>Our social media:</Typography>

      <Box
        id="link"
        sx={{
            padding: '20px',
            paddingTop: 0,
            mx: '20%',
            display: 'flex',
            justifyContent: 'space-between',
            }}
      >
        <Link href="https://t.me/SLK_khadik" underline="hover">
          telegram
        </Link>

        <Link href="https://github.com/khadlk" underline="hover">
          github
        </Link>

        <Link href="https://www.instagram.com/khad1kson?stkn=MWp1MnRoMnIzb3l6ZA%3D%3D&utm_source=qr" underline="hover">
          instagram
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;