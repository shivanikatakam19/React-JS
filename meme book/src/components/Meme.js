import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {

    const [memeImage, getMemeImage] = useState("")

    function getRandomMeme() {
        let meme = memesData.memes[(Math.floor(Math.random() * memesData.memes.length))];
        getMemeImage(meme.url)
    }

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
            {<img className="meme-image" src={memeImage} />}
        </div>
    );
}

export default Meme