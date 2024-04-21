const root = document.querySelector("#root");

cats.forEach((elem) => {
  const cat = document.createElement("div");
  const catImage = document.createElement("img");
  const description = document.createElement("div");
  const catName = document.createElement("p");
  const catAge = document.createElement("p");
  const catDescription = document.createElement("p");
  const star = document.createElement("div");
  catImage.src = elem.img_link;
  catAge.innerText = `Возраст: ${elem.age}`;
  catDescription.innerText = elem.description;
  catName.innerText = elem.name;
  catImage.className = "catImage";
  cat.className = "catCard";
  description.className = "description";
  catName.className = "catName";
  star.className = "star";
  if (elem.id % 2 == 1) {
    cat.classList.add("blueCard");
  } else {
    cat.classList.add("violetCard");
  }
  description.append(catAge, catDescription, star);
  cat.append(catName, catImage, description);
  root.append(cat);
});

function colorStar(rate) {}
