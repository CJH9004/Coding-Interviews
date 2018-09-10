/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
 *  NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length === 0){
        return 0;
    }
    var first = 0;
    var last = rotateArray.length - 1;
    var mid = Math.ceil((first + last) / 2);;
    while(first + 1 < last){
        if(rotateArray[mid] > rotateArray[last]){
            first = mid;
        }
        if(rotateArray[mid] < rotateArray[first]){
            last = mid;
        }
        mid = Math.ceil((first + last) / 2);
    }
    return rotateArray[mid];
}