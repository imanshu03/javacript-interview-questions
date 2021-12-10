const pubSub = require('./PubSub');
const createSubscriber = pubSub.subscribe;
const publishEvent = pubSub.publish;

const stack = [];

const pushSubscriber = createSubscriber('push', (data) => {
    stack.push(data);
    console.log(`Pushed - ${data}`);
});

// const pushSubscriber2 = createSubscriber('push', (data) => {
//     console.log(`Data is ${data}`);
// });

const popSubscriber = createSubscriber('pop', () => {
    const data = stack.pop();
    console.log(`Popped - ${data}`);
});

publishEvent('push', 1);
publishEvent('push', 2);
publishEvent('push', 3);

// pushSubscriber2.unsubscribe();

publishEvent('push', 4);
publishEvent('push', 5);
publishEvent('pop');
publishEvent('pop');
publishEvent('pop');
publishEvent('push', 6);

pushSubscriber.unsubscribe();
popSubscriber.unsubscribe();

console.log(stack);