import React from "react";


const Card = () => {

    //custom css written in internal style as like js object
    // tailwind and daisyui css written in inline style in the jsx xml elements

  const cardStyle = {
    color: "red",
    fontSize: "24px"
  };

  const imgStyle = {
    width: "350px",
    height: "250px"
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p style={cardStyle}>
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <figure style={imgStyle}>
          <img src="./images/shoes.jpg" />
        </figure>
        <p className="tex-base text-center mt-2">100k</p>
      </div>
    </>
  );
};

export default Card;
