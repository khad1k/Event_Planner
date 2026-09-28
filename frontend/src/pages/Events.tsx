import AutocompleteHint from "../components/AutocompleateHint"
import MediaCard from "../components/Card"

const Events = () => {
    return (
        <>
        <div id='events'>    
            <h1>Выберите мероприятие</h1>
            <AutocompleteHint />
            <div id='cardlist'>
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
            
            </div>
        </div>
        </>
    )
}

export default Events