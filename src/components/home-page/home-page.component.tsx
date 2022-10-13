import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment"
import styles from "./home-page.component.module.scss"
import { TextField } from '@mui/material';
import CalculatorsListComponent from './components/calculators-list/calculators-list.component';

const HomePageComponent = () => {

    const [searchText, setSearchText] = useState<string>("")

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <h1>A collection of free Electronic engeneering calculators online</h1>
                <TextField 
                    value={searchText}
                    onChange={handleSearchTextChange}
                    placeholder="Start Searching for name or Tags" id="searchBoxInput"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <CalculatorsListComponent searchCriteria={searchText}/>
            </div>
        </>
    );
};

export default HomePageComponent;
