import react, { useState } from "react";

function StaticLogin() {
    let [name, setname] = useState('');
    let [password, setpassword] = useState('');




    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const blogData = { name, password };

            console.log(blogData);
            if (name == "admin" && password == "admin1234") {
                console.log("Login Successful");
            } else {
                console.log("Lognin Failed");
            }
        }}>



            <label>Enter UserName </label>
            <input
                type="text"
                required
                onChange={(event) => setname(event.target.value)}
                value={name}
            />
            <br />

            <label>Enter Password </label>
            <input
                type="text"
                required
                onChange={(event) => setpassword(event.target.value)}
                value={password}
            />

            <br />

        

            <button type="submit">Submit</button>
        </form>
    )


}

export default StaticLogin;









// function Blog() {
//     let [title, settitle] = useState('');
//     let [Blog, setBlog] = useState('');
//     let [auther, setauther] = useState('Mubeen');

//     return (
//         <form onsubmit={(event) => {
//             event.preventDefault();
//             const blogData = { title, Blog, auther };

//             console.log(blogData);
//         }}>



//             <label>Enter Title </label>
//             <input
//                 type="text"
//                 required
//                 onChange={(event) => settitle(event.target.value)}
//                 value={title}
//             />
//             <br />

//             <label>Enter Blog </label>
//             <input
//                 type="text"
//                 required
//                 onChange={(event) => setBlog(event.target.value)}
//                 value={Blog}
//             />

//             <br />

//             <select
//                 onChange={(event) => setauther(event.target.value)}
//                 value={auther}
//             >

//                 <option value="jhon">JOhn </option>
//                 <option value="kelvin">Kelvin </option>


//             </select>
//             <br />

//             <button type="submit">Submit</button>
//         </form>
//     )


// }

// export default Blog;