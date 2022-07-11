// access CSS styles
const style = window.getComputedStyle(document.body);
const color_one = style.getPropertyValue('--color-one');
const color_two = style.getPropertyValue('--color-two');
const color_three = style.getPropertyValue('--color-three');
const color_four = style.getPropertyValue('--color-four');
const color_five = style.getPropertyValue('--color-five');
const color_six = style.getPropertyValue('--color-six');

// wavesurfer params
const waveform_params = {
    backgroundColor: 'black',
    waveColor: 'white',
    progressColor: color_four,
    barWidth: 2,
    barHeight: .2,
    height: 50,
    barRadius: 2,
    hideScrollbar: true,
    cursorColor: '#000',
    responsive: true,
    normalize: true,
    backend: 'MediaElement'
}
// create wavesurger objects
waveform_params['container'] = '#waveform-1'
const wavesurfer_1 = WaveSurfer.create(waveform_params)
waveform_params['container'] = '#waveform-2'
const wavesurfer_2 = WaveSurfer.create(waveform_params)
waveform_params['container'] = '#waveform-3'
const wavesurfer_3 = WaveSurfer.create(waveform_params)
waveform_params['container'] = '#waveform-4'
const wavesurfer_4 = WaveSurfer.create(waveform_params)
waveform_params['container'] = '#waveform-5'
const wavesurfer_5 = WaveSurfer.create(waveform_params)
waveform_params['container'] = '#waveform-6'
const wavesurfer_6 = WaveSurfer.create(waveform_params)

// load wavesurfer audio
const songNames = [
    './audio/gotta_gotta.mp3',
    './audio/ciego.mp3',
    './audio/drip_drop.mp3',
    './audio/run_on_by.mp3',
    './audio/last_night.mp3',
    './audio/unwritten.mp3'
]
const wavesurfers = [wavesurfer_1, wavesurfer_2, wavesurfer_3, wavesurfer_4, wavesurfer_5, wavesurfer_6]
for (let i = 0; i < wavesurfers.length; i++){
    wavesurfers[i].load(songNames[i])
}

// add controls functionality
playBtns = document.querySelectorAll(".play");
pauseBtns = document.querySelectorAll(".pause");
stopBtns = document.querySelectorAll(".stop");

for (let i = 0; i < wavesurfers.length; i++){
    // add play functionality
    playBtns[i].onclick = function(){
        //  must pause all other songs to prevent multiple plays
        for (let j = 0; j < wavesurfers.length; j++){
            if (i === j) { continue }
            else { wavesurfers[j].pause() }
        }
        wavesurfers[i].playPause();
    }
    // add pause functionality
    pauseBtns[i].onclick = function(){
        wavesurfers[i].playPause();
    }
    // add stop functionality
    stopBtns[i].onclick = function(){
        wavesurfers[i].stop();
    }
}
