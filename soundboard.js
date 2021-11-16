var audioCrash = document.getElementById("crash")
var buttonElement = document.getElementById('Crash-Button')
buttonElement.addEventListener('click', function () {
    console.log('I was clicked!')
    audioCrash.play()
  })

