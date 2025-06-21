import React, {useContext} from "react";
import {MyContext} from './App';

function ChildB(){
    const user = useContext(MyContext);

    return <h3> Hello {user} from ChildB</h3>;

}

export default ChildB;