'use client';
import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    console.log("Hello Counter component");

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
          
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">Counter</h2>
            <p className="text-xl">Count: {count}</p>
            <div className="flex gap-3">
                <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white transition hover:bg-blue-700"
                    onClick={increment}
                    aria-label="Increment counter"
                >
                    +
                </button>
                <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white transition hover:bg-red-700"
                    onClick={decrement}
                    aria-label="Decrement counter"
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;