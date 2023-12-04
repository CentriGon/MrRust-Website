import { NavBar } from "../Components/NavBar"
import "../Styles/HomePage.css"
import { DisplayCard } from "../Components/DisplayCard"
import { useNavigate, Link } from "react-router-dom"
export const HomePage = () => {

    const navigate = useNavigate();

    const navigateTo = (location) => {
        navigate("/" + location);
    }

    return <div className="home-page">
        <NavBar/>
        <div className="hero-section">
            <div className="hero-left">
                <h1> Rust Removal </h1>
                <button> Learn More </button>
                <div className="floating-circle-1"></div>
                <div className="floating-circle-2"></div>
                <div className="floating-circle-3"></div>
            </div>
            <div className="hero-right">
                <img src={require("../images/image-removebg-preview (2).png")} alt="Rust Remover in autoCAD" className="rust-image"></img>
            </div>
        </div>
        <div className="what-it-does">
            <h1> What it does</h1>
            <div className="what-it-cards">
                <DisplayCard IMG={require("../images/automated.png")} H1="Automated" p="Simple and easy to use, all you need to do is fill it up and it runs with the press of a button!"/>
                <DisplayCard IMG={require("../images/rustIcon.png")} H1="Rust Removal"  p="Uses innovative methods in order to abrade rust off of a wide array of fasteners."/>
                <DisplayCard IMG={require("../images/coating.png")} H1="Coating" p="Coats the fasteners in a protective material that prevents further rusting on fasteners."/>
            </div>
        </div>
        <div className="what-its-for">
            <h1> What it's for</h1>
            <div className="it-for-cards">
                <DisplayCard IMG={require("../images/screwIcon.png")} H1="Screws" />
                <DisplayCard IMG={require("../images/bolr.png")} H1="Bolts"/>
                <DisplayCard IMG={require("../images/nails.png")} H1="Nails"/>
            </div>
        </div>
        <div className="interested-section">
            <h1> Interested in how it works?</h1>
            <div className="interested-buttons">
                <button onClick={() => {navigateTo("Components")}}>Components</button>
                <Link to="https://github.com/CentriGon/MrRust-Embedded-Code" target="_blank"><button >Code </button></Link>
                <button onClick={() => {navigateTo("Progress")}}>Progress</button>
            </div>
        </div>

    </div>
}
