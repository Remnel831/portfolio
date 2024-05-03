const addButton = document.getElementById("addButton");

const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

const removeButton = document.getElementById("removeButton");
const listInputBox = document.getElementById("textBox");
const selectList = document.getElementById("selectList");
const outputPara = document.getElementById("outputPara");
const countingbox = document.getElementById("CountingBox");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
addButton.addEventListener('click', onAddButtonClick)
nextButton.addEventListener('click', onNextButtonClick)
prevButton.addEventListener('click', onPrevButtonClick)
removeButton.addEventListener('click', onRemoveButtonClick)


 

class LinkedList {

constructor() {   
this.head = null;
}


GetAt(index){
    let counter = 0;
    let node= this.head;
    while(node){
        if (counter === index){
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

deleteAt(index){
    if (!this.head){
        this.head = new Node(data);
        return;
    }
    if(index === 0){
        this.head = this.head.next;
    }
    const previous = this.GetAt(index -1);

    if(!previous || !previous.next){
        return;
    }
    previous.next = previous.next.next;
    return this.head;

}

Add(data) {
    
const newNode = new Node(data);
    
if (this.head === null) {
this.head = newNode;
} 
else 
{
let current = this.head;    
while (current.next !== null) {
current = current.next;}

current.next = newNode;    
        }
    }   
}   


const Print = (list) =>{
    let current = list.head;
    console.log(list);
    outputPara.innerHTML = "";
    while(current !== null){
        outputPara.innerHTML += current.data + " ";
        current = current.next;
    }
}

var list = new LinkedList();
var count = 0;
countingbox.value = count +1;

function onAddButtonClick(){
    list.Add(listInputBox.value);
    Print(list);

}

function onNextButtonClick(){
count++;
countingbox.value = count +1;
removeButton.textContent = "Remove at " + (count +1);

}

function onPrevButtonClick(){
count--;
removeButton.textContent = "Remove at " + (count +1);
countingbox.value = count +1;
}
function onRemoveButtonClick(){

list.deleteAt(count);
Print(list);
}