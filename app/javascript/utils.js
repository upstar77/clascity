import R from 'ramda';

function isNilOrEmpty(arr) {
  return R.isNil(arr) || R.isEmpty(arr);
}

export { isNilOrEmpty }
