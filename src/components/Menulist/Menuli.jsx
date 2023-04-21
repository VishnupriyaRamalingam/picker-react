import { Menuliit } from "../Menulistitem/Menuliit";
import s from "./style.module.css";
import { Difficul } from "./constant";

export function Menuli(props){
    return(
        <div className={s.container}> 
       {Difficul.map((Diff)=>( <Menuliit isSelected={props.Diff===Diff}
            onClick={props.onItemClick}
            Diff={Diff}/>))}
     </div>
    );
}