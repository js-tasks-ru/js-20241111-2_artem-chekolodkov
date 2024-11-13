/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if (arr == undefined) return arr = []
    else return arr.filter((el, id) => id == arr.indexOf(el))
}
