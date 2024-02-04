import './App.css'
import * as Tone from 'tone'
import { useState, useEffect } from 'react'
import { meg } from './scripts/notes';
import { playNotes, playMidi } from './scripts/playNotes';
import { loadMidi } from './scripts/loadMidi.js'
import {Grid} from './Grid.jsx'
import Spritesheet from 'react-responsive-spritesheet';
import { Canvas } from './Canvas.jsx';

function App() {

	const [sampler, setSampler] = useState(null);

	useEffect(()=>{
		setSampler(new Tone.Sampler({
			urls: {
				"C4": "C4.mp3",
				"D#4": "Ds4.mp3",
				"F#4": "Fs4.mp3",
				"A4": "A4.mp3",
			},
			release: 1,
			baseUrl: "https://tonejs.github.io/audio/salamander/",
		}).toDestination());
	},[])

	const music1 = () =>{
		
		
		Tone.loaded().then(() => {
			Tone.Transport.bpm.value = 150;
			playNotes(meg,sampler);
			console.log("sound");
			});
		
		}
	
		const music2 = () =>{
		
		
			Tone.loaded().then(() => {
				Tone.Transport.bpm.value = 150;
				playMidi(loadMidi(0), sampler);
				console.log("sound");
				});
			
			}

  return (
    <>
		<button onClick={music1}>music make me lose control</button>
		<button onClick={music2}>egg</button>
		<div style={{height:100, width:100}}>
		<Spritesheet
          className={`my-element__class--style`}
          image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
          widthFrame={420}
          heightFrame={500}
          steps={14}
          fps={10}
          autoplay={true}
          loop={true}
        />
    </div>
		<Grid width={640} height={640} />
		<Canvas width={640} height={640} />
    </>
  )
}


export default App
