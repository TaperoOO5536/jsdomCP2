const root = document.querySelector("#root");

cats.forEach((elem) => {
  const cat = document.createElement("div");
  const catImage = document.createElement("img");
  const description = document.createElement("div");
  const catName = document.createElement("p");
  const catAge = document.createElement("p");
  const catDescription = document.createElement("p");
  const rateFavDiv = document.createElement("div");
  const favourite = document.createElement("img");
  const rate = document.createElement("p");
  catImage.src = elem.img_link;
  catAge.innerText = `Возраст: ${elem.age}`;
  catDescription.innerText = elem.description;
  catName.innerText = elem.name;
  catImage.className = "catImage";
  cat.className = "catCard";
  description.className = "description";
  catName.className = "catName";
  favourite.className = "heart";
  rateFavDiv.className = "rateFavDiv";
  rate.innerHTML = `Рейтинг котика: ${elem.rate} из 10`;
  if (elem.favourite) {
    favourite.src = "img/heart.png";
  } else {
    favourite.src = "img/heart-border.png";
  }
  if (elem.id % 2 == 1) {
    cat.classList.add("blueCard");
  } else {
    cat.classList.add("violetCard");
  }
  rateFavDiv.append(rate, favourite);
  description.append(catAge, catDescription, rateFavDiv);
  cat.append(catName, catImage, description);
  root.append(cat);
});

// function colorStar(rate) {}
