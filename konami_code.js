const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let konamiIndex = 0
  const konamiFunction = e => {
    
    if( parseInt(e.detail || e.which) === code[konamiIndex]){
      konamiIndex++
      if(konamiIndex === code.length){
        alert("Good on you")
        konamiIndex = 0
      }
    }else{
      konamiIndex = 0
    }
  }
  document.body.addEventListener('keydown', konamiFunction)
}