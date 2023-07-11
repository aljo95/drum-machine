import './App.css';
//dont need to pass setState function, just state variable
//import React, { Dispatch, SetStateAction } from 'react' 


interface BtnsAudioProps {
    soundFunc: (event: React.MouseEvent<HTMLButtonElement>) => void;
    pwrState: boolean;
}


const BtnsAudio:React.FC<BtnsAudioProps> = ({ soundFunc, pwrState }): JSX.Element => {
    
    return(
        <div id="button-container">
            <button className="drum-pad" id="heater1" onClick={soundFunc} disabled={pwrState}>Q
                <audio src="Heater-1.mp3" className='clip' id="Q"></audio>
            </button>
            
            <button className="drum-pad" id="heater2" onClick={soundFunc} disabled={pwrState}>W
                <audio src="Heater-2.mp3" className='clip' id="W"></audio>
            </button>

            <button className="drum-pad" id="heater3" onClick={soundFunc} disabled={pwrState}>E
                <audio src="Heater-3.mp3" className="clip" id="E"></audio>
            </button>

            <button className="drum-pad" id="heater4" onClick={soundFunc} disabled={pwrState}>A
                <audio src="Heater-4.mp3" className="clip" id="A"></audio>
            </button>

            <button className="drum-pad" id="clap" onClick={soundFunc} disabled={pwrState}>S
                <audio src="clap.mp3" className="clip" id="S"></audio>
            </button>

            <button className="drum-pad" id="open-hh" onClick={soundFunc} disabled={pwrState}>D
                <audio src="Open-HH.mp3" className="clip" id="D"></audio>
            </button>

            <button className="drum-pad" id="kick-n-hat" onClick={soundFunc} disabled={pwrState}>Z
                <audio src="Kick_n_Hat.mp3" className="clip" id="Z"></audio>
            </button>

            <button className="drum-pad" id="kick" onClick={soundFunc} disabled={pwrState}>X
                <audio src="Kick.mp3" className="clip" id="X"></audio>
            </button>

            <button className="drum-pad" id="closed-hh" onClick={soundFunc} disabled={pwrState}>C
                <audio src="Closed-HH.mp3" className="clip" id="C"></audio>
            </button>
        </div>
    );
}
export default BtnsAudio;