import { Box, Typography } from "@mui/material"

function QuickPage(){
    const info = [
        {
            element:"les button pour faire apparaitre un form pour ajouter un depense,"
        }, 
        {
            element:"un bouton pour faire apparaitre un from pour creer un categorie,"
        },
        {
            element:"voir les (5) categorie et leur pourcentage de reussite"
        },
        {
            element:"mini calendrier pour regarder les depenses de cette semaine."
        }
    ]
    
    return(
        <Box>
            <Typography>
                La page du dashboard principal qui contienderas
            </Typography>
            <ul>
                {info.map((e, i) => (<li key={i}>{e.element}</li>))}
            </ul>
            
        </Box>
    )
}

export default QuickPage