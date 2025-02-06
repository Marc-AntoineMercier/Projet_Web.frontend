import "../App.css"
import SideBar from "../navbar/SideBar"
import TopBar from "../navbar/TopBar"

function DashBoard(props){

    return (
        <div className="app">
            <SideBar />
            <div className="content">
                <TopBar />
                {props.element}
            </div>
        </div>
    )
}

export default DashBoard