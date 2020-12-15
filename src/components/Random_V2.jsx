import React from 'react';
import useGif from '../useGif';

const Tag = () => {
    const { gif, fetchGif } = useGif();

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;