const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
<<<<<<< HEAD
 return kittens.slice(0, kittens.length - 1) 
=======
  return kittens.slice(3)
  
>>>>>>> ef6e0e25faa94b429a9cc77098f4f654036cec52
}

function removeFirstKitten() {
  return kittens.slice(1)
}