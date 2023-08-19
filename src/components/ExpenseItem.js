
import React, { useContext } from 'react';
import { FcPlus } from 'react-icons/fc';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><FcPlus size="3em"><button onClick={event=> increaseAllocation(props.name)}>+</button></FcPlus></td>
        <td><BiSolidMinusCircle size='3em' style={{color:'white',backgroundColor:'red'}} onClick={handleDeleteExpense}></BiSolidMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;