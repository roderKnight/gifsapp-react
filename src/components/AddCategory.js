import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValues, setInputValues] = useState('');

    const handleInputChange = (e) => {
        setInputValues(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValues.trim().length > 2){
            setCategories( cat => [ inputValues, ...cat] );
            setInputValues('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValues}
                onChange={handleInputChange}
                />        
            <button>Submit</button>  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

