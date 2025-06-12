
import React from 'react';
function Color() {
    function handleClick(){
        let bodystyle = document.body.style;
        if(bodystyle.backgroundColor === 'black'){
            bodystyle.backgroundColor = 'white';
        }
        else {
            bodystyle.backgroundColor = 'black';
        }
    }

    return (
        <button onClick={handleClick}>
            Change Mode
        </button>
    );

}

export default Color