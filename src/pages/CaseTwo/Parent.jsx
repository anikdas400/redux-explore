
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";


const Parent = () => {
    
    return (
        <div className='border-2 border-orange-800 max-w-7xl mx-auto rounded-lg'>
            <h2 className='m-5 text-xl text-left'>Parent CaseTwo</h2>
            <ChildOne></ChildOne>
            <ChildTwo></ChildTwo>
        </div>
    );
};

export default Parent;