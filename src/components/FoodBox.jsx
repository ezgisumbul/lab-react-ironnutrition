import React from 'react';

import { useState } from 'react';

const FoodBox = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (event) => {
    // const findFoodToChangeQuantity = event.target.value.name.filter(()=>{})
    const value = event.target.valueAsNumber;
    // console.log('This is the event' + event.target.value);
    // console.log(value);
    setQuantity(value);
  };

  console.log(props);
  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.food.image} alt={props.food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.food.name}</strong> <br />
                <small>{props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={handleQuantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    props.onAdd(props.food.name);
                  }}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      {/* <TodaysFood /> */}
    </div>
  );
};

// const TodaysFood = () => {
//   return (
//     // <div id="root">
//     //   <div class="container">
//     //     <div class="columns">
//     <div class="column content">
//       <h2 class="subtitle">Today's foods</h2>
//       <ul>
//         <li>1 Pizza = 400 cal</li>
//         <li>2 Salad = 300 cal</li>
//       </ul>
//       <strong>Total: 700 cal</strong>
//     </div>
//     /* </div>
//       </div>
//     </div> */
//   );
// };

export default FoodBox;
