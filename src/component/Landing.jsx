import NavBar from "../navbar/NavBar"
import Footer from "../navbar/Footer"

function Landing(props){

    return (
        <div>
            <NavBar />
            {props.element}
            <Footer />
        </div>
    )
}

export default Landing