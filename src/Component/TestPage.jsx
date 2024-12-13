import axios from "axios";

function TestPage(){
    const testing= async () => {
        axios.post('http://localhost:4000/test/t1')
        .then((res) =>{
            alert("testing success")
        })
        .catch((err) => {
            alert('testing not completed')
        })
    }
    return(
        
        <>
        <h1>Test page</h1> 
        <button onClick={testing}>
            click here
        </button>
        </>
    )
}

export default TestPage;