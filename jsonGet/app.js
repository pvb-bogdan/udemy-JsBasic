//  get elements from UI
document.getElementById('btn1').addEventListener('click', loadClient);

// made the request for client
function loadClient (e){
  // creata XHR or xmlHttp obj
  const xhr = new XMLHttpRequest();

  // open() - in this method we specify the type of request ( case GET), second in what we want(case data.txt) and true because we want to be async
  xhr.open('GET', 'client.json', true);

  xhr.onload = function() {
    // first we check the status
    if(this.status === 200){
      // console.log(this.responseText);
      const client = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${client.id}</li>
        <li>Nume: ${client.name}</li>
        <li>Companie: ${client.company}</li>
        <li>Telefon: ${client.phone}</li>
      </ul>
      `
      document.getElementById('client').innerHTML = output;
    }
    
  }
  xhr.send();
}


//  get elements from UI
document.getElementById('btn2').addEventListener('click', loadClienti);
// made the request for clients
function loadClienti (e){
  // creata XHR or xmlHttp obj
  const xhr = new XMLHttpRequest();

  // open() - in this method we specify the type of request ( case GET), second in what we want(case data.txt) and true because we want to be async
  xhr.open('GET', 'clienti.json', true);

  xhr.onload = function() {
    // first we check the status
    if(this.status === 200){
      // console.log(this.responseText);
      const clienti = JSON.parse(this.responseText);

      let output = '';// this var will be reasigned inside the foreach loop , so it must be let not const

      clienti.forEach(function(client){
      // += on output var means that we wil append the result every time we loop trough, if it was only = it will rewritte the previous result.
      output += `
      <ul>
        <li>ID: ${client.id}</li>
        <li>Nume: ${client.name}</li>
        <li>Companie: ${client.company}</li>
        <li>Telefon: ${client.phone}</li>
      </ul>
      `;
      });
      document.getElementById('clienti').innerHTML = output;
    }
    
  }
  xhr.send();
}