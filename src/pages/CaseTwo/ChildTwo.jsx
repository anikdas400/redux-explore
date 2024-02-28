import Counter from "../../components/Counter";


const ChildTwo = ({count,setCount}) => {
    return (
        <div  className='border-2 border-indigo-500 max-w-4xl mx-auto rounded-lg mt-5 mb-5'>
            {/* <h2 className='m-5 text-xl text-left'>ChildOne</h2> */}
            <div className="w-10 h-10 m-5 rounded-full bg-yellow-400 text-3xl grid place-content-center">
                <p>2</p>
            </div>
            <div className="w-full grid place-content-center">
                <Counter count={count} setCount={setCount}></Counter>
            </div>
            
        </div>
    );
};

export default ChildTwo;