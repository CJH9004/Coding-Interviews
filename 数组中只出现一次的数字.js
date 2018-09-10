/**
 * 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
 * 请写程序找出这两个只出现一次的数字。
 */

function IsBit(num, index)
{
    num=num>>index;
    return (num&1);
}

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    if(array.length<2)
        return ;
    var size=array.length;
    var temp=array[0];
    for(var i=1;i<size;i++)
        temp=temp^array[i];
    if(temp==0)
        return ;
    var index=0;
    while((temp&1)==0){
        temp=temp>>1;
        ++index;
    }
    var num1=0, num2=0;
    for(var i=0;i<size;i++)
    {
        if(IsBit(array[i],index))
            num1^=array[i];
        else
            num2^=array[i];
    }
    return [num1, num2];
}