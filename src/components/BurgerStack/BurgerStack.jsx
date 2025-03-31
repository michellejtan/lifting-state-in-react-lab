const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <ul>
            {stack.map((ingredient, index) => {
                return (
                    <li
                        key={index}
                        style={{ background: ingredient.color }}
                    >
                        {ingredient.name}
                        <button onClick={() => removeFromBurger(index)} type="submit">X</button>

                    </li>
                );

            })}

        </ul>
    );
};

export default BurgerStack;  