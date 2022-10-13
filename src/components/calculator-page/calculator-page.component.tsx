import { useLocation } from "react-router-dom";
import { CalculatorPathEnum } from "../../models/calculatorPath.enum";
import InstrumentationAmplifierComponent from "./components/insturmentation-amplifier/insturmentation-amplifier.component";
import LorentzForceComponent from "./components/lorentz-force/lorentz-force.component";

const CalculatorPageComponent = () => {
    const { state } = useLocation();

    switch (state) {
        case CalculatorPathEnum.InstrumentationAmplifier:
            return <InstrumentationAmplifierComponent />
        case CalculatorPathEnum.LorentzForce:
            return <LorentzForceComponent />

        default:
            //TODO not found page???
            break;
    }

    return <h1>{state}</h1>
}

export default CalculatorPageComponent;