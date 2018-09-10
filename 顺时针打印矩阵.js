/**
 * 
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */

var result = [];
function printMatrix(matrix)
{
    // write code here
    if(matrix.length === 0){
        return result;
    }
    var r = matrix.length;
    var c = matrix[0].length;
    var tmp = [];
    for(var i = 0; i < c; i++){
        result.push(matrix[0][i]);
    }
    for(var i = 1; i < r; i++){
        result.push(matrix[i][c-1]);
    }
    for(var i = c - 2; i >= 0; i--){
        result.push(matrix[r-1][i]);
    }
    for(var i = r - 2; i > 0; i--){
        result.push(matrix[i][0]);
    }
    for(var i = 1; i < r-1; i++){
        tmp[i-1] = [];
        for(var j = 1; j < c - 1; j++){
            tmp[i-1][j-1] = matrix[i][i];
        }
    }
    return printMatrix(tmp);
}