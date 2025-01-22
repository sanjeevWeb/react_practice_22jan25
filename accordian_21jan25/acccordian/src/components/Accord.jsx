import React, { useState } from 'react';
import './Accord.css'
import data from './data';

const Accord = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [multiSelectEnable, setMultiSelectEnable] = useState(false);
    const [multipleIds, setMultipleIds] = useState([]);

    const handleSingleSelect = (id) => {
        setSelectedId(id === selectedId ? null : id)
    }

    const handleMultiSelect = (id) => {
        // setMultipleIds((prev) => {   // throwing error 
        //     return prev.indexOf(id) === -1 ? prev.push(id) : prev.splice(id,1)
        // })
        let cpyMutiple = [...multipleIds];
        const findIndexOfCurrentId = cpyMutiple.indexOf(id);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(id);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        setMultipleIds(cpyMutiple);
    }
    return (
        <div>
            <div id="wrapper">
                <button onClick={() => setMultiSelectEnable(!multiSelectEnable)}>Enable Multi Selection</button>
                <div id="questions">
                    {
                        data && data.length > 0 ? data.map((ele, key) => {
                            return (
                                <div key={ele.id}>
                                    <div id="plusbtn" onClick={
                                        multiSelectEnable ?
                                            () => handleMultiSelect(ele.id) :
                                            () => handleSingleSelect(ele.id)}>
                                        <p>{ele.question}</p>
                                        <button>+</button>
                                    </div>
                                    {
                                        multiSelectEnable ? multipleIds.indexOf(ele.id) !== -1 && (<div id="ans">{ele.answer}</div>) : selectedId === ele.id && (<div id="ans">{ele.answer}</div>)
                                    }
                                    {/* {
                                        selectedId === ele.id ? <div id="ans">{ele.answer}</div> : null
                                    } */}
                                </div>
                            )
                        }) : <div>No data found</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Accord;
