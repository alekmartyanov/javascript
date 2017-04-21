BFS
https://mgechev.github.io/javascript-algorithms/module-graphs_searching_bfs.html
Parameters: Array Name,	Number startNode,	Number targetNode		
Returns: Array Shortest path from startNode to targetNode.

var bfs = require('path-to-algorithms/src/graphs/searching/bfs').bfs;
var graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];
var shortestPath = bfs(graph, 1, 5); // [1, 2, 3, 5]
-------------------------------------------------------------------------------------
DFS
https://mgechev.github.io/javascript-algorithms/module-graphs_searching_dfs.html
Parameters:  Array Name,	Number startNode,	Number targetNode		
Returns: Boolean true if path between two nodes exists.

var dfs = require('../src/graphs/searching/dfs').dfs;
var graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];
var pathExists = dfs(graph, 1, 5); // true

------------------------------------------------------------------------------------------
Data structure
https://mgechev.github.io/javascript-algorithms/module-data-structures_edge.html
Parameters: Vertex e (Vertex which this edge connects), v	Vertex (Vertex which this edge connects), Number distance	(Weight of the edge)
------------------------------------------------------------------------------------------
TSP: dijkstra
https://mgechev.github.io/javascript-algorithms/module-graphs_shortest-path_dijkstra.html
Parameters: Number src	(Source node), Number dest (Destination node), Array graph (A distance matrix of the graph)
Returns: The shortest distance between two nodes (Number)

var dijkstra =
require('path-to-algorithms/src/graphs/shortest-path/dijkstra').dijkstra;
var distMatrix =
   [[Infinity, 7,        9,        Infinity, Infinity, 16],
    [7,        Infinity, 10,       15,       Infinity, Infinity],
    [9,        10,       Infinity, 11,       Infinity, 2],
    [Infinity, 15,       11,       Infinity, 6,        Infinity],
    [Infinity, Infinity, Infinity, 6,        Infinity, 9],
    [16,       Infinity, 2,        Infinity, 9,        Infinity]];
var shortestDist = dijkstra(0, 2, distMatrix); // 9


--------------------------------------------------------------------------------------------

return function (src, dest, graph) {
    var  tempDistance = 0;
    init(src, graph);
    while (current.node !== dest && isFinite(current.distance)) {
        for (var i = 0; i < graph.length; i += 1) {
            if (current.node !== i && //if it's not the current node
                !visited[i] && //and if we haven't visited this node
                //and this node is sibling of the current...
                Number.isFinite(graph[i][current.node])) {
                tempDistance = current.distance + graph[i][current.node];
                if (tempDistance < distance[i].distance) {
                    distance[i].distance = tempDistance;
                    current.distance = tempDistance;
                    unvisited.update(current);
                }
            }
        }
        visited[current.node] = true;
        current = unvisited.extract();
    }
    if (distance[dest]) {
        return distance[dest].distance;
    }
    return Infinity;
};

function init(src, graph) {
    var currentTemp;
    current = {};
    visited = [];
    distance = [];
    unvisited = new Heap(compareNodesDistance);
    for (var i = 0; i < graph.length; i += 1) {
        currentTemp = new Node();
        if (src === i) {
            currentTemp.distance = 0;
        } else {
            currentTemp.distance = Infinity;
        }
        currentTemp.node = i;
        visited[i] = false;
        distance[i] = currentTemp;
        unvisited.add(currentTemp);
    }
    current.node = src;
    current.distance = 0;
}

function compareNodesDistance(a, b) {
    return b.distance - a.distance;
}

function Node(id, distance) {
    this.node = id;
    this.distance = distance;
}

var dijkstra = (function () {
    var Heap = require('../../data-structures/heap.js').Heap;
    var current;
    var visited;
    var distance;
    var unvisited;





  
