import { useLocation } from "react-router-dom";


const CalculatorPageComponent = () => {
    const {state} = useLocation();

    return <h1>{state}</h1>
}

export default CalculatorPageComponent;