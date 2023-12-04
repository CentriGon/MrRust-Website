import { useRef } from "react";


export const ProgressBox = (props) => {

    const randomNumRef = useRef(Math.round(Math.random() * 999999))
    const isVisibleRef = useRef(false)

    console.log(randomNumRef)
    const makeVisible = () => {

        

        if (!isVisibleRef.current) {
            const otherInfo = document.querySelector(".s" + randomNumRef.current);
            otherInfo.setAttribute("id", "madeVisible")
            isVisibleRef.current = true
        }
        else {
            const otherInfo = document.querySelector(".s" + randomNumRef.current);
            otherInfo.removeAttribute("id")
            isVisibleRef.current = false
        }
    }

    console.log(props.key)

    return <div className="progress-box">
        <div className="date">
            <h3 onClick={() => {
                makeVisible()
            }}> {props.date}</h3>
        </div>
        <div className={"other-info s" + randomNumRef.current} onClick={() => {
                makeVisible()
            }}>
            <p> Ryan: {props.Ryan} </p>
            <p> David {props.David} </p>
            <p> Noor: {props.Noor} </p>
        </div>
    </div>
}
