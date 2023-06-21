import React, {useState} from "react";

const Home = (props) => {
    return (
        <>
            <h1>Home Page</h1>
            <p>Current Balance : { props.credits - props.debits }</p>
        </>
    );
};

export default Home;