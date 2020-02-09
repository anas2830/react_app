import React, { useState } from 'react';

function HookUseStateArray() {

    const [items, setItems] = useState([
        {id:1,value:1},
        {id:2, value:2},
        {id:3, value:3},
        {id:4, value:4},
        {id:5, value:5},
        {id:6, value:6},
    ]);

    const addItem = () => {
        setItems([ ...items, {
           id: items.length,
           value: items.length+1
        }])
    }

    return(
       <div>
           <button onClick={addItem}>Add Number</button>
           <ul>
               {items.map(item => (
                   <li key={item.id}>{item.value}</li>
               ))}
           </ul>
       </div>
    );
}

export default HookUseStateArray;