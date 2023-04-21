import s from "./style.module.css";
export function Difficulty(props){
    return(
        <div className = {s.container}> 
        {props.Diff ? `Difficulty set to ${props.Diff}`: "no difficulty set"}
    </div>
    );
}