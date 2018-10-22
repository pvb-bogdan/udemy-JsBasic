//Listen for submit
// document.getElementById('loan-form').addEventListener('submit', calculateResults);

// now to make the result and loading apear when click submit we need to change listener from above

document.getElementById('loan-form').addEventListener('submit', function(e){
  // get el from ui
  //show loader -when click submit
  document.getElementById('loading').style.display = 'block';
  //hide results
  document.getElementById('results').style.display = 'none';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// calculate  resuts
function calculateResults(){

  // make vars for UI elements
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // calculating formula
  // parseFloat tuun value into a decimal.
  const principal = parseFloat(amount.value);
  const calculatingInterest = parseFloat(interest.value) / 100 / 12;
  const calculatingPayments = parseFloat(years.value) * 12;

  // compute the monthly payments

  const x = Math.pow(1 + calculatingInterest, calculatingPayments);
  const monthly = (principal*x*calculatingInterest)/(x-1);

  // check if monthly is finite number

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatingPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatingPayments) - principal).toFixed(2); 

    //hide loader
    document.getElementById('loading').style.display = 'none';
    //show results
    document.getElementById('results').style.display = 'block';
  } else{
    showError('Completati toate campurile!');
  }

}

// create showError function

function showError(error){
  //hide loader
  document.getElementById('loading').style.display = 'none';
  //hide results
  document.getElementById('results').style.display = 'none';
  //create a div
  const errorDiv = document.createElement('div');

  // get elements to inssert errorDiv into DOM

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add bs classes
  errorDiv.className = 'alert alert-danger';

  // add textNode and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 s - setTimeOut
  setTimeout(clearError, 3000);
}

// clear error 

function clearError(){
  document.querySelector('.alert').remove();
}