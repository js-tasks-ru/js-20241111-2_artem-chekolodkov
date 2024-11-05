/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {

 let par_num = {asc: 1, desc: -1};
 par_num = par_num[param];

 let local = [['ru', 'en'], {caseFirst: 'upper'}]

 return [...arr].sort((a, b) => a.localeCompare(b, ...local) * par_num)
}
