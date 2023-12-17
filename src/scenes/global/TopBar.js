import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";

import InputBase from "@mui/material/InputBase";
import { LightModeOutlined } from '@mui/icons-material';
import { DarkModeOutlined } from "@mui/icons-material";
import { NotificationsOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
// import { SearchOutlinedIcon } from "@mui/icons-material/SearchOutlined";
import SearchIcon from "@mui/icons-material/Search";


const TopBar = () => {


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>

            {/* search bar  */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search"></InputBase>
                <IconButton type="button" sx={{ p: 1 }} >
                    <SearchIcon />
                </IconButton>

            </Box>







            {/* icons  */}
            <Box display="flex" >

                <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === 'dark' ? (<LightModeOutlined />)
                        : (<DarkModeOutlined />)
                    }
                </IconButton>

                <IconButton >
                    <NotificationsOutlined />
                </IconButton>

                <IconButton >
                    <SettingsOutlined />
                </IconButton>

                <IconButton >
                    <PersonOutlined />
                </IconButton>



            </Box>




        </Box>
    )
}
export default TopBar;