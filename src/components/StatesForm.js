import React, { useState } from "react";
import "./StatesForm.scss";
const StatesForm = (props) => {
    const [cityData, setCityData] = useState("");
    const getAllCities = (_id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id })
        };
        fetch('https://indian-state-api.herokuapp.com/getCity', requestOptions)
            .then(response => response.json())
            .then(data => {
                setCityData(data);
            });
    }
    const onChangeHandler = (event) => {
        if (event.target.value.length === 0) {
            return;
        }
        getAllCities(event.target.value);
    }
    return (
        <div className="main-container">
            <h1>Indian State API</h1>
            <div>
                <label>State: </label>
                <select onChange={onChangeHandler}>
                    <option></option>
                    {props.stateNames.map(state => <option key={state._id} value={state._id}>{state.name}</option>)}
                </select>
            </div>
            <div>
                <label>City: </label>
                <select>
                    <option></option>
                    {cityData.length === 0 ? <></> : cityData[0].cities.map(city => <option key={city._id} value={city._id}>{city.name}</option>)}
                </select>
            </div>

        </div>
    )
}
export default StatesForm