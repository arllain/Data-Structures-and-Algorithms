class QuickSort {
    sort(array, left, right) {
        const len = array.length;
        let pivot;
        let partitionIndex;

        if (left < right) {
            pivot = right;
            partitionIndex = this.partition(array, pivot, left, right);

            //sort left and right
            this.sort(array, left, partitionIndex - 1);
            this.sort(array, partitionIndex + 1, right);
        }
        return array;
    }
    partition(array, pivot, left, right) {
        let pivotValue = array[pivot];
        let partitionIndex = left;

        for (let i = left; i < right; i++) {
            if (array[i] < pivotValue) {
                this.swap(array, i, partitionIndex);
                partitionIndex++;
            }
        }
        this.swap(array, right, partitionIndex);
        return partitionIndex;
    }

    swap(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }
}

export default QuickSort;
