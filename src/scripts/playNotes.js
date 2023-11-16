import * as Tone from 'tone'

const playNotes = (notes, instrument) => {
    const now = Tone.Time()
    let currentTime = 0
    notes.forEach(item => {
        if (item.note !== '') {
            instrument.triggerAttackRelease(item.note, item.dur, now + currentTime)
        }
        currentTime += Tone.Time(item.dur).toSeconds()
    })
}

const playMidi = async (midi, instrument) => {
    console.log(midi);
    const notes = midi.tracks[1].notes;
    const now = Tone.Time()
    notes.forEach(note => {
        if (note !== '') {
            instrument.triggerAttackRelease(note.name, note.duration, now + note.time)
        }
    })
}


export {playNotes, playMidi}