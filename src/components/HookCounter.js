import React, { useState } from 'react';

function HookCounter(){
    const init = 0;
    const [count, setCount] = useState(init);
    const incrementFive = () => {
    var increment_five_count = 0
      for(var i=0;i<5;i++){
          setCount(increment_five_count => increment_five_count + 1);
      }
    }

    return(
       <div>
           <p>count: {count} </p>
           <button  onClick={()=>setCount(init)}> Reset </button>
           <button  onClick={()=>setCount(count+1)}> Increment </button>
           <button  onClick={()=>setCount(count-1)}> Decrement </button>
           <button  onClick={incrementFive}>increment 5 </button>
       </div>
    );
}

export default HookCounter;