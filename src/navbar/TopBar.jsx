import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcons from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom"

export default function TopBar(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const navigate = useNavigate("")

    const handleChangePage = () => {
        navigate("/user-setting")
    }



    return (
        <Box 
            display={"flex"} 
            justifyContent={"space-between"} 
            p={2}
        >

            <Box 
                display={"flex"} 
                backgroundColor={colors.primary[400]} 
                borderRadius={"3px"}
            >
                <InputBase sx={{ml:2, flex: 1}} placeholder={"Search"}></InputBase>
                <IconButton type={"button"} sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            
            <Box display={"flex"}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? 
                    (<DarkModeOutlinedIcons />):
                    (<LightModeOutlinedIcon />)
                    }
                </IconButton>
                
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                
                <IconButton onClick={handleChangePage}>
                    <SettingsOutlinedIcon />
                </IconButton>
                
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}