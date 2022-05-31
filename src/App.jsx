import React, { useState } from 'react';
import './App.css';
import bulma from 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import TodaysFood from './components/TodaysFood';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [foodList, setFoods] = useState(foods);
  const [todaysFood, setTodaysFood] = useState('');
  const [foodQuantity, setQuantity] = useState(1);

  // const handleQuantity = (event) => {
  //   // const findFoodToChangeQuantity = event.target.value.name.filter(()=>{})
  //   const value = event.target.valueAsNumber;
  //   // console.log('This is the event' + event.target.value);
  //   // console.log(value);
  //   setQuantity(value);
  // };

  const handleAddTodaysFood = (foodKey) => {
    const findFoodToAdd = foodList.filter((food) => {
      // console.log(food);
      // console.log(foodKey);

      // console.log(food.name.toString() === foodKey.toString());
      // console.log(food.name);
      return food.name === foodKey;
    });

    console.log(findFoodToAdd);

    const foodToAdd =
      findFoodToAdd[0].name + ' = ' + findFoodToAdd[0].calories + ' cal';
    setTodaysFood(foodToAdd);
    // console.log(foodToAdd);

    // console.log('This is the one' + foodToAdd[0].name);
  };

  const handlePresentForm = () => {
    setDisplayForm(!displayForm);
  };

  const [inputs, setInputs] = useState({
    name: '',
    quantity: 0,
    calories: 0,
  });

  const handleNameChange = (event) => {
    setInputs({ ...inputs, name: event.target.value });
  };

  const handleCaloriesChange = (event) => {
    setInputs({ ...inputs, calories: event.target.value });
  };

  const handleQuantityChange = (event) => {
    setInputs({ ...inputs, quantity: event.target.value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const updatedFoodList = [...foodList, inputs];
    setFoods(updatedFoodList);
    // console.log(updatedFoodList);

    alert(inputs.name + ' is added');
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // If I use foodList instead of foods, the search doesn't work.
    const searchResult = foods.filter((food) => {
      console.log(food.name);
      return food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });

    setFoods(searchResult);

    console.log(searchTerm);
  };

  return (
    <div className="App">
      <div></div>

      <div>
        <form>
          <label htmlFor="search-bar"></label>
          <input id="search-bar" onChange={handleSearch} />
        </form>
        <button onClick={handlePresentForm}>
          {/* {displayForm ? 'Submit' : 'Add'} new food */}
          Add new food
        </button>
        {displayForm && (
          <form onSubmit={handleFormSubmission}>
            <label htmlFor="food-name-input">Food name</label>
            <input
              id="food-name-input"
              type="text"
              name="name"
              placeholder="Enter food name"
              onChange={handleNameChange}
              value={inputs.name}
            />

            <label htmlFor="food-calories-input">Food calories</label>
            <input
              id="food-calories-input"
              type="text"
              name="calories"
              placeholder="Enter value"
              onChange={handleCaloriesChange}
              value={inputs.calories}
            />

            <label htmlFor="food-quantity-input">Food quantity</label>
            <input
              id="food-quantity-input"
              type="text"
              name="quantity"
              placeholder="Enter value"
              onChange={handleQuantityChange}
              value={inputs.quantity}
            />

            <button>Submit food</button>
          </form>
        )}
      </div>

      {foodList.map((food) => {
        return (
          <FoodBox
            food={food}
            key={food.name}
            onAdd={handleAddTodaysFood}
            // onQuantityChange={handleQuantity}
            // quantityValue={foodQuantity}
          />
        );
      })}
      <TodaysFood food={todaysFood} />
    </div>
  );
}

export default App;
