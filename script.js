class CreateNode {
    constructor(data) {
        this.data = data
        this.id = undefined
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        const newNode = new CreateNode(data)
        if (this.root === null) {
            this.root = newNode;
            
        }
        else {
            this.insertNode(newNode, this.root)
        }
        
    }
    insertNode(newNode, currentNode) {

        if (newNode.data < currentNode.data) {
            if (currentNode.left == null) {
                currentNode.left = newNode;
            }
            else {
                this.insertNode(newNode, currentNode.left)
            }
        }
        else if (newNode.data > currentNode.data) {
            if (currentNode.right == null) {
                currentNode.right = newNode;
            }
            else {
                this.insertNode(newNode, currentNode.right)
            }
        }

    }
}

const newTree = new BinarySearchTree();

newTree.insert(5)
newTree.insert(2)
newTree.insert(13)

console.log(newTree)