const debounce = function (cb, delay) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => cb.apply(context, args), delay);
    }
};

const logger = debounce((data) => console.log(`Name: ${data.name}, Age: ${data.age}`), 3000);

for (let i = 0; i < 5; i++) {
    logger({ name: 'Imanshu', age: 24 });
}

const throttle = function (cb, delay) {
    let isThrottle = false;
    return function () {
        const context = this;
        const agrs = arguments;
        if (!isThrottle) {
            cb.apply(context, args);
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, delay);
        }
    }
};

