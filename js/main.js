// tbody = document.querySelector("body");
// tbody.textContext = "hello world!";
// console.log(tbody); // <div>...</div>

function addtitle(){
  var btnAdd = document.querySelector('#btnAdd');
  var tbody = document.querySelector("body");
  var title = document.createElement('h1');
  var textnode = document.createTextNode('Hello World!');
  //var body = document.getElementsByTagName('body')[0];
 title.textContent = textnode;
 tbody.appendChild(title) ;
}

