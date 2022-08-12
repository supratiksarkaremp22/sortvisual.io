data = []
bg_color = []
speed = 10
size = 10
let max = 100
let min = 1

for(let i = 0; i < size; i++) {
    data.push(Math.floor(Math.random() * (max - min)) + min)
}

var container = document.getElementById("chart-container")
for(let i = 0; i < size; i++) {
    container.innerHTML+='<div style="height:'+data[i]+'%">'+ data[i] +'</div>';
}

function sortButton() {
    sort_type = document.getElementById("sort").value
    switch(sort_type) {
        case "bubble": 
            console.log("bubble sort")
            bubbleSort()
            break
        case "insertion": 
            console.log("insertion sort")
            insertionSort()
            break
        case "selection": 
            console.log("selection sort")
            selectionSort()
            break
    }
}

function randomArray() {
    data = []
    for(let i = 0; i < size; i++) {
        data.push(Math.floor(Math.random() * (max - min)) + min)
    }
    container.innerHTML = ""
    for(let i = 0; i < size; i++) {
        container.innerHTML+='<div style="height:'+data[i]+'%">'+ data[i] +'</div>';
    }
}

function updateSize(){
    size = document.getElementById("size").value
    document.getElementById("size-number").innerHTML = size
    data = []
    for(let i = 0; i < size; i++) {
        data.push(Math.floor(Math.random() * (max - min)) + min)
    }
    container.innerHTML = ""
    for(let i = 0; i < size; i++) {
        container.innerHTML+='<div style="height:'+data[i]+'%">'+ data[i] +'</div>';
    }
}

function updateSpeed() { 
    speed = document.getElementById("speed").value
    document.getElementById("speed-number").innerHTML = document.getElementById("speed").value
    console.log(speed)
}

function updateMax() { 
    max = document.getElementById("max").value 
    document.getElementById("max-number").innerHTML = document.getElementById("max").value
    console.log(max)
    randomArray()
}

function updateMin() { 
    min = document.getElementById("min").value
    document.getElementById("min-number").innerHTML = document.getElementById("min").value
    console.log(min)
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Bubble Sort
async function bubbleSort() {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size-1; j++) {
            container.childNodes[j].style.backgroundColor = "red"
            container.childNodes[j+1].style.backgroundColor = "yellow"
            if(data[j] > data[j+1]) {
                await sleep(10000/speed)
                let temp = data[j]
                data[j] = data[j+1]
                data[j+1] = temp
                container.innerHTML = ""
                for(let x = 0; x < size; x++) {
                    container.innerHTML+='<div style="height:'+data[x]+'%">'+ data[x] +'</div>';
                }
                container.childNodes[j].style.backgroundColor = "yellow"
                container.childNodes[j+1].style.backgroundColor = "red"
                await sleep(10000/speed)
            }
            container.childNodes[j].style.backgroundColor = "orange"
            container.childNodes[j+1].style.backgroundColor = "orange"
        }
    }
    for(let i = 0; i < size; i++) {
        await sleep(20)
        container.childNodes[i].style.backgroundColor = "lightgreen"
    }
}

// Insertion Sort
async function insertionSort() {
    for (let i = 1; i < size; i++) {
        let current = data[i];
        let j = i-1; 
        while ((j > -1) && (current < data[j])) {
            container.childNodes[j+1].style.backgroundColor = "yellow"
            await sleep(10000/speed)
            temp = data[j+1]
            data[j+1] = data[j];
            data[j] = temp
            container.innerHTML = ""
            for(let x = 0; x < size; x++) {
                container.innerHTML+='<div style="height:'+data[x]+'%">'+ data[x] +'</div>';
            }
            container.childNodes[j].style.backgroundColor = "yellow"
            await sleep(1000/speed)
            j--;
        }
        container.childNodes[j+1].style.backgroundColor = "lightgreen"
        await sleep(100/speed)
        data[j+1] = current;
    }
    for(let i = 0; i < size; i++) {
        await sleep(20)
        container.childNodes[i].style.backgroundColor = "lightgreen"
    }
}

// Selection Sort 
async function selectionSort() {
    for(let i = 0; i < size; i++) {
        let minIdx = i
        container.childNodes[i].style.backgroundColor = "red"
        await sleep(10000/speed)
        for(let j = i+1; j < size; j++) {
            container.childNodes[j].style.backgroundColor = "yellow"
            await sleep(10000/speed)
            if(data[minIdx] > data[j]) {
                container.childNodes[minIdx].style.backgroundColor = "yellow"
                container.childNodes[i].style.backgroundColor = "red"
                minIdx = j
                container.childNodes[j].style.backgroundColor = "lightgreen"
                await sleep(10000/speed)
            }
        }
        temp = data[i] 
        data[i] = data[minIdx]
        data[minIdx] = temp
        container.innerHTML = ""
        for(let x = 0; x < size; x++) {
            container.innerHTML+='<div style="height:'+data[x]+'%">'+ data[x] +'</div>';
        }
        await sleep(100/speed)
        container.childNodes[i].style.backgroundColor = "lightgreen"
        container.childNodes[minIdx].style.backgroundColor = "red"
        await sleep(10000/speed)
        container.childNodes[i].style.backgroundColor = "orange"
        container.childNodes[minIdx].style.backgroundColor = "orange"
    }

    for(let i = 0; i < size; i++) {
        await sleep(20)
        container.childNodes[i].style.backgroundColor = "lightgreen"
    }
   
}