import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';

const Login = () => {
    return (
        <>
        <Box>
        <Stack sx={{alignItems: 'center', gap: 2}}>
            <Typography variant="h3" gutterBottom>
                Вход
            </Typography>
            <TextField id="outlined-basic" label="Login" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
        </Stack>
        </Box>
        </>
    )
}


export default Login