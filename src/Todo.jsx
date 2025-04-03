function Todo(){
    function showAlert(){
        alert("Hello Sidhesh!");
    }
    return(
        <div>
            <h1>Hello Sidhesh</h1>
            <button onClick={showAlert}>Click Me to show alert!!</button>
        </div>
    )
}

export default Todo;
