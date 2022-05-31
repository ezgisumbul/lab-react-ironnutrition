import React from 'react';

const TodaysFood = (props) => {
  return (
    <div class="column content">
      <h2 class="subtitle">Today's foods</h2>
      <ul>
        <li>{props.food}</li>
        <li>2 Salad = 300 cal</li>
      </ul>
      <strong>Total: 700 cal</strong>
    </div>
  );
};

export default TodaysFood;
