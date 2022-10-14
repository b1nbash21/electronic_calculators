import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react";
import { InsturmentationAmplifierInputFields } from "./models/insturmentation-amplifier-input-fields.model";
import { InsturmentationAmplifierInputFieldsEnum } from "./models/insturmentation-amplifier-input-fiedls.enum";

const InstrumentationAmplifierComponent = () => {

    const [disabledCalcButton, setDisabledCalcButton] = useState<boolean>(true);
    const [fields, setFields] = useState<InsturmentationAmplifierInputFields>({
        resistorTwo: "",
        resistorThree: "",
        resistorFour: "",
        resistorGain: "",
        gain: "",
    })

    const changeField = (e: any) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value !== "" ? parseFloat(value) : ""
        })
    }

    useEffect(() => {
        const emptyFields = Object.values(fields).filter(item => item === 0 || item === "");
        setDisabledCalcButton(emptyFields.length > 1);
    }, [fields]);


    const resetFields = () => {
        setFields({
            resistorTwo: "",
            resistorThree: "",
            resistorFour: "",
            resistorGain: "",
            gain: "",
        })
    }

    //TODO check infitinty
    const calculate = () => {
        const emptyField = Object.keys(fields).find(item => fields[item as keyof InsturmentationAmplifierInputFields] === "")
        let solution: number = 0;

        if (emptyField !== undefined) {
            switch (emptyField) {
                case InsturmentationAmplifierInputFieldsEnum.resistorTwo:
                    solution = (((Number(fields.gain) / (Number(fields.resistorFour) / Number(fields.resistorThree))) - 1) * Number(fields.resistorGain)) / 2;
                    break;
                case InsturmentationAmplifierInputFieldsEnum.resistorThree:
                    solution = Number(fields.resistorFour) / (Number(fields.gain) / (1 + ((2 * Number(fields.resistorTwo)) / Number(fields.resistorGain))))
                    break;
                case InsturmentationAmplifierInputFieldsEnum.resistorFour:
                    solution = (Number(fields.gain) / (1 + ((2 * Number(fields.resistorTwo)) / Number(fields.resistorGain)))) * Number(fields.resistorThree)
                    break;
                case InsturmentationAmplifierInputFieldsEnum.resistorGain:
                    solution = (2 * Number(fields.resistorTwo) / ((Number(fields.gain) / (Number(fields.resistorFour) / Number(fields.resistorThree))) - 1));
                    break;
                case InsturmentationAmplifierInputFieldsEnum.gain:
                    solution = (1 + ((2 * Number(fields.resistorTwo)) / Number(fields.resistorGain))) * (Number(fields.resistorFour) / Number(fields.resistorThree));
                    break;

                default:
                    break;
            }

            setFields({
                ...fields,
                [emptyField]: solution
            })
        }
    }

    return (
        <>
            <h1>InstrumentationAmplifierComponent</h1>
            <Typography>Resistor2</Typography>
            <TextField name="resistorTwo" type="number" value={fields.resistorTwo} onChange={(e) => changeField(e)} />
            <Typography>Resistor3</Typography>
            <TextField name="resistorThree" type="number" value={fields.resistorThree} onChange={(e) => changeField(e)} />
            <Typography>Resistor4</Typography>
            <TextField name="resistorFour" type="number" value={fields.resistorFour} onChange={(e) => changeField(e)} />
            <Typography>Resistor Gain</Typography>
            <TextField name="resistorGain" type="number" value={fields.resistorGain} onChange={(e) => changeField(e)} />
            <Typography>Gain</Typography>
            <TextField name="gain" type="number" value={fields.gain} onChange={(e) => changeField(e)} />
            <br />
            <Button onClick={calculate} variant="outlined" disabled={disabledCalcButton}>calculate</Button>
            <Button onClick={resetFields} variant="outlined">reset</Button>
        </>
    )
}

export default InstrumentationAmplifierComponent;