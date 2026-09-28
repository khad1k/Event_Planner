import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const Review = () => {
    return (

        <Card sx={{margin: "20px", minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                NameProfile
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                </Typography>
            </CardContent>
            <CardActions>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </CardActions>
        </Card>
    )
}

export default Review