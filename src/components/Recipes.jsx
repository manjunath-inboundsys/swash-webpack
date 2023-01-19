import { useState } from 'react';

const elvenSheildRecipe = {
  leatherStrips: 2,
  ironIngot: 3,
  refinedMoonstone: 3,
};

const elvenGauntletRecipe = {
  ...elvenSheildRecipe,
  leather: 2,
  refinedMoonstone: 4,
};

console.log(elvenSheildRecipe);
console.log(elvenGauntletRecipe);

function Recipes() {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(elvenSheildRecipe)}>Elven Sheild Recipe</button>
      <button onClick={() => setRecipe(elvenGauntletRecipe)}>Elven Gauntlet Recipe</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
