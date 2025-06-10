import react from 'react';
import {Card, Container} from 'react-bootstrap';



function Datewalakam(){
    const fname = "Mubeen";
    let current = new Date();
    current=current.getHours();

    const cssStyle={};
    let greet="";
    var random = Math.random()

    if(current >= 1 && current < 5){
        greet = "Good Night";
        cssStyle.color="red";
        document.body.style.backgroundColor = "lightyellow";
    }
    else if (current >=5 && current < 12){
        greet = "Good Morning";
        cssStyle.color="red";
        document.body.style.backgroundColor = "lightblue";
    }
    else if (current >=12 && current < 17){
        greet = "Good Afternoon";
        cssStyle.color="red";
        document.body.style.backgroundColor = "lightblue";
    }
    else if (current >=17 && current < 20){
        greet = "Good Evening";
        cssStyle.color="red";
        document.body.style.backgroundColor = "lightblue";
    }

    return (
        <Container className="text-center">
            <Card style={{ padding: '20px'}}>
                <h1>{greet}, {fname}!</h1>
                <p>Random Number: {random.toFixed(3)}</p>
                <p>Current Date & Time: {current.toLocaleString()}</p>
            </Card>
        </Container>
    );
}

export default Datewalakam;