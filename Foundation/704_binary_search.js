function binarySearch() {
    let n = nums.length;

    if (n === 0) return -1;
    if (n === 1) return n[0] === target ? target : -1;

    let l = 0;
    let r = n - 1;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
}
