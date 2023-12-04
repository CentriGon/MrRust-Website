import { useNavigate, Link } from "react-router-dom"


export const NavBar = () => {


    const navigate = useNavigate();
    const navigateTo = (location) => {

        navigate("/" + location);
    } 

    return <div className="nav-bar">
        <div className="nav-bar-left">
            <img src={require("../images/logo-transparent-png.png")} alt = "Mr. Rust Logo" className="logo" onClick={() => {navigateTo("")}}/>
        </div>
        <div className="nav-bar-right">
            <button onClick={() => {navigateTo("Components")}}>Components</button>
            <Link to="https://github.com/CentriGon/MrRust-Embedded-Code" target="_blank"><button >Code </button></Link>
            <button onClick={() => {navigateTo("Progress")}}>Progress</button>
        </div>
    </div>
}
