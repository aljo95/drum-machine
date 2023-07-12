import './App.css';
import  { IDisplayText }  from './IDisplayText';


type DisplayAndControlProps = {
    displayText: string;
    volumeLevel: number;
    volumeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pwrButtonState: boolean;
    pwrButtonStyle: IDisplayText | undefined;
    powerHandler: () => void;
}


const DisplayAndControls = 
({displayText, volumeLevel, volumeHandler, pwrButtonState, pwrButtonStyle, powerHandler}: DisplayAndControlProps) => {

    return (
        <div id="second-container" data-testid="child2">
            { !pwrButtonState ? 
                <div id="display">{displayText}</div>
            :
                <div id="display"></div>
            }
            <label id="volume-lbl">volume</label>
            <input type="range" id="volume" value={volumeLevel} onChange={volumeHandler} disabled={pwrButtonState}></input>
            <button id="pwr-btn" style={pwrButtonStyle} onClick={powerHandler}>POWER</button>
        </div>
    );
}

export default DisplayAndControls;