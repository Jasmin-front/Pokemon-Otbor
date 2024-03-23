import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./featuers/postsSlice";
import './App.css'

const App = () => {
    const pokemon = useSelector((state) => state.postsSlice.pokemon)
    const dispatch = useDispatch()
    console.log(pokemon)
    useEffect(() => {
        dispatch(fetchData())
    }, []);
    return (
        <div className='main'>
            <h1 className='title'>GEEKS</h1>
            {
                pokemon.map((item) => (
                    <div key={item.id} className='card' >
                        <img width='100px' src={item.sprites.other.dream_world.front_default} alt=""/>
                        <h2>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default App;