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

export {playNotes}