import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [tag, setTag] = useState('');
    const [gif, setGif] = useState('');
    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }
    useEffect(() => {
        fetchGif(tag);

    }, []);

    const handleClick = () => {
        fetchGif(tag);
    }



    return (
        <>
            <div className="container">
                <img width="300" height="270" src={gif} alt=" Random Gif" />
                <input placeholder="Search specific gif" value={tag} onChange={(e) => setTag(e.target.value)} />
                <button onClick={handleClick}>CLICK FOR NEW</button>
            </div>
        </>
    );
}

export default Random;