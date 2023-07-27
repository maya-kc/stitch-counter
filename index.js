let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let total = 0
let totalStitches = document.getElementById("total-stitches")

function increment() {
    count += 1
    countEl.textContent = count
    total += 1
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    totalStitches.textContent = total
}

function reset() {
    totalStitches.textContent = 0
    total = 0
    count = 0
    saveEl.textContent = "Previous entries: "
}