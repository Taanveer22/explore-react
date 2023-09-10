import React from "react";

const Image = () => {

    const imgStyle = {
        width: '350px',
        height: '250px'
    }

    return (
        <>
            <figure style={imgStyle}>
                <img src="./images/shoes.jpg"/>
            </figure>
        </>
    )
}


export default Image;