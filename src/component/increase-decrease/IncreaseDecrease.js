import React, { useState } from 'react';

const IncreaseDecrease = () => {
    const [x, setX] = useState(localStorage.getItem('num'));
    localStorage.setItem("num", x)
    const total1 = () => setX(x + 1);
    const total2 = () => setX(x - 1);
    return (
        <div>
            <h2>{localStorage.getItem('num')}</h2>
            <button onClick={total1}>Increase</button>
            <button onClick={total2}>Decrease</button>
        </div>
    );
};

export default IncreaseDecrease;