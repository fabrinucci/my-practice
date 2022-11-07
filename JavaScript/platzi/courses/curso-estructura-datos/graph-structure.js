/*

    2 - 0
   / \ 
  1 - 3
*/

// Edge List

const edgeGraph = [
  [0,2],
  [2,3],
  [2,1],
  [1,3]
];

// Adjacent List
//               0     1       2       3
const adjacentListArr = [[2], [2,3], [0,1,3], [1,2] ]

const adjacentListObj = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2],
}

// Adjacent Matrix

const AdjacentMatrixArr = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0],
]

const AdjacentMatrixObj = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}