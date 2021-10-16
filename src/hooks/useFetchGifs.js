import { useEffect } from "react";
import { useState } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        GetGifs(category)
            .then(imgs => {

                setstate({
                    data: imgs,
                    loading: false
                });

            })
    }, [category])

    return state;
}
