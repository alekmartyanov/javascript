/**
 * Created by stremov_as on 18.04.2017.
 */
function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};

function addNumbertoList(number) {
    var str_n = number.toString();
    var temp=str_n.split("");
    var list=new SinglyList();
    for(var i=0;i<=temp.length;i++){
        list.add(temp[i]);
    };
    return list
};


list1 = addNumbertoList(12745895);
console.log(list1.searchNodeAt(8).data);

console.log(list1._length)
list1.add(3)
console.log(list1._length);

list1.remove(1)
console.log(list1._length);
