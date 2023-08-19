import React,{useContext,useState} from 'react'
import {AppContext} from '../context/AppContext'

const Budget=()=>{
    const {budget,dispatch}= useContext(AppContext);
    const [budgetVal, setBudget] = useState(budget);

    const changeHandler=(event)=>{

        
        setBudget(event.target.value);

        dispatch(
            {
                type: 'SET_BUDGET',
                payload: budgetVal,
            }
        )
    }

    return (
        <div className="alert alert-secondary">
            <label>Budget:€</label>
            <input  type='number' value={budgetVal} 
            step="10" onChange={changeHandler}
            max="20000"
            ></input>
        </div>

    )
}

export default Budget;