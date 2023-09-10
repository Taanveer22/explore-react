import React from "react";

const Title = () => {
    //internal css written in js object style  
  const myStyle = {
    color: 'red',
    fontSize: '24px'
     }

    return (
        <>
            
          <div className="card-body">
               <h2 className="card-title">Shoes!</h2>
               <p style={myStyle}>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
               </div>
          </div>

        </>
    )
}



export default Title;