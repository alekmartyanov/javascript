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






  
