import nav, { foot } from "../components/nav.js";
document.getElementById("tatacliq").innerHTML = nav();
document.getElementById("footer").innerHTML = foot();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;

let updateTotalPrice = () => {
  totalprice = cart.reduce((acc, ele) => acc + ele.price * ele.qty * 10, 0);
  document.getElementById("price").innerText = `Bag Total : $${totalprice.toFixed(2)}`
};

cart.map((ele) => {
  totalprice += ele.price * ele.qty * 10;
});

let show = (cart) => {
  cart.map((ele, index) => {
    let maindiv = document.createElement("div");
    maindiv.classList.add("maindiv"); 

    let imgdiv = document.createElement("div");
    imgdiv.classList.add("imgdiv");

    let image = document.createElement("img");
    image.src = ele.image;

    let texts = document.createElement("div");
    texts.classList.add("texts"); 

    let title = document.createElement("h3");
    title.innerHTML = ele.title;

    let catagory = document.createElement("h3");
    catagory.innerHTML = ele.catagory;

    let description = document.createElement("h3");
    description.innerHTML = ele.description;

    let minse = document.createElement("button");
    minse.innerHTML = "-";
    let noq = document.createElement("button");
    noq.innerHTML = ele.qty;
    let plus = document.createElement("button");
    plus.innerHTML = "+";

    let price1 = document.createElement("h3");
    price1.innerHTML = `${ele.price * 10}$`;

    let plusminse = document.createElement("div");
    plusminse.classList.add("plusminse"); 

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    deleteBtn.style.fontSize="20px"
    deleteBtn.classList.add("delete-button"); 

    imgdiv.append(image);
    texts.append(description, title, catagory, price1, plusminse, deleteBtn); 
    plusminse.append(minse, noq, plus);
    maindiv.append(imgdiv, texts,plusminse);
    document.getElementById("cartpage").append(maindiv);

    minse.addEventListener("click", () => {
      let qty = cart[index].qty;
      if (qty > 1) { // Only decrease quantity if it's greater than 1
        cart[index].qty -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        noq.innerHTML = cart[index].qty;
        updateTotalPrice();
      }
    });

    plus.addEventListener("click", () => {
      cart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      noq.innerHTML = cart[index].qty;
      updateTotalPrice();
    });

    
    deleteBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      maindiv.remove();
      updateTotalPrice();
    });
  });
};

let show2 = () => {
  let maindiv2 = document.createElement("div");
  maindiv2.classList.add("maindiv2");

  let lable = document.createElement("label");
  lable.innerHTML = "Coupon code:";

  let lable2 = document.createElement("label");
  lable2.innerHTML = "Bag Total:";

  let promocode = document.createElement("input");
  promocode.placeholder = "enter your promo code";
  promocode.setAttribute("class", "promocode");

  let disprice = document.createElement("h3");
  disprice.style.display = "none"; // Initially hide the discount

  let finalPriceElement = document.createElement("h4");
  finalPriceElement.style.display = "none"; // Initially hide the final price

  let apply = document.createElement("button");
  apply.innerHTML = "Apply";
  apply.setAttribute("class", "apply");

  maindiv2.append(lable, promocode, apply, disprice, finalPriceElement);
  document.getElementById("other").append(maindiv2);

  let priceElement = document.createElement("h3");
  priceElement.id = "price";
  document.getElementById("other").append(priceElement);

  maindiv2.setAttribute("class", "maindiv2");
  lable.setAttribute("class", "lable");

  let applyPromoCode = () => {
    const enteredCode = promocode.value.trim();
    if (enteredCode === "kashish3019") {
      const discount = (totalprice / 100) * 20;
      const discountedPrice = totalprice - discount;

      disprice.innerHTML = `Discount: $${discount.toFixed(2)}`;
      disprice.style.display = "block";

      finalPriceElement.innerHTML = `Total: $${discountedPrice.toFixed(2)}`;
      finalPriceElement.style.display = "block";
    } else {
      alert("Invalid promo code");
    }
  };

  apply.addEventListener("click", applyPromoCode);

  promocode.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      applyPromoCode();
    }
  });

  const placeOrderButton = document.createElement("button");
  placeOrderButton.innerHTML = "Checkout";
  placeOrderButton.setAttribute("class", "place-order-button");
  maindiv2.append(placeOrderButton);

  placeOrderButton.addEventListener("click", () => {
    alert("Order placed!");
  });
};

show2();

updateTotalPrice();

show(cart);
