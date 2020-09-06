class FirstRecurringCharacter {
  firstRecurringCharacter_worstCase(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return array[i];
        }
      }
    }
    return undefined;
  } // time complexity O(n^2) space complexity O(1)

  firstRecurringCharacter_bestCase(array) {
    let map = {};

    for (let i = 0; i < array.length; i++) {
      if (map[array[i]] != undefined) {
        return array[i];
      } else {
        map[array[i]] = i;
      }
    }
    return undefined;
  } // time complexity O(n) space complexity O(n)
}

export default FirstRecurringCharacter;
