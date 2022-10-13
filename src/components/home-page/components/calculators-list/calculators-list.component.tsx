import { calculators } from '../../../../data/calculators';
import Grid from "@mui/material/Grid"
import ItemCardComponent from '../item-card/item-card.componet';
import { useEffect, useState } from 'react';
import { CalculatorInterface } from '../../../../models/CalculatorInterface.model';

interface SearchCriteriaInterface {
    searchCriteria: string
}

const CalculatorsListComponent = ({ searchCriteria }: SearchCriteriaInterface) => {

    const [targetCalculators, setTargetCalculators] = useState<CalculatorInterface[]>(calculators);

    useEffect(() => {
        let targets = calculators;

        if (searchCriteria !== "")
            targets = calculators.filter(calculator => calculator.name.toLocaleLowerCase().includes(searchCriteria));

        setTargetCalculators(targets);
    }, [searchCriteria]);   

    return (
        <>
            <Grid container>
                {targetCalculators.map((calculator, index) => {
                    return (
                        <Grid item xs={4} style={{marginBottom: "24px"}}>
                            <ItemCardComponent calculator={calculator} />
                        </Grid>
                    )
                })
                }
            </Grid>
        </>
    );
};

export default CalculatorsListComponent;
