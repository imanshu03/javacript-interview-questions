let subscribers = {};

const publish = (eventName, data) => {
    if (!subscribers[eventName]) return;
    subscribers[eventName].forEach(cb => {
        cb(data);
    });
};

const subscribe = (eventName, cb) => {
    if (!subscribers[eventName]) {
        subscribers[eventName] = [];
    }
    subscribers[eventName].push(cb);
    const index = subscribers[eventName].length - 1;
    return {
        unsubscribe: () => {
            subscribers[eventName].splice(index, 1);
        }
    };
};

module.exports = {
    publish,
    subscribe
};