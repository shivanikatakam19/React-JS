import React, { useEffect, useState } from "react";
import memesData from "../memesData";

function Meme() {

    const [meme, setMeme] = useState({
        bottomText: '',
        topText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemesImages, setMemesImages] = useState(memesData)


    function getRandomMeme() {
        let meme = allMemesImages.memes[(Math.floor(Math.random() * allMemesImages.memes.length))];
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: meme.url
        }))
    }

    useEffect(() => {
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: meme.randomImage
        }))
    }, [])

    return (
        <div>
            <div className="row d-flex justify-content-evenly">
                <div className="d-grid form-field">
                    <label>Top Text</label>
                    <input type="text" />
                </div>
                <div className="d-grid form-field">
                    <label>Bottom Text</label>
                    <input type="text" />
                </div>
            </div>
            <button className="generate-meme-button" onClick={getRandomMeme}>Get a new meme image  🖼</button>
            {meme.randomImage && <img className="meme-image" src={meme.randomImage} />}
        </div>
    );
}

export default Meme