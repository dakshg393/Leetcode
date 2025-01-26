/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cValue=init
    return {
        increment:()=>{
            cValue = cValue + 1
            return cValue
        },
        decrement:()=>{
            cValue = cValue -1
            return cValue
        },
        reset:()=>{
            cValue =init
            return cValue
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */