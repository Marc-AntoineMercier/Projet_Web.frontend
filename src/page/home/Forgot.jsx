import { Link } from "react-router-dom"
import { Container, Typography, Paper } from "@mui/material"

function Forgot(){
    return (
        <Container maxWidth={"xs"}>
            <Paper elevation={10} sx={{marginTop: 8, padding:2 }}>
                <Link to={"/"}><Typography>Formulaire pour faire un demande de changement de mot de passe pour son compte</Typography></Link>
            </Paper>
        </Container>
    )
}

export default Forgot