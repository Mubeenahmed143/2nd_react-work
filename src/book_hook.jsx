import React, {useState  } from "react";

function Addhook() {
    let [like,setlike] = useState(10);
    let [share,setshare] = useState(10);
    return(
        <div>
            <button onClick={()=>{setlike(like+1);
                console.log(like)
            }}>
                👍
            </button>

            <button onClick={()=>{setshare(share+1);
                console.log(share)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="black">
  <path d="M4 12c0 4.418 3.582 8 8 8v4l8-8-8-8v4c-3.313 0-6 2.687-6 6z"/>
</svg>

            </button>



<h1>{like} 👍</h1>

<h1>{share} </h1>


        </div>
    );
}


export default Addhook;