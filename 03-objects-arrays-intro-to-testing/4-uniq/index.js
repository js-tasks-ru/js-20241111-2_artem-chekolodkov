/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    const res_arr = new Set(arr);
    if (arr == undefined) return arr = []
    else return [...res_arr];
}
