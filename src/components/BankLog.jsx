import './log_style.css'

const BankLog = (props) => {
    console.log("BankLog")
    console.log(props);

    const data = props.data;
    console.log(data);

    return (
        <div>
            <pre class='bank_logging'>
            Transition {props.typeT} Record {props.index + 1} : <br />
                Amount : {data.amount} <br />
                Date : {data.date} <br />
                Description : {data.description} <br />
                Total : {data.total} <br />
            </pre>   
            <hr />       
        </div>
    );
};

export default BankLog;