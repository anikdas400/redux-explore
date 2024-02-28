import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";


const Parent = () => {
    const [count,setCount] = useState(0)
    return (
        <div className='border-2 border-orange-800 max-w-7xl mx-auto rounded-lg'>
            <h2 className='m-5 text-xl text-left'>Parent CaseTwo</h2>
            <ChildOne count={count} setCount={setCount}></ChildOne>
            <ChildTwo count={count} setCount={setCount}></ChildTwo>
        </div>
    );
};

export default Parent;