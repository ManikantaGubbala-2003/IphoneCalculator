let calculation = localStorage.getItem('calculation') || '';
      function dispView(value1) {
        document.querySelector('.js-answer').innerHTML = value1

      }

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        dispView(calculation);
        localStorage.setItem('calculation', calculation);
      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }
   