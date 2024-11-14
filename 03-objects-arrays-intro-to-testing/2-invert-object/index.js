/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if (typeof obj === 'object')
    return Object.fromEntries(Object.entries(obj).map((entry) => entry.reverse()))
    else return
}
