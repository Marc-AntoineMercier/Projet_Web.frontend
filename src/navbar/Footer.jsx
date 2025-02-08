import { AppBar, Grid2, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const infos = [
    {
        title:"1. Colonne",
        element:[
            {
                name:"Permet de mettre des Lien si on veux"
            }
        ]
    }, 
    {
        title:"2. Colonne",
        element:[
            {
                name:"Permet de mettre des Lien si on veux"
            }
        ]
    },
    {
        title:"3. Colonne",
        element:[
            {
                name:"Permet de mettre des Lien si on veux"
            }
        ]
    }
]


function Footer(){

    return (
        <AppBar position="static" sx={{bottom:0, width:"100%", position:"fixed", p:2}}>
            <Grid2 container justifyContent={"space-between"} sx={{mt:1, ml:4, mr:4}}>
                {infos.map((e, i) => (
                    <Grid2 item key={i}>
                        {/* Changer la couleur de la typographie */}
                        <Typography  >{e.title}</Typography>
                        {e.element.map((e, j) => (
                            <Typography key={j}>{e.name}</Typography>
                        ))}
                    </Grid2>
                ))}
            </Grid2>

            <Typography>TrackyB est une application pour gerer votre budget gratuitement</Typography>

            <hr />
            
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    textDecoration: 'none',
                }}
                >
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />&copy; 2025-2025 Mathis Vincent et Marc-Antoine Mercier. Tout droit reserve
            </Typography>
        </AppBar>
    )
}

export default Footer