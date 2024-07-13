const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log('button');
  button.addEventListener('click', function (ee) {
    console.log(ee);
    console.log(ee.target);
    if (ee.target.id === 'grey') {
      body.style.backgroundColor = ee.target.id
    }
    if (ee.target.id === 'blue') {
      body.style.backgroundColor = ee.target.id 
    }
    if (ee.target.id === 'white') {
      body.style.backgroundColor = ee.target.id
    }
    if (ee.target.id === 'yellow') {
      body.style.backgroundColor = ee.target.id
    }
  });
});