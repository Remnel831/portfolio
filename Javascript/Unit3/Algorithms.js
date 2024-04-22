const outputParagraph = document.getElementById("outputPara");
const buttonDepth = document.getElementById("depthButton");
const buttonBreadth = document.getElementById("breadthButton");
buttonBreadth.addEventListener('click', onBreadthButtonClick);
buttonDepth.addEventListener('click', onDepthButtonClick);


class Leaf {
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(data){
        var newLeaf = data;

        if(this.root === null){
            this.root = newLeaf;
        }
        else{this.insertLeaf(this.root, newLeaf)}
    }

    insertLeaf(node, newLeaf){
        if(newLeaf.value < node.value){
            if(node.left === null){
                node.left = newLeaf;
            }
            else{
                this.insertLeaf(node.left, newLeaf);
            }
        }
        
        else{
            if(node.right === null){
                node.right = newLeaf;
            }
            else{
                this.insertLeaf(node.right, newLeaf);
            }
        }
    }
    remove(value){
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, key){
        if(node === null){
            return null;
        }
        else if (key < node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if (key > node.data){
            node.right = this.removeNode(node.right, key)
            return node;
        }
        else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if (node.left === null){
                node = node.right;
                return node;
                
            }
            else if (node.right === null){
                node = node.left;
                return node;
            }
        }
    }

}

function bfs(node){
    if(node == null){
        return 0;
    }
    else 
    {
        leftHeight = bfs(node.left);
        rightHeight = bfs(node.right);

        if(leftHeight > rightHeight){
            return (leftHeight + 1)
        }
        else {
            return (rightHeight + 1);
        }
    }
}
function dfs(node){
    if(node === null){
        return;
    }
    dfs(node.left);
    dfs(node.right);
    Depth.push(node.value);
}


function onDepthButtonClick(){
    Depth.length = 0;
    dfs(sidewinder);
    outputParagraph.innerHTML = Depth;
    console.log(Depth);

}

function onBreadthButtonClick(){
    Breadth.length =0;
    Breadth.push(bfs(sidewinder));
    outputParagraph.innerHTML = Breadth;
    console.log(Breadth);
}
const Depth = [];
const Breadth = [];
newTree = new BST();

sidewinder = new Leaf("18")
eagle = new Leaf("17")
diamondback = new Leaf("14");

courier = new Leaf("12");
keelback = new Leaf("0");
asp_scout = new Leaf("20");
vulture = new Leaf("22"); 
clipper = new Leaf("23");
gunship = new Leaf("7");
fdl = new Leaf("23");
python = new Leaf("15"); 
anaconda = new Leaf("29");
corvette = new Leaf("30");
cutter = new Leaf("28");


newTree.insert(sidewinder);
newTree.insert(eagle);
newTree.insert(diamondback);
newTree.insert(courier);
newTree.insert(keelback);
newTree.insert(vulture);
newTree.insert(clipper);
newTree.insert(gunship);
newTree.insert(fdl);
newTree.insert(python);
newTree.insert(anaconda);
newTree.insert(corvette);
newTree.insert(cutter);

