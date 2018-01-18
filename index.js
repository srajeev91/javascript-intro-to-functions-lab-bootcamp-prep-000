function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var whatWasSaid = string
  if (whatWasSaid.toLowerCase() === whatWasSaid) {
    return 'I can\'t hear you!'
  }
}

function sayHiToGrandma(string) {
  var whatWasSaid = string
  if (whatWasSaid.toUpperCase() === whatWasSaid) {
    return "YES INDEED!"
  }
}