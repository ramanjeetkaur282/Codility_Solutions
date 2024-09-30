var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length){
        return findMedianSortedArrays(nums2,nums1);
    }

    let m=nums1.length;
    let n=nums2.length;
    let low=0,high=m;

    while(low <= high){
        let part1=Math.floor((low+high)/2);
        let part2=Math.floor((m+n+1)/2)-part1;

        let leftMax1=part1===0 ? -Infinity : nums1[part1-1];
        let rightMin1=part1 === m ? Infinity :nums1[part1];

        let leftMax2=part2=== 0 ? -Infinity : nums2[part2-1];
        let rightMin2=part2 === n ? Infinity :nums2[part2];

        if(leftMax1 <= rightMin2 && leftMax2 <= rightMin1){
            if((m+n)%2===0){
                return (Math.max(leftMax1,leftMax2)+Math.min(rightMin1,rightMin2))/2;
            } else {
                return Math.max(leftMax1,leftMax2);
            }
        } else if(leftMax1 > rightMin2){
            high=part1-1;
        } else {
            low=part1+1;
        }


    }
};

console.log(findMedianSortedArrays([1,2],[3,4]));