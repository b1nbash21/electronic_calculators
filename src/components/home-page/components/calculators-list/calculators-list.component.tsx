import { calculators } from '../../calculatorsDefinition/calculators';
import Grid from "@mui/material/Grid"
import ItemCardComponent from '../item-card/item-card.componet';
import { useEffect, useState } from 'react';
import { CalculatorDto } from '../../../../models/CalculatorDto.model';

interface SearchCriteriaInterface {
    searchCriteria: string
}

const CalculatorsListComponent = ({ searchCriteria }: SearchCriteriaInterface) => {

    const [targetCalculators, setTargetCalculators] = useState<CalculatorDto[]>(calculators);

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
            <h1>{searchCriteria}</h1>
        </>
    );
};

export default CalculatorsListComponent;
