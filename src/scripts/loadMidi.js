const loadMidi = async (index) => {
    const playlist = ["egg_rock_act_2.json"];
    const endpoint = await fetch(playlist[index]);
    const midi = await endpoint.json();
    return midi
}

export {loadMidi}