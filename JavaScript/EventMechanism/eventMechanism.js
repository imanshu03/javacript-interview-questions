let events = {};

const addEventListener = (eventName, callback) => {
    if (!events[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(callback);
};

const removeEventListener = (eventName, callback) => {
    if (!events[eventName]) return;
    if (callback) {
        const index = events[eventName].findIndex((cb) => cb === callback);
        if (index !== -1) {
            events[eventName].splice(index, 1);
        }
    } else {
        delete events[eventName];
    }
};

const disptachEvent = (eventName, data) => {
    if (!events[eventName]) return;
    events[eventName].forEach((cb) => cb(data));
};

module.exports = {
    addEventListener,
    removeEventListener,
    disptachEvent
}