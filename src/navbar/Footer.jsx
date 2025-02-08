import { AppBar, Box } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom"

const Item = ({title, to, icon}) => {
    <Box>
        <Box>{icon}</Box>
        
        <Link to={to}>{title}</Link>
    </Box>
}


function Footer(){

    return (
        <AppBar position="static" sx={{bottom:0, width:"100%", position:"fixed", p:2}}>
            <Box textAlign={"center"} >
                <GitHubIcon sx={{mr:2}}/>
                <Link to={"https://github.com/Marc-AntoineMercier/Projet_Web.frontend"}>FrontEnd</Link>
            </Box>
            
        </AppBar>
    )
}

export default Footer