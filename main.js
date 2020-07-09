const list = function(numerOfElements) {
    const list = [];

    for(let i = 0; i < numerOfElements; i++) {
        list[i] = i+1;
    }

    return list;
}

const listTracksRandomly = function(list) {
    let randomList = [];
    let current = null;
    let listLength = list.length

    for(let i = 0; i < listLength; i++) {
        current = list[Math.floor(Math.random() * list.length)];
        randomList[i] = current
        let idx = list.indexOf(current)
        list.splice(idx, 1)
    }

    return randomList;
    
}

console.log(listTracksRandomly(list(10)))




