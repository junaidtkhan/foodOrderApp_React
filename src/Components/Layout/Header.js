import classes from './Header.module.css'
import { Fragment } from 'react'
import mealImage from '../../Assets/meal.jpg'
import { HeaderCartButton } from './HeaderCartButton'
export const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h2 >Al-Maida</h2>
                <HeaderCartButton onClick={props.onCartShow}/>
        </header>

        <div className={classes['main-image']}>
            <img src={mealImage} alt="" />
        </div>
    </Fragment>
}