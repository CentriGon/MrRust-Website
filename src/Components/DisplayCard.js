



export const DisplayCard = (props) => {


    return <div className="display-card">
        <img src={props.IMG}/>
        <h1> {props.H1}</h1>
        <p> {props.p}</p>
    </div>
}
