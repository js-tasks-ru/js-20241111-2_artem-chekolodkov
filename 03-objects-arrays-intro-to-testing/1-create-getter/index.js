/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  const spl = path.split('.');

  return (object) => {
    let t_ob = object;

    spl.forEach((spl_El) => {
      if (t_ob == undefined) return;
      t_ob = t_ob[spl_El];
    });
    
    if (typeof t_ob === 'function') return 
    else return (t_ob);
  }

}



