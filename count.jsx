import { useState } from "react";

function Cat() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(10);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button>
            <input type="number" onInput={(e) => setName(parseFloat(e.target.value)+10)}/>
            <h1>Name: {name}</h1>
        </div>
    );
}

export default Cat;
