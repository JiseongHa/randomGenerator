let quote = ["Do not be afraid of competition.", 
	"An exciting opportunity lies ahead of you.", 
	"You love peace.", "Get your mind set", 
	"You will always be surrounded by true friends.", 
	"Sell your ideas-they have exceptional merit.", 
	"You should be able to undertake and complete anything.", 
	"You are kind and friendly.","You are wise beyond your years.", 
	"Your ability to juggle many tasks will take you far."];

const fontFamilies = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
    "Garamond",
  ];

function getName(){
	let name = document.getElementById("nameInput").value;
	generator(name);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function restyle(name_div,text_div){
	//Modify Color
	let color = getRandomColor();
	name_div.style.color = color;
	document.getElementById("fortune").style.borderColor = color;

	//Modify Font Size
	let font_size = Math.floor(Math.random()*10)+20;
	name_div.style.fontSize = font_size+"px";

	//Modify Font Family
	let family = Math.floor(Math.random()*7);
	name_div.style.fontFamily = fontFamilies[family];
	text_div.style.fontFamily = fontFamilies[family];
}

function generator(name){
	let fortune = Math.floor(Math.random()*10);


	const name_div = document.getElementById("name");
	const text_div = document.getElementById("text");
	name_div.innerHTML = name
	text_div.innerHTML = ", quote for today is '"+quote[fortune]+"'";
	restyle(name_div,text_div);
}

