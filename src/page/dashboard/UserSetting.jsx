import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function UserSetting(){

    return (
        <Box>
            <Link to={"/dashboard"}><Typography>Tout les parametre que l'utilisaeur va pour modifier</Typography></Link>
        </Box>
    )
}

export default UserSetting