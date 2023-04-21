import { useState } from "react";
import { Difficulty } from "./components/Displaydifficulty/Difficulty";
import { Menuli } from "./components/Menulist/Menuli";
import s from './style.module.css';
export function App(){
  const [currentDifficulty,setCurrentDifficulty]=useState("");
  function onMenuListItemClick(Diff){
    setCurrentDifficulty(Diff)
  };
  return(
  <div>
    <h1 style={{textAlign:"center"}}>SELECT YOUR REACT DIFFICULTY</h1>
    
    <div className={s.workspace}> 
     
      <Menuli 
      Diff={currentDifficulty}
      onItemClick={onMenuListItemClick}/>
      <Difficulty Diff={currentDifficulty} />
    </div>
    </div>
  );
}
