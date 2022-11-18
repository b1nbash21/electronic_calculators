import { calculators } from '../../data/calculators';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment"
import styles from "./home-page.component.module.scss"
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

import CalculatorsListComponent from './components/calculators-list/calculators-list.component';
import { CalculatorInterface } from '../../models/CalculatorInterface.model';
import { BookmarkServices } from '../../services/BookmarkService';
import TabContext from '@mui/lab/TabContext/TabContext';
import TabPanel from '@mui/lab/TabPanel/TabPanel';

const HomePageComponent = () => {
    const bookmarkService = new BookmarkServices;

    const [searchText, setSearchText] = useState<string>("")
    const [tab, setTab] = useState<string>("all");
    const [targetCalculators, setTargetCalculators] = useState<CalculatorInterface[]>(calculators)
    const [bookmarkedCalculators, setBookmarkedCalculators] = useState<string[]>(bookmarkService.GetBookmarks())

    const handleTabChange = (event: any, newValue: string) => {
        setTab(newValue)

        if (newValue === "all") {
            setTargetCalculators(calculators);
        }
        else if (newValue === "bookmarks") {
            const bookmarks = bookmarkService.GetBookmarks();
            if (bookmarks) {
                const filtedCalculators = calculators.filter(calculator => bookmarks.includes(calculator.id))
                setTargetCalculators(filtedCalculators);
            } else {
                setTargetCalculators([]);
            }
        }
    };

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchCriteria: string = event.target.value;
        setSearchText(searchCriteria);
        const currentCalculators = targetCalculators;
        let targets: CalculatorInterface[] = []

        if (searchCriteria !== "") {
            targets = currentCalculators.filter(calculator => calculator.name.toLocaleLowerCase().includes(searchCriteria));

        } else {
            targets = calculators;
        }

        setTargetCalculators(targets);

    };

    const toggleBookmark = (calculatorId: string) => {
        const currentBookmarks = bookmarkService.GetBookmarks();
        let isBookmarked: boolean = false;
        if(currentBookmarks)
            isBookmarked = currentBookmarks.includes(calculatorId);

        if (isBookmarked) {
            bookmarkService.RemoveBookmark(calculatorId);
        } else {
            bookmarkService.AddBookmark(calculatorId);
        }

        setBookmarkedCalculators(bookmarkService.GetBookmarks())

        handleTabChange(null, tab);
    }

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
                <TabContext value={tab}>
                    <TabList onChange={handleTabChange}>
                        <Tab label="Calculators" value="all" />
                        <Tab label="Bookmarks" value="bookmarks" />
                    </TabList>
                    <TabPanel value="all"></TabPanel>
                    <TabPanel value="bookmarks"></TabPanel>
                </TabContext>
                <CalculatorsListComponent calculators={targetCalculators} toggleBookmark={toggleBookmark} bookmarkedCalculators={bookmarkedCalculators} />
            </div>
        </>
    );
};

export default HomePageComponent;
