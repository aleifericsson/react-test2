import './App.css'
import * as Tone from 'tone'
import { useState, useEffect } from 'react'
import { meg } from './scripts/notes';
import { playNotes, playMidi } from './scripts/playNotes';
import { loadMidi } from './scripts/loadMidi.js'

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
    </>
  )
}


export default App
