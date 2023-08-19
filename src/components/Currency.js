import { useState } from "react";

const Currency=()=>{
    const [currency,setCurrency]=useState('$ Dollar');

    const changeHandler=(event)=>{
        setCurrency(event.target.value)

    }
 return (
     <>
    <div className="alert alert-success">
        <label htmlFor="inputGroupSelect01" >Currency (
            <select id="inputGroupSelect01" onChange={changeHandler}>
                <option defaultValue>{currency}</option>
                <option value="$ Dollar" name="dollar"> $ Dollar</option>
                <option value="£ Pound" name="pound">£ Pound</option>
                <option value="€ Euro" name="euro">€ Euro</option>
                <option value="₹ Rupee" name="Rupee">₹ Rupee</option>

            </select>
        )
            </label>
</div>
</>
 )
}
export default Currency;