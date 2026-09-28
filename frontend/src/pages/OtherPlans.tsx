import DatePicker from "../components/DatePicker"
import RecipeReviewCard from "../components/EvPpost"
const OtherPlans = () => {
    return (
        <>
        <div className="container">
            <h1>Выберите дату</h1>
            <DatePicker />
             <div id="other_plans">
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                
             </div>
        </div>
        </>
    )
}

export default OtherPlans