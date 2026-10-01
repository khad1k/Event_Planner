import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box sx={{
      padding: '20px',
      paddingTop: '0'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button disableRipple
              component={Link} to='/' color="inherit" sx={{
              padding: '10px',
              fontSize: 40,
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'transparent'}}}>

              EvP</Button>
          </Typography>
          <Button component={Link} to='/events' color="inherit" sx={{fontSize: 25, fontWeight: 600}}>Events</Button>
          <Button component={Link} to='other_plans' color="inherit" sx={{fontSize: 25, fontWeight: 600}}>Other_Plans</Button>
          <Button component={Link} to='reviews' color="inherit" sx={{fontSize: 25, fontWeight: 600}}>Reviews</Button>
          <Button component={Link} to='login' color="inherit" sx={{fontSize: 25, fontWeight: 600}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}