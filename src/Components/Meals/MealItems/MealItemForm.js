import classes from './MealItemForm.module.css'

import { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
export const MealItemForm = props => {

    const [amountIsValid,setamountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredaAmountNumber = +enteredAmount

        if (
            enteredAmount.trim().length === 0 ||
            enteredaAmountNumber < 1 ||
            enteredAmount > 5
        ) {
            setamountIsValid(false)
            return
        }
        setamountIsValid(true)
        props.onAddToCart(enteredaAmountNumber)
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter valid input..!</p>}
    </form>
}