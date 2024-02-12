function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = weight / ((height / 100) * (height / 100));
    var result = document.getElementById('result');
  
    if (isNaN(bmi)) {
      result.innerHTML = 'Please enter valid values.';
      return;
    }
  
    var category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    result.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' + 'Category: ' + category;
  }
  