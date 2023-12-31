// Using this file to store and run example code from chapter eleven

/*
    Asynchronous programming  in javascript can be done using callbacks, promises and async-await
*/

import { bigOak } from "./crow-tech";
import { defineRequestType } from "./crow-tech";

// Accessing food storage in bigOak
bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

// bigOak.send('targetNest', 'requestType', 'requestContent', 'callBack')
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

// Calling the defineRequestType function which was imported so as to define the type of reauest we're making
// This is an asynchronous function which uses callback. If it had a return value then it would cease to be an
// asynchronous function.
defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
});

// Promised based interface for the readStorage function

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });


}
storage(bigOak, "enemies").then(value => console.log("Got", value));

function getWeatherData(url) {
    return new Promise(resolve => {
        let req = fetch(url).json;
    })
}

class Timeout extends Error { }

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false; function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });

            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n + 1);
                else reject(new Timeout("Timed out"));
            }, 250);
        } attempt(1);
    });
}

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response), failure => callback(failure));
        } catch (exception) {
            callback(exception);
        }
    });
}
