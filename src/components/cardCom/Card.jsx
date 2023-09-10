const Card = (propss) => {
  // console.log(propss);
  // console.log(propss.title);

  // dyanmic props data receiving

  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{propss.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">buy now</button>
          </div>
        </div>
        <figure>
          <img src="./images/shoes.jpg" />
        </figure>
        <p className="tex-base text-center mt-2">50k views</p>
      </div>
    </>
  );
};

export default Card;
