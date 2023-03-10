import './index.scss';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const counterPlus = () => {
        setCount(count + 1);
    };

    const counterMinus = () => {
        setCount(count - 1);
    };

    return (
        <div className='App'>
            <div>
                <h2>Counter:</h2>
                <h1>{count}</h1>
                <button onClick={counterMinus} className='minus'>
                    - Minus
                </button>
                <button onClick={counterPlus} className='plus'>
                    Plus +
                </button>
            </div>
        </div>
    );
};

export default App;
