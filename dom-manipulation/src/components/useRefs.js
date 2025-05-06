/* eslint-disable jsx-a11y/img-redundant-alt */

// useRef is used to scroll, measuring elements, focusing elements(i.e., outside react)
// we can remove the dom element by using useref
// compoent does not expose dom elements by default, if we want we have to expose them by using ref prop
// avoid changing dom nodes using useRef

import React, { useRef } from 'react'

export default function UseRefs() {

    const firstDivRef = useRef(null);
    const secondDivRef = useRef(null);
    const thirdDivRef = useRef(null);

    function scrollToFirstImage() {
        firstDivRef.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        })
    }

    function scrollToSecondImage() {
        secondDivRef.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        })
    }

    function scrollToThirdImage() {
        thirdDivRef.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        })
    }

    return (
        <div>
            <h4 style={{ margin: "0px" }}>Scroll to image using useRef</h4>
            <nav>
                <button onClick={scrollToFirstImage}>first image</button>
                <button onClick={scrollToSecondImage}>second image</button>
                <button onClick={scrollToThirdImage}>third image</button>
            </nav>
            <div>
                <ul style={{ display: 'flex', width: '200px', overflow: 'scroll' }}>
                    <li><img src='https://placecats.com/neo/200/200' ref={firstDivRef} alt='first image' /></li>
                    <li><img src='https://placecats.com/millie/200/200' ref={secondDivRef} alt='second image' /></li>
                    <li><img src='https://placecats.com/bella/200/200' ref={thirdDivRef} alt='third image' /></li>
                </ul>
            </div>
        </div>
    )
}