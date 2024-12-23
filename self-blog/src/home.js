import React, {useState} from 'react';

const Home = () => {
    const Click_counts= () => {
        const [count, setCount] = useState(0);
        // console.log(count)
        return(
            <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        )
    }
     

    const welcome_message = (name) => {
        return ( 
            console.log("Welcome " + name + " !")
         );
    }
     
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* <button onClick = {click_counts()}>Click Counts</button> */}
            {/* <button onClick = {click_counts}>Click Counts</button> */}
            <button onClick = {()=> welcome_message('Mr. Nobody')}>Hidden Message</button>
            <Click_counts / >
            
            
        </div>
     );
}
 
export default Home;