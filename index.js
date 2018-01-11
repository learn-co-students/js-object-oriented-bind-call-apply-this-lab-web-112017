function justInvoke(method) {
  return method.call()
}

function setThisWithCall(method, name, age) {
  return method.call(name, age)
}

function setThisWithApply(method, name, argumentArray) {
  return method.apply(name, argumentArray)
}

function returnNewFunctionOf(method, name) {
  return newMethod = method.bind(name);
}
