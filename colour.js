const button = document.querySelector("button");
const body = document.querySelector("body");

const color = ['red','yellow','blue','pink','green','orange','#33FFDA','#7733FF','#C733FF','#900C3F','#FF33B5','#FF5733','#FFD433'];
body.style.backgroundColor ='#9CFF33'

button.addEventListener('click', changeB );

function changeB() {
    const colorIndex = parseInt(Math.random() *color.length)
    body.style.backgroundColor = color[ colorIndex]
};