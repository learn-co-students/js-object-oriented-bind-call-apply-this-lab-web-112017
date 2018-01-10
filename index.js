function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg){
  bob = fn.call(thisValue, arg)
  return bob
}

function setThisWithApply(fn, thisValue, args){
  bob = fn.apply(thisValue, args)
  return bob
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue) 
}
