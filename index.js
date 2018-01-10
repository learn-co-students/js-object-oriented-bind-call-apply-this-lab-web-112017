function justInvoke(callback) {
  return callback()
}

function setThisWithCall(callback, this_arg, param) {
  return callback.call(this_arg, param)
}

function setThisWithApply(callback, this_arg, array) {
  return callback.apply(this_arg, array)
}

function returnNewFunctionOf(callback, this_arg) {
  return callback.bind(this_arg)
}
