/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(str, symb) {
    let res = ''
    let st = ''
    let c;

    for (let i = 0; i < str.length; i++) {

        if (str[i] == st[0]) c = st
        else c = ''

        st = str[i] + c

        if (st.length > symb) continue
        else res += str[i]
    }
    return res
}
