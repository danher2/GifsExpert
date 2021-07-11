import React, {useState} from 'react'
import PropTypes from 'prop-types';






export const AddCategory = ({setCategories}) => {

    //estado inicial del input
    const [inputValue, setInputValue] = useState('');
   
    const handledInputChange = (e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    } 

    const handledSubmit = (e)=>{
      e.preventDefault(); // quita el refresh del submit, ya no se hace eso
      
      if(inputValue.trim().length>2){
      setCategories(cats=>[inputValue, ...cats]);
      setInputValue('');
    }
      // console.log("Submit hecho!!!");
      
    }


    return (
        
        <form onSubmit = {handledSubmit}>
        <input
                type='text'
                value={inputValue}
                onChange={handledInputChange}
           
           />

        </form>
       
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  }
