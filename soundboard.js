var audioCrash = document.getElementById("crash")
var buttonElement = document.getElementById('Crash-Button')
buttonElement.addEventListener('click', function () {
    console.log('I was clicked!')
    audioCrash.play()
  })

var audioMoo = document.getElementById("moo")
var buttonElement = document.getElementById('Cow-Button')
buttonElement.addEventListener('click', function () {
    console.log('I was clicked!')
    audioMoo.play()
  })

  var audioScream = document.getElementById("scream")
  var buttonElement = document.getElementById('Scream-Button')
  buttonElement.addEventListener('click', function () {
      console.log('I was clicked!')
      audioScream.play()
    })

