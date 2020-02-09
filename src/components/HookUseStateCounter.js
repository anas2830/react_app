import React, { useState } from 'react';

function HookUseStateCounter() {
    const init = {
        firstname: '',
        lastname: ''
    };

    const [name,setName] = useState(init);

    return(
       <div>
           <form>
               <input type="text" value={name.firstname} onChange={(e) => setName({ ...name, firstname: e.target.value})}></input>
               <input type="text" value={name.lastname} onChange={(e) => setName({ ...name, lastname: e.target.value})}></input>
               <h2>Your First Name: {name.firstname}</h2>
               <h2>Your Last Name: {name.lastname}</h2>
           </form>
       </div>
    );
}

export default HookUseStateCounter;