
import { useState } from 'react';
import { BiMessageAdd } from 'react-icons/bi';
function Input({ handleButton }) {

    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const handleName = (event) => {
        setTodoName(event.target.value);
    }
    const handleDate = (event) => {
        setTodoDate(event.target.value);
    }
    const handleAdd = () => {
        handleButton(todoName, todoDate);
        setTodoName("");
        setTodoDate("");
    }
    return <>
        <div className="container" >
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo here" value={todoName} onChange={handleName} />
                </div>
                <div className="col-4">
                    <input type="date" value={todoDate} onChange={handleDate} />
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-success kg-button" onClick={handleAdd} > <BiMessageAdd />
                    </button>
                </div>
            </div>
        </div >
    </>
}
export default Input