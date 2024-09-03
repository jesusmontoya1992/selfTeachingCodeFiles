"use strict";
// let sayHiMixin = {
//     sayHi() {
//         alert(`Hello ${this.name}`);
//     },
//     sayBye() {
//         alert(`Bye ${this.name}`);
//     },
// };
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, sayHiMixin);
// new User("Dude").sayHi();
// new User("Dude").sayBye();

// let sayMixin = {
//     say(phrase) {
//         alert(phrase);
//     }
// };
// let sayHiMixing = {
//    __proto__: sayMixin,
//    sayHi() {
//     super.say(`Hello ${this.name}`);
//    },
//    sayBye() {
//     super.say(`Bye ${this.name}`);
//    },
// };
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, sayHiMixing);
// new User("Dude").sayHi();

// eventMixing
let eventMixin = {
    /**
     * Subscribe to event, usage:
     *  menu.on('select', function(item) { ... }
    */
    on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },
  
    /**
     * Cancel the subscription, usage:
     *  menu.off('select', handler)
     */
    off(eventName, handler) {
      let handlers = this._eventHandlers?.[eventName];
      if (!handlers) return;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },
  
    /**
     * Generate an event with the given name and data
     *  this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
      if (!this._eventHandlers?.[eventName]) {
        return; // no handlers for that event name
      }
  
      // call the handlers
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  };

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
menu.on("select", value => alert(`Value selected: ${value}`));
menu.choose('123');