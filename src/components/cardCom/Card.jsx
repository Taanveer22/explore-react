import React from "react";

const Card = (props) => {
  console.log(props);
  // title data receiving by props
  // views data receiving by props
  // buy now button data receiving by props

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{props.buy}</button>
          </div>
        </div>
        <figure>
          <img src="./images/shoes.jpg" />
        </figure>
        <p className="tex-base text-center mt-2">{props.views}</p>
      </div>
    </>
  );
};

export default Card;
