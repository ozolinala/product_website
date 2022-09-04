fetch("https://kea-alt-del.dk/t7/api/brands")
.then((res) => res.json())
.then(goThroughEach);

//forreach
function goThroughEach(data){
    data.forEach(showBrand);
}

//that function
function showBrand(oneBrand){
    //find the first letter
const firstLetter = oneBrand.brandname.charAt(0).toLowerCase();
console.log(`Im ${oneBrand.brandname} and my first letter is ${firstLetter} and my selector would be letter _${firstLetter}`)
    //do the usual stuff:

//grab the template
const template = document.querySelector("template").content;
//clone it
const myCopy = template.cloneNode(true);
//change some content
myCopy.querySelector("a").textContent = oneBrand.brandname;
myCopy.querySelector("a").href = `productspage.html?brandname=${oneBrand.brandname}`;
//find the correct parent

//find the parent
const parent = document.querySelector(`#letter_${firstLetter}`);
if (parent) {
    //append it
    parent.appendChild(myCopy);
}

}