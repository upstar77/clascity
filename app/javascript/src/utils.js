import R from 'ramda';

export function isNilOrEmpty(arr) {
  return R.isNil(arr) || R.isEmpty(arr);
}

export function addActionPrefix(prefix) {
  return R.reduce((acc, action) => (
    R.assoc(action, prefix + action, acc)
  ), {});
}

