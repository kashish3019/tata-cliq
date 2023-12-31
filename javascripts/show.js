import nav, { foot } from "../components/nav.js";

document.getElementById("tatacliq").innerHTML = nav();
document.getElementById("footer").innerHTML = foot();

let pages = JSON.parse(localStorage.getItem("productDetails"));

const datas=(data)=>{

    document.getElementById("imagebox").src=`${data.image}`;

    document.getElementById("i1").src=`${data.images.img1}`;
    document.getElementById("i2").src=`${data.images.img2}`;
    document.getElementById("i3").src=`${data.images.img3}`;
    document.getElementById("i4").src=`${data.images.img4}`;
    document.getElementById("i5").src=`${data.images.img5}`;

    document.getElementById("titles").innerHTML=`${data.title}`;
    document.getElementById("rate").innerHTML=`${data.rating.rate}`;
    // document.getElementById("ver").innerHTML=`${data.rating.count}`;
    document.getElementById("prices").innerHTML=`₹ ${data.price}`;
    document.getElementById("cat").innerHTML=`${data.catagory }`;
    document.getElementById("descri").innerHTML=`${data.description}`;

    document.getElementById("add").addEventListener("click", () => {
        console.log(data.id)
        let loggin = localStorage.getItem("loggin")
        if (loggin) {
            fetch(`http://localhost:3000/cart?id=${data.id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        fetch(`http://localhost:3000/cart/${data.id}`, {
                            method: "PATCH",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ Qty: data[0].Qty + 1 }),
                        });
                        console.log(data.length)
                    }
                    else{
                         fetch(`http://localhost:3000/cart`,{
                             method : "POST",
                             headers : {"Content-Type": "application/json"},
                             body : JSON.stringify({...pages , Qty : 1})
                         })
                    }
                })
        }
        else {
            alert("you have to loggin first")
            setTimeout(() => {
                window.location.href = "/pages/login.html"
            }, 1000)
        }
    })
};

datas(pages); 

