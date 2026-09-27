
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


const Welcome = () => {
    return (
        <>
        <div id="welcome">
            <h1>Добро пожаловать в планировщик ивентов!</h1>
            <div className="div1">
            <br /><p className="p1">В EvP вы можете выбирать поездки, прогулки, свидания и много других разных
                мероприятий. Планировщик сам за вас рассчитает время, выберет нужный маршрут и транспорт.
            </p>
            </div>
            <br />
            <div id='reviews'>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    NameProfile
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                    Stars: 5
                </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    NameProfile
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                    Stars: 5
                </CardActions>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    NameProfile
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                    Stars: 5
                </CardActions>
                </Card>
            </div>
        </div>
            
        </>
    )
}

export default Welcome