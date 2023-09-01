import nav from "../components/nav.js";
document.getElementById("tatacliq").innerHTML = nav()


const display = (data) => {
  const box = document.getElementById("box");
  box.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("main-box");
    div.style.padding = "30px"
    div.style.border = "1px solid gray"

    const image = document.createElement("img");
    image.src = item.image;
    image.style.width = "400px"
    image.style.height = "450px"

    const title = document.createElement("h3");
    title.textContent = item.title;
    title.style.fontSize="30px"
    title.style.fontWeight="semibold"

    const description = document.createElement("h3");
    description.textContent = item.description;
    description.style.fontSize="20px"

    const catagory = document.createElement("h3");
    catagory.textContent = item.catagory;
    catagory.style.fontSize="30px"

    const price = document.createElement("h3");
    price.textContent = `${item.price}$`;
    price.style.fontSize="25px"

    const rating = document.createElement("h4");
    rating.textContent = "* ".repeat(item.rating.rate);

    if (item.rating.rate > 4) {
      rating.innerHTML = "* * * * *"
      rating.style.color = "green"
      rating.style.fontSize="30px"

    }
    else if (item.rating.rate <= 4 && item.rating.rate >= 3) {
      rating.innerHTML = "* * * *"
      rating.style.color = "chocolate"
      rating.style.fontSize="30px"
    }
    else {
      rating.innerHTML = "* *"
      rating.style.color = "red"
      rating.style.fontSize="30px"

    }

    const btn1 = document.createElement("button");
    btn1.textContent = "Add to Cart";
    btn1.classList.add("btn1");
    div.append(image, title, description, catagory, price, rating, btn1);
    box.appendChild(div);

    btn1.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let exists = false;

      cart.forEach((cartItem, index) => {
        if (cartItem.id === item.id) {
          cart[index].qty += 1;
          exists = true;
        }
      });

      if (!exists) {
        cart.push({ ...item, qty: 1 });
        alert("Product was added Successfully");
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
};

let products = [];
document.getElementById("lth").addEventListener("click", () => {
  products.sort((a, b) => a.price - b.price);
  display(products);
});

document.getElementById("htl").addEventListener("click", () => {
  products.sort((a, b) => b.price - a.price);
  display(products);
});


document.getElementById("man").addEventListener("click", () => {
  const temp = products.filter((val) => val.title === "men");
  display(temp);
});

document.getElementById("woman").addEventListener("click", () => {
  const temp = products.filter((val) => val.title === "women");
  display(temp);
});

document.getElementById("kids").addEventListener("click", () => {
  const temp = products.filter((val) => val.title === "kids");
  display(temp);
});

document.getElementById("beauty").addEventListener("click", () => {
  const temp = products.filter((val) => val.title === "beauty");
  display(temp);
});

document.getElementById("jewellery").addEventListener("click", () => {
  const temp = products.filter((val) => val.title === "jewellery");
  display(temp);
});


document.getElementById("searchButton").addEventListener("click", () => {
  let searchTerm = document.getElementById("searchInput").value.toLowerCase();

  let filteredData = products.filter((val) => val.category.toLowerCase().includes(searchTerm));
  display(filteredData);
});

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    display(data);
  });

const get = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      display(data);
    });
};

get();
