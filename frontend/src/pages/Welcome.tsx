import  Review  from "../components/Review.tsx"



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
                <Review />
                <Review />
                <Review />
            </div>
        </div>
            
        </>
    )
}

export default Welcome