class Node {
constructor (name) {
        this.name = name;
        this.children = [];
	}
}


class Graf {
    constructor (edges){
    this.nodes = [];
		let createdNodes = new Map();
        for (let edge of edges) {
            let node1, node2;
			let [name1, name2] = edge;
            
			if (!createdNodes.has(name1)){
				node1=new Node(name1);
				createdNodes.set (name1, node1);
				this.nodes.push(node1);                 
            }
            else {
				node1 = createdNodes.get(name1);
			}
			
			if (!createdNodes.has(name2)){
				node2=new Node(name2);
				createdNodes.set (name2, node2);
				this.nodes.push(node2);                 
            }
            else {
				node2 = createdNodes.get(name2);
			}
			node1.children.push(node2);
		}	
	}

	
	dfs (root) {
        if (root == null) return;
		console.log(root.name);
		root.visited = true;
		for(let child of root.children){
			if(!child.visited) {
				this.dfs(child);
			}
		}
    }
}


		

let graf = new Graf ([[0,1],[0,4],[0,5],[1,3],[1,4],[3,4],[3,2],[2,1]]);
graf.dfs(graf.nodes[0]);

------------------------------------------------------------------------------------------------------
	function bfs (graph, startNode, targetNode) {
    var parents = [];
    var queue = [];
    var visited = [];
    var current;
    queue.push(startNode);
    parents[startNode] = null;
    visited[startNode] = true;
    while (queue.length) {
        current = queue.shift();
        if (current === targetNode) {
            return buildPath(parents, targetNode);
        }
        for (var i = 0; i < graph.length; i += 1) {
            if (i !== current && graph[current][i] && !visited[i]) {
                parents[i] = current;
                visited[i] = true;
                queue.push(i);
            }
        }
    }
    return null;
};

function buildPath(parents, targetNode) {
    var result = [targetNode];
    while (parents[targetNode] !== null) {
        targetNode = parents[targetNode];
        result.push(targetNode);
    }
    return result.reverse();
}

LinkedList.prototype.push = function (data) {
    var node = new Node(data);
    if (this.first === null) {
        this.first = this.last = node;
    } else {
        var temp = this.last;
        this.last = node;
        node.prev = temp;
        temp.next = node;
    }
};

LinkedList.prototype.shift = function () {
    if (this.first === null) {
        return null;
    }
    var temp = this.first;
    this.first = this.first.next;
    return temp;
};

LinkedList.prototype.reverse = function () {
    if (!this.first || !this.first.next) {
        return;
    }
    var current = this.first.next;
    var prev = this.first;
    var temp;
    while (current) {
        temp = current.next;
        current.next = prev;
        prev.prev = current;
        prev = current;
        current = temp;
    }
    this.first.next = null;
    this.last.prev = null;
    temp = this.first;
    this.first = prev;
    this.last = temp;
};

function Node(data) {
        /**
     * Data of the node.
     * @member {Object}
     */
    this.data = data;
    /**
     * Next node.
     * @member {Node}
     */
    this.next = null;
    /**
     * Previous node.
     * @member {Node}
     */
    this.prev = null;
};

function LinkedList() {
    this.first = null;
    this.last = null;
};

var graph = [[1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0]];

var graph2 = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
var v= bfs (graph, 1,5)
console.log(v)
	
-----------------------------------------------------------------------------------

LinkedList.prototype.pop = function () {
    if (this.last === null) {
        return null;
    }
    var temp = this.last;
    this.last = this.last.prev;
    return temp;
};

function hasPath(graph, current, goal) {
    var stack = [];
    var visited = [];
    var node;
    stack.push(current);
    visited[current] = true;
    while (stack.length) {
        node = stack.pop();
        if (node === goal) {
            return true;
        }
        for (var i = 0; i < graph[node].length; i += 1) {
            if (graph[node][i] && !visited[i]) {
                stack.push(i);
                visited[i] = true;
            }
        }
    }
    return false;
}

function dfs (graph, start, goal) {
    return hasPath(graph, start, goal);
};

var graph = [[1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0]];
var pathExists = dfs(graph, 1, 5); // true


----------------------------------------------------------------------------
	function bfs(graph, startNode) {
    var parents = [];
    var queue = [];
    var visited = [];
    var current;
    queue.push(startNode);
    parents[startNode] = null;
    visited[startNode] = true;
    while (queue.length) {
        current = queue.shift();
        console.log(current)
        /*if (current === targetNode) {
         return buildPath(parents, targetNode);
         }*/
        for (var i = 0; i < graph.length; i += 1) {
            if (i !== current && graph[current][i] && !visited[i]) {
                parents[i] = current;
                visited[i] = true;
                queue.push(i);
            }
        }
    }
    return null;
};

var graph = [[1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0]];
var shortestPath = bfs(graph, 0); // [1, 2, 3, 5]
