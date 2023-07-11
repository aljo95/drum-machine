import './App.css';
import { useState, useEffect } from "react";
import  { IDisplayText }  from './IDisplayText';
import BtnsAudio from './BtnsAudio';
import DisplayAndControls from './DisplayAndControls';

let id: string;
let clipNodeList: NodeList;
/*
export interface IDisplayText {
  //only when states are objects 
  backgroundColor: string,
  color: string,
  borderColor: string
}
*/
const disabledStyle: {backgroundColor: string, color: string, borderColor: string} = {
  backgroundColor: "grey",
  color: "white",
  borderColor: "grey"
};

const idToSound: Record<string, string> = {
  Q: "Heater-1",
  W: "Heater-2",
  E: "Heater-3",
  A: "Heater-4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n-hat",
  X: "Kick",
  C: "Closed-HH"
};

function App(): JSX.Element {

  const [displayText, setDisplayText] = useState<string>("");
  const [volumeLevel, setVolumeLevel] = useState<number>(50);
  const [pwrButtonState, setPwrButtonState] = useState<boolean>(false);
  const [pwrButtonStyle, setPwrButtonStyle] = useState<IDisplayText | undefined>(undefined);


  useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keypress", onKeydown);
  }, []); 


  const onKeydown = (event: KeyboardEvent): void => {
    //need to check if event.key is Q/W/E/A/S/D/Z/X/C ONLY!
    if (idToSound.hasOwnProperty(event.key)) {
      (document.getElementById(event.key) as HTMLAudioElement).play();
      (document.getElementById(event.key) as HTMLAudioElement).currentTime = 0;
    };
    displayFunc(event.key);
  }


  //for clicking on buttons
  const playSound = (event: React.MouseEvent<HTMLButtonElement>): void => {
    id = (event.target as HTMLElement).innerText;
    (document.getElementById(id) as HTMLAudioElement).play();
    (document.getElementById(id) as HTMLAudioElement).currentTime = 0;
    displayFunc(id);
  };


  const displayFunc = (event: string): void => { 
    setDisplayText(idToSound[event]);
    setTimeout(() => {
      setDisplayText("");
    }, 1000);
  };


  const powerHandler = (): void => {
/*
    let nodelist = (document.querySelectorAll('.drum-pad') as NodeList);//.setAttribute("disabled", "");
    (nodelist[1] as HTMLElement).setAttribute('disabled', '');
*/
    setPwrButtonState(!pwrButtonState);
    if (pwrButtonState) {
      setPwrButtonStyle(undefined);
    } else {
      setPwrButtonStyle(disabledStyle);
    }
  };


  const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVolumeLevel(parseInt((e.target as HTMLInputElement).value));
  };


  useEffect(() => {
    volumeSet();
  }, [volumeLevel]);


  const volumeSet = () => {
    clipNodeList = document.querySelectorAll(".clip");
    for (let i=0; i<clipNodeList.length; i++) {
      (clipNodeList[i] as HTMLAudioElement).volume = volumeLevel/100;
    }
  };


  return (
    <div id="drum-machine">

        <BtnsAudio 
          soundFunc = {playSound}
          pwrState = {pwrButtonState} //even need to pass this state? -> YES
        />

        <DisplayAndControls 
          displayText = {displayText}
          volumeLevel = {volumeLevel}
          volumeHandler = {volumeHandler}
          pwrButtonState = {pwrButtonState}
          pwrButtonStyle = {pwrButtonStyle}
          powerHandler = {powerHandler}
        />
        
    </div>
  );
}

export default App;
