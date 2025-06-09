import useCounter from "../../../hooks/useCounter";
import React from "react";

export default function CounterHook({counterTitle}) {
	const [count, plus, minus] = useCounter();
    return (
        <div className="bg-slate-100 w-36 m-auto shadow">
            <h1>{counterTitle}</h1>
            <h2>{count > 20 ? "more than 20" : "less than 20"}</h2>
            <h2>Count: {count}</h2>
            <button className="bg-green-700 w-full px-2 py-1 hover:bg-green-900 hover:text-gray-50 active:bg-white transition-all duration-200 rounded" onClick={plus}>Increment</button>
            <button className="bg-red-700 w-full px-2 py-1 hover:bg-red-900 hover:text-gray-50 active:bg-white transition-all duration-200 rounded" onClick={minus}>Decrement</button>
        </div>
    )
}
