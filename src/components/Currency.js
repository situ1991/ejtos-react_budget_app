import { useState } from "react";
import Select, { components } from "react-select";
import './Currency.css'

const Currency=()=>{
    const [currency,setCurrency]=useState({ label: "Currency (£ Pound)", value: "$", color: "#badbcc" });

    const changeHandler=(event)=>{
        console.log('inside change handler');
        console.log(`Currency (${event.label})`)
        console.log(event);
        setCurrency({...currency,value:event.value,label: `Currency (${event.label})`})

    }
    const options = [
        { label: "$ Dollar", value: "$", color: "#badbcc" },
        { label: "£ Pound", value: "£", color: "#badbcc" },
        { label: "€ Euro", value: "€", color: "#badbcc" },
        { label: "₹ Rupee", value: "₹", color: "#badbcc" }
      ];
    const Option = props => {
        return (
          <div style={{ backgroundColor: props.data.color }}>
            <components.Option {...props} >
                
                </components.Option>
          </div>
        );
      };

      const style = {
        control: (base) => ({
            
          ...base,
          border: 0,
          // This line disable the blue border
          boxShadow: "none",
          backgroundColor:"#badbcc",  
          
        //   borderColor: state.isSelected ? 'purple' : 'red'         
        })
      };
 return (
     <>
     <div >
      <Select styles={style} defaultValue={currency} components={{Option}} options={options}  onChange={changeHandler} />
    </div>
    
</>
 )
}
export default Currency;