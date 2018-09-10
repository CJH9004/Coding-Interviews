// 统计一个数字在排序数组中出现的次数。

function GetNumberOfK(data, k) {
    return biSearch(data, k+0.5) - biSearch(data, k-0.5) ;
}

function biSearch(data, num){
    var s = 0, e = data.length-1, mid;     
    while(s <= e){
        mid = (e + s) >> 1;
        if(data[mid] < num)
            s = mid + 1;
        else if(data[mid] > num)
            e = mid - 1;
    }
    return s;
}