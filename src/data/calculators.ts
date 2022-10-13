import {CalculatorInterface} from "../models/CalculatorInterface.model"
import { CalculatorPathEnum } from "../models/calculatorPath.enum";

export const calculators: CalculatorInterface[] = [
	{
		name: 'Instrumentation Amplifier',
		imagePath: '/calculatorIcons/resistor.png',
		imageAltTag: 'resistorIcon',
		path: CalculatorPathEnum.InstrumentationAmplifier,
		description: "The instrumentation amplifier calculator will assist in the design and analysis of a conventional instrumentation amplifier circuit by calculating the required resistor values and gain.",
		tags: ["opamp", "resistor", "amplifier"]
	},
	{
		name: 'Lorentz Force',
		imagePath: '',
		path: CalculatorPathEnum.LorentzForce,
		imageAltTag: '',
		description: "This calculator will determine the combined Lorentz force exerted on a charged particle moving through both an electric field and a magnetic field.",
		tags: ["electric field", "magnetic field"]
	},
	{
		name: 'Instrumentation Amplifier',
		imagePath: '/calculatorIcons/resistor.png',
		imageAltTag: 'resistorIcon',
		path: '',
		description: "The instrumentation amplifier calculator will assist in the design and analysis of a conventional instrumentation amplifier circuit by calculating the required resistor values and gain.",
		tags: ["opamp", "resistor", "amplifier"]
	},
	{
		name: 'Instrumentation Amplifier',
		imagePath: '/calculatorIcons/resistor.png',
		imageAltTag: 'resistorIcon',
		path: '',
		description: "The instrumentation amplifier calculator will assist in the design and analysis of a conventional instrumentation amplifier circuit by calculating the required resistor values and gain.",
		tags: ["opamp", "resistor", "amplifier"]
	},
	{
		name: 'Instrumentation Amplifier',
		imagePath: '/calculatorIcons/resistor.png',
		imageAltTag: 'resistorIcon',
		path: '',
		description: "The instrumentation amplifier calculator will assist in the design and analysis of a conventional instrumentation amplifier circuit by calculating the required resistor values and gain.",
		tags: ["opamp", "resistor", "amplifier"]
	},
];