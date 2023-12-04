import { NavBar } from "../Components/NavBar"
import "../Styles/Components.css"
import { Link } from "react-router-dom";

const ProductLink = ({ linkTo, children }) => {
    return (
      <Link to={linkTo} target="_blank" className="component">
        <button>{children}</button>
      </Link>
    );
};


export const Components = () => {

    return <div className="components">
        <NavBar/>
        <div className="main-section">
            <h1> Components </h1>
            <div className="comp">
                <div className="comp-container">
                    <h1> Technical Components </h1>
                    <ProductLink linkTo="https://www.raspberrypi.com/products/camera-module-v2/">Raspberry Pi Camera Module 2</ProductLink>
                    <ProductLink linkTo="https://www.vexrobotics.com/393-motors.html">Vex 393 Motors</ProductLink>
                    <ProductLink linkTo="https://www.raspberrypi.com/">Raspberry Pi</ProductLink>
                    <ProductLink linkTo="http://tinkersphere.com/breadboarding/134-jumper-wire-cables-for-breadboards.html">Jumper Wire</ProductLink>
                    <ProductLink linkTo="https://s.click.aliexpress.com/deep_link.htm?aff_short_key=UneMJZVf&dl_target_url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F3256804731037998.html%3F_randl_currency%3DUSD%26_randl_shipto%3DUS%26src%3Dgoogle">Relay</ProductLink>
                    <ProductLink linkTo="https://www.google.com/shopping/product/1229014469988693106?q=raspberry+pi+sd+card&sca_esv=587557537&bih=603&biw=1280&rlz=1C1RXQR_enUS1058US1058&hl=en&sxsrf=AM9HkKlfcsoHL8NPXrds1zajVpXaZtJLDw:1701656729188&uact=5&oq=raspberry+pi+sd+card&gs_lp=Egtwcm9kdWN0cy1jYyIUcmFzcGJlcnJ5IHBpIHNkIGNhcmQyBhAAGBYYHjIGEAAYFhgeSKZUUABYmVNwB3gAkAEAmAGCAaABlw2qAQQyNS4xuAEDyAEA-AEBqAIHwgIHECMY6gIYJ8ICCxCuARjKAxjqAhgnwgIEEAAYHsICChAAGIAEGA0Y1gXCAggQABgWGB4YCogGAQ&sclient=products-cc&prds=eto:8542709371084726370_0,pid:16052476800756521899,rsk:PC_15566528504983753903&sa=X&ved=0ahUKEwi7vJuu3fSCAxVrEGIAHeKWA4YQ8wII3w4">Raspberry Pi SD Card</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B07VFDYNL4">Raspberry Pi Power Supply</ProductLink>
                    
                </div>
                <div className="comp-container">
                    <h1> Physical Components </h1>
                    <ProductLink linkTo="https://www.lowes.com/pd/IMPERIAL-16-in-x-36-in-Galvanized-Steel-Joist-Lining/3134385">IMPERIAL 16-in x 36-in Steel Solid Sheet Metal</ProductLink>
                    <ProductLink linkTo="https://www.lowes.com/pd/Charlotte-Pipe-3-4-in-dia-x-10-ft-L-200-PSI-SDR-21-PVC-Pipe/3133103">3/4 in. x 10 ft. PVC Pipe</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B08ZGRV4QN">PC 11”X14” Wire Mesh 5 Mesh</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/BLACK-BEAUTY-Abrasive-Sandblast-Cabinet/dp/B010VLI694">30/60 Grit Abrasive Blast Media</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/Upgrade-Thickened-Stainless-Brushed-Sliding/dp/B0892H3KMH">FATLODA 2 Pack Barrel Bolt Latch</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/Rust-Oleum-7769502-Protective-Enamel-32-Ounce/dp/B000SA8OGY">Rust-o-leum 7760952 Protective Enamel Paint</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B072J7BBFY">Design House 181602 3-Pack Hinge 4", Satin Nickel</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B00130BWLM">Dap 18128 Alex Plus Acrylic Latex Caulk</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B003V5NQ2U?th=1">Milton Industries S-761 1/4" FNPT HIGHFLOWPRO V-Style Air Plug Fitting</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B07HHPBZXX">Quipall 2-.33 1/3 HP 2 Gallon Oil-Free Hotdog Air Compressor</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B07QLPVL9W">TAISHER 2 PCS Brass Hose Barb Fittings</ProductLink>
                    <ProductLink linkTo="https://www.amazon.com/dp/B0B93GLZVM">G1/4 Inch Barb Hose Fitting Connector</ProductLink>
                </div>
            </div>
        </div>
    </div>
}
