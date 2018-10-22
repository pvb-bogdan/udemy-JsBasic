// AJAX request

document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // creata XHR or xmlHttp obj
  const xmlHttp = new XMLHttpRequest();

  // open() - in this method we specify the type of request ( case GET), second in what we want(case data.txt) and true because we want to be async
  xmlHttp.open('GET', 'data.txt', true);
  
  // this is newer onload function and the ready state value is allready on 4 when executed
  xmlHttp.onload = function() {
    // first we check the status
    if(this.status === 200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
    }
  }

  //Optional - use for spinners or loaders
  xmlHttp.onprogress = function(){
    console.log('ready statte', this.readyState) // state 3
  }

  // if error
  xmlHttp.onerror = function() {
    // do something
    console.log('error');
  }

  // before onload function actually we need to check if we are on stage 4 before output the data
  // xmlHttp.onreadystatechange = function() {
  //   // check status and ready state
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  // make the output
  xmlHttp.send();

  // HTTP Statuses
  // 200 = "ok"
  // 403 = "Forbiden"
  // 404 = "Not found"

  // Ready state values of request
  // 0: request not initialized
  // 1: server conection established
  // 2: request recived
  // 3: processing request
  // 5: request finished and response ready
}