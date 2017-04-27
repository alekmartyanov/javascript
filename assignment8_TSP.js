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
            adjacency_matrix[edges[k][0]][edges[k][1]] = edges[k][2];
            adjacency_matrix[edges[k][1]][edges[k][0]] = edges[k][2];
        }
        console.log(adjacency_matrix);
        return this.adjacency_matrix

    }

}
var v = [[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89]]
var graph1 = new Graph(6,v);

...
