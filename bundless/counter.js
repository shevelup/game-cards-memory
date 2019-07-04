$('body').on('click', function () {
    function makeCounter() {
      var currentCount = 1;
      return function (){
        return currentCount++;
      };   
    }
   
      var counter = makeCounter();
  
      $pointsElement.text(currentsPoint);
   })