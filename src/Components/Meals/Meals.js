import MealsSummary from "./MealsSummary"
import { AvailableMeals } from "./AvailableMeals"
import { Fragment } from "react"
export const Meals = props => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}