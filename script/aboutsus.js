let allvalues = document.querySelectorAll(".value");

allvalues.forEach((singlevalue) => {
  let startvalue = 0;
  let endvalue = parseInt(singlevalue.getAttribute("data-value"));
  let duration = Math.floor(6000 / endvalue);

  let counter = setInterval(function() {
    startvalue += 1;
    singlevalue.textContent = startvalue;

    if(startvalue == endvalue){
      clearInterval(counter);
    }
  }, duration);
});