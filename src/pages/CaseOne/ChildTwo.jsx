

const ChildTwo = () => {
    return (
        <div className='border-2 border-indigo-500 max-w-4xl mx-auto rounded-lg mt-5 mb-5'>
            {/* <h2 className='m-5 text-xl text-left'>ChildTwo</h2> */}
            <div className="w-10 h-10 m-5 rounded-full bg-yellow-400 text-3xl grid place-content-center">
                <p>2</p>
            </div>
            <div className="w-full grid place-content-center">
                <div className="flex justify-center space-x-4 items-center m-10 shrink-0 px-5 max-w-md">
                    <button className="bg-red-600 py-2 px-5 rounded-md text-black font-semibold">Decrement</button>
                    <h2 className="text-3xl">0</h2>
                    <button className="bg-emerald-400 py-2 px-5 rounded-md text-black font-semibold">Decrement</button>
                </div>
            </div>
            
        </div>
    );
};

export default ChildTwo;