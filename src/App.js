import StatesForm from "./components/StatesForm";
import React,{useState,useEffect} from "react";
const App = () => {
  const [stateNames, setStateNames] = useState([])
    useEffect(() => {
        fetch('https://indian-state-api.herokuapp.com/getAllState')
            .then(response => response.json())
            .then(data => setStateNames(data));
    }, [])
  return (
    <div >
      <StatesForm stateNames={stateNames}/>
    </div>
  );
}

export default App;
