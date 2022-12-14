import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { CalculatorInterface } from "../../../../models/CalculatorInterface.model";
import styles from "./item-card.component.module.scss"
import { useNavigate } from "react-router-dom"

interface ItemCardComponentProps {
    calculator: CalculatorInterface
    isBookmarked: boolean,
    toggleBookmark: (calculatorId: string) => void;
}

const ItemCardComponent = ({ calculator, isBookmarked,  toggleBookmark}: ItemCardComponentProps) => {
    const navigate = useNavigate();

    const navigateToCalculator = (calculatorPath: string) => {
        navigate("/calculator/" + calculatorPath, { state: calculatorPath })
    }

    return (
        <>
            <Paper elevation={10} className={styles.paper}>
                <Grid style={{ height: "100%" }} container>
                    <Grid item xs={3}>
                        <img style={{ height: "50px" }} alt={calculator.imageAltTag} src={calculator.imagePath} />
                    </Grid>
                    <Grid item xs={9} className={styles.gridItem}>
                        <div>
                            <Typography className={styles.title}>
                                {calculator.name}
                            </Typography>
                            <Typography className={styles.description}>
                                {calculator.description}
                            </Typography>
                        </div>
                        <Stack direction="row" spacing={1}>
                            {calculator.tags.map((tag: string, index: number) => {
                                return (
                                    <Chip key={index} label={tag} size="small" />
                                )
                            })}
                        </Stack>
                    </Grid>
                </Grid>
                <div className={styles.hoverMenu}>
                    <Grid container className={styles.centerItem}>
                        <Grid item xs={6} className={styles.centerItem}>
                            <Button onClick={() => { toggleBookmark(calculator.id) }} variant="contained" endIcon={isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon /> }>
                                Bookmark
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={styles.centerItem}>
                            <Button onClick={() => { navigateToCalculator(calculator.path) }} variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                Calculator
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </>
    );
};

export default ItemCardComponent;
