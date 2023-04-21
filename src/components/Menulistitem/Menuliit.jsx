import s from "./style.module.css";
import { useState } from "react";
export function Menuliit(props){
    const [isHovered,setIsHover]=useState(false);
    function activate(){
        setIsHover(true);
    };
    function deactivate(){
        setIsHover(false);
    };
    function getBackgroundColor() {
        if(isHovered){
            return "#76D7C4";
        }else {
        if(props.isSelected){
            return "#16A085";
        } else{
            return "#D0ECE7";
        }
      }
    };
    function onItemClick(){
        props.onClick(props.Diff);
    };
    
    return(
        <div onClick={onItemClick}
        className={s.container} 
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        style={{backgroundColor: getBackgroundColor()}}>set to : {props.Diff}</div>

    );
    };
