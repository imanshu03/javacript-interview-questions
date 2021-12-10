const { addEventListener, removeEventListener, disptachEvent } = require('./eventMechanism');

const click1Listener = (data) => {
    console.log(`Button ${data} clicked - listener 1`);
};

const click2Listener = (data) => {
    console.log(`Button ${data} clicked - listener 2`);
};

const hoverListener = () => {
    console.log('Hover on button');
};

addEventListener('click', click1Listener);
addEventListener('click', click2Listener);
addEventListener('hover', hoverListener);

disptachEvent('click', 2);
removeEventListener('click', click2Listener);
disptachEvent('click', 3);
disptachEvent('hover');