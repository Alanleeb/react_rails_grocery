import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({ groceries, updateGrocery, deleteGrocery }) => (
  <div className="row">
    { groceries.map( grocery => 
        <Grocery
          key={grocery.id}
          {...grocery}
          updateGrocery={updateGrocery}
          deleteGrocery={deleteGrocery}
        />
      )
    }
  </div>
)

export default GroceryList;

