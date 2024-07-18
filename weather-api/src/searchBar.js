import { useState } from "react";

export default function SearchBar(props) {
    const [inputVal, setInputVal] = useState('');

    function handleInput(event) {
        setInputVal(event.target.value);
        props.setInput(event.target.value);
    }

    return(
        <input id="inputField" value={inputVal} style={{width: "30%"}} onChange={handleInput} />
    )
}