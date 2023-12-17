import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

import { tokens } from "../../theme";






const Pie = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box m="20px">

            <Header title="Pie Chart" subtitle="Simple Pie Chart" />

            <Box height="75vh">
                <PieChart />
            </Box>

        </Box>


    )
}

export default Pie;