const name = "Bogdan Petre";
const age = 44;
const job = "front end";
const city = "Bucuresti";
let html;

function salut(){
  return ('salut!');
}

// insert html without template strings (es5)

  html = '<ul><li> Name: ' + name + '</li> <li>Age: ' + age + '</li> <li>Job: ' + job + '</li> <li>Oras: ' + city + '</li><ul>';
  html = '<ul>' +
          '<li> Name: ' + name + '</li>' +
          '<li> Age: ' + age + '</li>' +
          '<li> job: ' + job + '</li>' +
          '<li> city: ' + city + '</li>' +
        '</ul>'

// insert html with template strings (es6) 
// use backslash `` and interpolation with dollar sign $ and {} => ${}  
  html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>Value 2+2 = ${2+2}</li>
      <li>${salut()} </li>
      <li>${age > 39 ? 'over 40' : 'under 40'}</li>
    </ul>
  `
document.body.innerHTML = html;