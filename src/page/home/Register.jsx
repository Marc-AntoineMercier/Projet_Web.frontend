import { useNavigate, Link } from "react-router-dom"
import { Container, Paper, Avatar, Typography, Box, TextField, FormControlLabel, Button, Grid2 } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Register() {
    const navigate = useNavigate("")
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <Container maxWidth={"xs"}>
            <Paper elevation={10} sx={{marginTop: 8, padding:2 }}>
                <Avatar sx={{mx:"auto",bgcolor:"secondary.main", textAlign:"center", mb: 1}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component={"h1"} variant="h5" sx={{textAlign:"center"}}>Creer Compte</Typography>
                <Box component={"form"} onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                    <TextField placeholder="Entrer votre nom d'utilisateur" fullWidth required autoFocus sx={{mb:2}} />
                    <TextField placeholder="Entrer votre mot de passe" fullWidth required type="password" />
                    <Button type="submit" variant="contained" fullWidth sx={{mt: 1}}>Creer Compte</Button>
                </Box>
                <Grid2 container justifyContent={"space-between"} sx={{mt:1}}>
                    <Grid2 item>
                        <Link to={"/login"}>Connexion</Link>
                    </Grid2>
                </Grid2>
            </Paper>
        </Container>
    )
}

export default Register