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
  if(string === string.toLowerCase()){
    return string.toLowerCase()
  }
  
  elseif(string === string.toUpperCase()){
    return string.toUpperCase()
  }
  
  elseif(string === "I love you, Grandma."){
    return 
  }
}