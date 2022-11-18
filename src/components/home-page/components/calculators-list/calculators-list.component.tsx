import Grid from "@mui/material/Grid"
import ItemCardComponent from '../item-card/item-card.componet';
import { useEffect, useState } from 'react';
import { CalculatorInterface } from '../../../../models/CalculatorInterface.model';
import { BookmarkServices } from "../../../../services/BookmarkService";

interface CalculatorsListComponentInterface {
    toggleBookmark: (calculatorId: string) => void,
    calculators: CalculatorInterface[],
    bookmarkedCalculators: string[]
}

const CalculatorsListComponent = ({ toggleBookmark, calculators, bookmarkedCalculators }: CalculatorsListComponentInterface) => {

    return (
        <>
            <Grid container>
                {calculators.map((calculator, index) => {
                    return (
                        <Grid key={index} item xs={4} style={{marginBottom: "24px"}}>
                            <ItemCardComponent calculator={calculator} isBookmarked={bookmarkedCalculators?.includes(calculator.id)} toggleBookmark={toggleBookmark}/>
                        </Grid>
                    )
                })
                }
            </Grid>
        </>
    );
};

export default CalculatorsListComponent;
