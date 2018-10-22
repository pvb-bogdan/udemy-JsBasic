document.querySelector('.btn-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // get the input value
  const number = document.querySelector('input[type="number"]').value;

  //initiate http obj request
  const xhr = new XMLHttpRequest();

  // do on open
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  // do on oload
  xhr.onload = function(){
    if(this.status === 200){
      // getting api is done
      const response = JSON.parse(this.responseText);
      // console.log(response);
      // starting the output by initialize an output string  
      let output = '';
      // we have to loop trough json array 
      if(response.type === 'success'){
        // console.log('ura');
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });

      } else {
        output += '<li>Something went wrong!</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();
}