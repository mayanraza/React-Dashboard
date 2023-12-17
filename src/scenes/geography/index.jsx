import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

import { tokens } from "../../theme";






const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box m="20px">

            <Header title="Line Chart" subtitle="Simple Line Chart" />

            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart />
            </Box>

        </Box>


    )
}

export default Geography;