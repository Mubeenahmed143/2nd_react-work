import React, {useState  } from "react";

function Addhook() {
    let [like,setlike] = useState(10);
    return(
        <div>
            <button onClick={()=>{setlike(like+1);
                console.log(like)
            }}>
                👍
            </button>



<h1>{like} 👍</h1>

        </div>
    );
}


export default Addhook;