import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BankLog from "./BankLog";
import './log_style.css'


const debitsTransitionLog = [];

const Debits = (porps) => {
    const navigate = useNavigate();

    const backToHome = () => {
        return navigate("/");
    };

    const submitButton = () => {
        var amount = parseFloat(document.getElementById("newAmount").value);
        var description = document.getElementById("description").value;
        var date = document.getElementById("date").value;

        if (isNaN(amount)) {
            return () => {
                <center>
                    <h1>Input value amount error</h1>
                </center>
            };
        }

        if (description === "") {
            description = "un-descript";
        }

        if (date === "") {
            date = new Date().toLocaleDateString();
        }

        var new_amount = amount + porps.currentDebits;
        porps.update(new_amount);
        
        const transObj = {
            "amount" : amount,
            "description" : description,
            "date" : date,
            "total" : new_amount
        };

        debitsTransitionLog.push(transObj);
    };

    return (
        <>
            <div className="App">
                <h1>Debits Page</h1>
                <p>Current Balance : { porps.currentCredits - porps.currentDebits }</p>
                <p>Current Credits : { porps.currentDebits } </p>
                <button onClick={backToHome}>Back TO Home Page</button>

                <br />
                
                <div>
                    <p>New Debits Amount</p>
                    <input type='text' placeholder="Enter new Debits Amount" id='newAmount' />
                    <br />
                    <input type="text" placeholder="Description" id='description' />
                    <br />
                    <input type="date" placeholder="Date" id='date' />
                    <br />
                    <input type="submit" value="Submit" onClick={submitButton}/>
                </div>

                <br />
                <hr />

                <center>
                <div class='display_log'>
                    <h3>Debits Transition Record</h3>
                    <hr />
                    <div>
                        {
                            debitsTransitionLog.map((element, index) => {
                                return <BankLog index={index} data={element} typeT="Debits"/>
                            })
                        }
                    </div>
                </div>
                </center>

            </div>
        </>
    );
};

export default Debits;