import "./error.css"
import img from "../error/error1.jpg";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Error () {

    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000)
      }, []);

    return (
        <div className="error">
            <title>Error Page</title>
            <div>
            <img src={img}></img>
            <div><span>You will be redirect in home page after 5 seconds...</span></div>
            </div>
        </div>
    )
}