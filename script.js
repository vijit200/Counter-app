

let cons = 0
const decre = () => {
    cons = cons - 1
    return cons
}

function DecrementBy1(params) {
    document.getElementById("para").innerText = decre()
}

const incre = () => {
    cons = cons + 1
    return cons
}

function IncrementBy1(params) {
    document.getElementById("para").innerText = incre()
}

const reset = () => {
    cons = 0
    return cons
}

function Reset(params) {
    document.getElementById("para").innerText = reset()
}
