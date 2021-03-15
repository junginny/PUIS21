function MyAnimal(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A description of my animal”;
  this.image = “<img src ='week7_lab/rabbit.png'>”;
}

var animal = ["rabbit", "seal", "giraffe"];
var newname = ["zoorabbit", "zooseal", "zoogiraffe"];

generateRandomIndex(maxIndex) {
	Math.floor(Math.random() * maxIndex);
}

generateRandomAge() {
	console.log(this.age);
}

generateRandomAnimal() {
	console.log(this.name);
}

function onLoad() {
	var animal = generateRandomAnimal();
}

