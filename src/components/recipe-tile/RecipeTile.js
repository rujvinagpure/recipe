import React from 'react'
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
    return (
        <div className="recipeTile">
          <img className="recipeTile__img"
           src={recipe["recipe"]["image"]} />
        <p className="recipeTile__name" 
        key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>

  );
}

