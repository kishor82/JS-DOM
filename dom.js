
// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello"

// console.log(document.forms);
// console.log(document.images);

// console.log(document.getElementById('header-title'));

// var headerTitle =  document.getElementById('header-title');
// var header =  document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent = "Hello";

// headerTitle.innerText = "Goodbye"

// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>' ;


//GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);

// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0 ; i< items.length;i++){
// 	items[i].style.backgroundColor = '#f4f4f4';
// }
// header.style.borderBottom = 'solid 3px #000' ;

//GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);

// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0 ; i< li.length;i++){
// 	li[i].style.backgroundColor = '#f4f4f4';
// }


//  var header =  document.querySelector('#main-header');

//  header.style.borderBottom = 'solid 4px #ccc';

//  var input = document.querySelector('input');

//  input.value = "hello world";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND"; 

// var item =  document.querySelector('.list-group-item');
// item.style.color = 'red';

// var Lastitem =  document.querySelector('.list-group-item:last-child');
// Lastitem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');

// secondItem.style.color = 'coral';

// //QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[1].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even');

// for(var i =0 ; i < odd.length ; i++){
// 	odd[i].style.backgroundColor = '#f4f4f4';
// 	even[i].style.backgroundColor = '#ccc';	
//  }

//TRAVERSING THE DOM //

// var itemlist = document.querySelector('#items');

//  parentElement 

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';

// childNode 
 
var itemlist = document.querySelector('#items');
// console.log(itemlist.children[1]);

// itemlist.children[1].style.backgroundColor = 'yellow';
 //firstChild
// console.log(itemlist.firstChild);

//firstElementChild 
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "Hello 1";

// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "Hello 4";

//nextSibling 

// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);

// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);

//createElement 

//create a div

// var newDiv = document.createElement('div');

// newDiv.className =  'hello';

// newDiv.id = 'hello1' ;

//Add attr 
// newDiv.setAttribute('title','Hello Div');

//create text node
// var newDivText = document.createTextNode('Hello world');
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv); 
// container.insertBefore(newDiv,h1);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv,h1);

// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){
// 	// console.log('Button clicked');
// 	// document.getElementById('header-title').textContent = "changed";
// 	// document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// 	// console.log(e);
// 	console.log(e.target);
// 	console.log(e.target.id);
// 	console.log(e.target.className);
// 	console.log(e.target.classList);

// 	var output = document.getElementById('output');

// 	output.innerHTML = '<h3>'+e.target.id+'</h3>';

// 	console.log(e.type);
// }
