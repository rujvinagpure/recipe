import React from 'react'

function RecipeTile({recipe}) {
    return (
        <div className="recipeTile">
            <img src ={ recipe["recipe"]["image"]}/>
            <p>{recipe["recipe"]["label"]}</p>

        </div>
    );
}

export default RecipeTile;