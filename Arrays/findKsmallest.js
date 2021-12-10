function findKSmallest(lists, k) {
    let sortedList = [...lists[0]];
    let idx = 1;

    while (idx < lists.length) {
        let curList = lists[idx];
        let tempList = [];

        let i = 0,
            j = 0;

        while (i < curList.length - 1 || j < sortedList.length) {
            if (curList[i] <= sortedList[j]) {
                tempList.push(curList[i]);
                i += 1;
            } else {
                tempList.push(sortedList[j]);
                j += 1;
            }
        }

        while (i < curList.length) {
            tempList.push(curList[i]);
            i += 1;
        }

        while (j < sortedList.length) {
            tempList.push(sortedList[j]);
            j += 1;
        }

        sortedList = [...tempList];
        idx += 1;
    }

    console.log(sortedList[k - 1]);
}

findKSmallest(
    [
        [10, 20, 30, 40],
        [15, 25, 35, 45],
        [24, 29, 37, 48],
        [32, 33, 39, 50],
    ],
    7
);