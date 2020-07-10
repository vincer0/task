const list = function(numerOfElements) {
    const list = [];

    for(let i = 0; i < numerOfElements; i++) {
        list[i] = i+1;
    }

    return list;
}

const listTracksRandomly = function(list) {
    let randomList = [];
    let listLength = list.length

    for(let i = 0; i < listLength; i++) {
        let current = list[Math.floor(Math.random() * list.length)];
        randomList[i] = current
        let idx = list.indexOf(current)
        list.splice(idx, 1)
    }

    return randomList;
    
}

const listTracksLooped = function(list, times) {
    let loopedList = []

    for(let i = 0; i < times; i++) {
        loopedList = loopedList.concat(list)
    }

    return loopedList;
}

console.log(listTracksRandomly(list(1000)))
console.log(listTracksLooped(list(10), 10))




