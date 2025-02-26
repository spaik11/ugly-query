const body = document.querySelector('body')
body.style.background = 'url(https://media.giphy.com/media/RqW2kzGBFL2es/giphy.gif)';

const title = document.querySelector('h1');
title.style.color = 'orange';
title.style.letterSpacing = '100px';
title.style.backgroundColor = 'teal';
title.style.opacity = '.5';

const para = document.querySelector('#p1');
para.style.color = 'black';
para.style.background = 'url(https://media.giphy.com/media/82MkOzEyyXeSLkgWyv/giphy.gif)';
para.style.fontSize = '50px';
para.style.padding = '400px';

const div1 = document.querySelector('#div1');
div1.style.color = 'brown';
div1.style.fontSize = '100px';

const div2 = document.querySelector('#div2');
div2.style.color = 'purple';

const div3 = document.querySelector('#div3');
div3.style.color = 'red';
div3.style.fontSize = '75px';
div3.style.border = '20px dotted blue';

const div4 = document.querySelector('#div4');
div4.style.color = 'orange';
div4.style.fontSize = '120px';
div4.style.border = '20px dashed pink';

const ul = document.querySelector('#items');
ul.style.fontSize = '35px';

const p3 = document.querySelector('#p3');
p3.style.fontSize = '40px';
p3.style.color = 'pink';

const newDiv = document.createElement('div');
newDiv.id = 'formDiv';
const formDiv = document.querySelector('form');
formDiv.appendChild(newDiv);
formDiv.style.border = '50px double brown';

const button = document.querySelector('button');
button.style.fontSize = '100px';
button.style.background = 'purple';