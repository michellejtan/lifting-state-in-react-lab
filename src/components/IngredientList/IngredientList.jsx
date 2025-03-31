const IngredientList = ({ ingredients, addToBurger }) => {

    return (
        <ul>
            {ingredients.map((ingredient, index) => {
                return (
                    <li
                        key={index}
                        style={{ background: ingredient.color }}
                    >
                        {ingredient.name}
                        <button onClick={() => addToBurger(ingredient)} type="submit">+</button>

                    </li>
                );

            })}

        </ul>
    );
};

export default IngredientList;