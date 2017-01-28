var items = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, imageSrc: "images/fingerToothbrush.jpg"}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57, imageSrc: "images/barryManilow.jpg"}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, imageSrc: "images/ramenOreos.jpg"}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, imageSrc: "images/woofWasher.jpg"}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, imageSrc: "images/saunaPants.jpg"}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, imageSrc: "images/bodyPillow.jpg"}];

var sum = 0;

for (var i = 0; i < items.length; i++) {

	sum += items[i].price;

	var productImage =document.createElement("img");
	productImage.src = items[i].imageSrc;

	var productName = document.createElement("p");
	productName.innerHTML = items[i].product;

	var productDescription = document.createElement("p");
	productDescription.innerHTML = items[i].description;

	var productPrice = document.createElement("p");
	productPrice.innerHTML = "$" + items[i].price.toString();

	container.appendChild(productImage);
	container.appendChild(productName);
	container.appendChild(productDescription);
	container.appendChild(productPrice);

}

var subtotal = document.createElement("p");
subtotal.innerHTML = "$" + sum;

container.appendChild(subtotal);

console.log(sum);
