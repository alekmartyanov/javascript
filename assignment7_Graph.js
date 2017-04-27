class Graph {
    constructor (nodes, edges) {
            this.nodes = nodes;
            this.edges= edges;
            var adjacency_matrix = [];
            var graph=adjacency_matrix;
            this.graph =adjacency_matrix;
                        for (var i = 0; i < nodes; i++) {
                adjacency_matrix[i] = [];
                for (var j = 0; j < nodes; j++) {
                    adjacency_matrix[i][j] = 0;
                }
            }
            for (var k = 0; k < edges.length; k++) {
                adjacency_matrix[edges[k][0]][edges[k][1]] = 1;
                adjacency_matrix[edges[k][1]][edges[k][0]] = 1;
            }
            //console.log(adjacency_matrix);
            return this.adjacency_matrix

        }
    bfs (node) {
        console.log("BFS")
    var parents = [];
    var queue = [];
    var visited = [];
    var current;
        queue.push(node);
    parents[node] = null;
    visited[node] = true;
    while (queue.length) {
        current = queue.shift();
        console.log(current);
        for (var i = 0; i < this.graph.length; i += 1) {
            if (i !== current && this.graph[current][i] && !visited[i]) {
                parents[i] = current;
                visited[i] = true;
                queue.push(i);
            }
        }
    }
}
    dfs (node) {
        console.log("DFS")
        var stack = [];
    var visited = [];
    var node;
    stack.push(node);
    visited[node] = true;
    while (stack.length) {
        node = stack.pop();
        console.log(node)
        for (var i = 0; i < this.graph[node].length; i += 1) {
            if (this.graph[node][i] && !visited[i]) {
                stack.push(i);
                visited[i] = true;
            }
        }
    }
}
    }
var arr = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]
var graph = new Graph(6,arr);
graph.bfs(0);
graph.dfs(0);
