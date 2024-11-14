/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {

  const spl = path.split('.');

  if (!spl.length) return;
  return (obj) => {
    let t_ob = obj;

    for (const spl_El of spl) {
      if (!t_ob[spl_El]) return t_ob[spl_El];
      t_ob = t_ob[spl_El];
    }

    if (typeof t_ob === 'function') return 
    return t_ob;

  };
    }
    






