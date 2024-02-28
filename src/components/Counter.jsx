


const Counter = ({count,setCount}) => {
   
    return (
        <div>
             <div className="flex justify-center space-x-4 items-center m-10 shrink-0 px-5 max-w-md">
                    <button onClick={()=>setCount((prev)=> prev - 1)} className="bg-red-400 py-2 px-5 rounded-md text-black font-semibold">Decrement</button>
                    <h2 className="text-3xl">{count}</h2>
                    <button onClick={()=>setCount((prev)=> prev + 1)} className="bg-emerald-400 py-2 px-5 rounded-md text-black font-semibold">Increment</button>
                </div>
        </div>
    );
};

export default Counter;