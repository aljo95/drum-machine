import './App.css';
//dont need to pass setState function, just state variable
//import React, { Dispatch, SetStateAction } from 'react' 


interface BtnsAudioProps {
    soundFunc: (event: React.MouseEvent<HTMLButtonElement>) => void;
    pwrState: boolean;
}


const BtnsAudio:React.FC<BtnsAudioProps> = ({ soundFunc, pwrState }): JSX.Element => {
    
    return(
        <div id="button-container" data-testid="child1">
            <button className="drum-pad" id="QQ" onClick={soundFunc} disabled={pwrState}>Q
                <audio src="sounds\Heater-1.mp3" className='clip' id="Q" muted={pwrState}></audio>
            </button>
           
            <button className="drum-pad" id="WW" onClick={soundFunc} disabled={pwrState}>W
                <audio src="sounds\Heater-2.mp3" className='clip' id="W" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="EE" onClick={soundFunc} disabled={pwrState}>E
                <audio src="sounds\Heater-3.mp3" className="clip" id="E" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="AA" onClick={soundFunc} disabled={pwrState}>A
                <audio src="sounds\Heater-4.mp3" className="clip" id="A" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="SS" onClick={soundFunc} disabled={pwrState}>S
                <audio src="sounds\clap.mp3" className="clip" id="S" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="DD" onClick={soundFunc} disabled={pwrState}>D
                <audio src="sounds\Open-HH.mp3" className="clip" id="D" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="ZZ" onClick={soundFunc} disabled={pwrState}>Z
                <audio src="sounds\Kick_n_Hat.mp3" className="clip" id="Z" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="XX" onClick={soundFunc} disabled={pwrState}>X
                <audio src="sounds\Kick.mp3" className="clip" id="X" muted={pwrState}></audio>
            </button>

            <button className="drum-pad" id="CC" onClick={soundFunc} disabled={pwrState}>C
                <audio src="sounds\Closed-HH.mp3" className="clip" id="C" muted={pwrState}></audio>
            </button>
        </div>
    );
}
export default BtnsAudio;