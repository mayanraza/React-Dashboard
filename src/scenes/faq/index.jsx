import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);




    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently asked Questions Page" />

            <Accordion defaultExpanded>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>


                <AccordionDetails>
                    <Typography >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam atque omnis perspiciatis, excepturi libero hic consequuntur ab. Deserunt, suscipit sint?
                    </Typography>

                </AccordionDetails>

            </Accordion>






            <Accordion defaultExpanded>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important question
                    </Typography>
                </AccordionSummary>


                <AccordionDetails>
                    <Typography >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam atque omnis perspiciatis, excepturi libero hic consequuntur ab. Deserunt, suscipit sint?
                    </Typography>

                </AccordionDetails>

            </Accordion>




            <Accordion defaultExpanded>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favourite question
                    </Typography>
                </AccordionSummary>


                <AccordionDetails>
                    <Typography >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam atque omnis perspiciatis, excepturi libero hic consequuntur ab. Deserunt, suscipit sint?
                    </Typography>

                </AccordionDetails>

            </Accordion>




            <Accordion defaultExpanded>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random question
                    </Typography>
                </AccordionSummary>


                <AccordionDetails>
                    <Typography >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam atque omnis perspiciatis, excepturi libero hic consequuntur ab. Deserunt, suscipit sint?
                    </Typography>

                </AccordionDetails>

            </Accordion>



            <Accordion defaultExpanded>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final question
                    </Typography>
                </AccordionSummary>


                <AccordionDetails>
                    <Typography >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam atque omnis perspiciatis, excepturi libero hic consequuntur ab. Deserunt, suscipit sint?
                    </Typography>

                </AccordionDetails>

            </Accordion>


        </Box>




    )



}
export default FAQ;




