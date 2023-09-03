import nav, { foot } from "../components/nav.js";
document.getElementById("tatacliq").innerHTML = nav()
document.getElementById("footer").innerHTML = foot()
let products = [];
let id = 1;
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
    title.style.fontSize = "30px"
    title.style.fontWeight = "semibold"

    const description = document.createElement("h4");
    description.textContent = item.description;
    description.style.fontSize = "20px"

    const catagory = document.createElement("h5");
    catagory.textContent = item.catagory;
    catagory.style.fontSize = "30px"

    const price = document.createElement("h6");
    price.textContent = `${item.price}$`;

    const rating = document.createElement("h4");
    rating.textContent = "* ".repeat(item.rating.rate);

    if (item.rating.rate > 4) {
      rating.innerHTML = "* * * * *"
      rating.style.color = "green"
      rating.style.fontSize = "30px"

    }
    else if (item.rating.rate <= 4 && item.rating.rate >= 3) {
      rating.innerHTML = "* * * *"
      rating.style.color = "chocolate"
      rating.style.fontSize = "30px"
    }
    else {
      rating.innerHTML = "* *"
      rating.style.color = "red"
      rating.style.fontSize = "30px"

    }

    const btn1 = document.createElement("button");
    btn1.textContent = "ADD TO CART";
    btn1.classList.add("btn1");


    let btn2 = document.createElement('Button');
    btn2.innerHTML = "VIEW DETAILS";
    btn2.setAttribute('class', 'btn');

    btn2.addEventListener("click", () => {
      id = item.id;
      console.log(id);
      fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem("productDetails", JSON.stringify(data));
          window.location.href = "/pages/show.html";
        })

    })
    div.append(image, title, description, catagory, price, rating, btn1, btn2);
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
        alert("This Item has been added to your bag");
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
};




let currentCategory = "all";

const enableSortingButtons = () => {
  document.getElementById("lth").style.display = "block";
  document.getElementById("htl").style.display = "block";
};

const disableSortingButtons = () => {
  document.getElementById("lth").style.display = "none";
  document.getElementById("htl").style.display = "none";
};

const filterAndDisplayCategory = (category) => {
  if (category === "all") {
    display(products);
    disableSortingButtons();
  } else {
    const temp = products.filter((val) => val.title.toLowerCase() === category);
    display(temp);
    enableSortingButtons();
  }
};

document.getElementById("lth").addEventListener("click", () => {
  if (currentCategory !== "all") {
    const temp = products.filter((val) => val.title.toLowerCase() === currentCategory);
    temp.sort((a, b) => a.price - b.price);
    display(temp);
  }
});

document.getElementById("htl").addEventListener("click", () => {
  if (currentCategory !== "all") {
    const temp = products.filter((val) => val.title.toLowerCase() === currentCategory);
    temp.sort((a, b) => b.price - a.price);
    display(temp);
  }
});

document.getElementById("man").addEventListener("click", () => {
  currentCategory = "men";
  filterAndDisplayCategory(currentCategory);
  enableSortingButtons();
});

document.getElementById("woman").addEventListener("click", () => {
  currentCategory = "women";
  filterAndDisplayCategory(currentCategory);
  enableSortingButtons();
});

document.getElementById("kids").addEventListener("click", () => {
  currentCategory = "kids";
  filterAndDisplayCategory(currentCategory);
  enableSortingButtons();
});

document.getElementById("beauty").addEventListener("click", () => {
  currentCategory = "beauty";
  filterAndDisplayCategory(currentCategory);
  enableSortingButtons();
});

document.getElementById("jewellery").addEventListener("click", () => {
  currentCategory = "jewellery";
  filterAndDisplayCategory(currentCategory);
  enableSortingButtons();
});

const filterAndDisplaySearchResults = (searchTerm) => {
  const filteredData = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  display(filteredData);
};

document.getElementById("searchButton").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchInput").value;
  filterAndDisplaySearchResults(searchTerm);
});

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    display(products);
  });

const get = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      display(data);
    });
};

get();
