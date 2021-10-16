import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifsExpertApp = () => {

    //const categories = ['Jimmy Hendrix', 'Eric Clapton', 'George Harrison'];
    const [categories, setCategories] = useState(['Jimmy Hendrix']);

    // const handleAdd = () => {
    //     //setCategories( categories.push('Ronnie Wood') );
    //     setCategories( [...categories, 'Ronnie Wood' ] );
    //     // al parecer no se puede agregar metodos
    // }

    return (
        <>
            {/* <button onClick={ handleAdd }>Add</button> */}
            <h2> Gifs Expert App </h2>

            <AddCategory setCategories={setCategories} />

            <hr/>

            <ol>
                    {
                        categories.map( category => ( 
                            <GifGrid key={category} category={category}/>                   
                        ))
                    }
            </ol>
        </>
    )
}

export default GifsExpertApp;