import React from "react";
import Title from "./Title";
import Image from "./Image";
import Views from "./Views";

const Card = () => {
    return (
        <>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <Title></Title>
                    <Image></Image>
                    <Views></Views>
                </div>
        </>
    )
}



export default Card;