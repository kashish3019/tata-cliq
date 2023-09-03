import nav, { foot } from "../components/nav.js";
document.getElementById("tatacliq").innerHTML = nav()
document.getElementById("footer").innerHTML = foot()

let pages = JSON.parse(localStorage.getItem("productDetails"));


const datas=(data)=>{

    document.getElementById("imagebox").src=`${data.image}`;

    document.getElementById("i1").src=`${data.images.image1}`;
    document.getElementById("i2").src=`${data.images.image2}`;
    document.getElementById("i3").src=`${data.images.image3}`;
    document.getElementById("i4").src=`${data.images.image4}`;
    document.getElementById("i5").src=`${data.images.image4}`;

    document.getElementById("titles").innerHTML=`${data.title}`;
    document.getElementById("rate").innerHTML=`${data.rating.rate}`;
    document.getElementById("ver").innerHTML=`${data.ratings.count}`;
    document.getElementById("prices").innerHTML=`₹ ${data.price}`;
    document.getElementById("prisess").innerHTML=`₹ ${data.pricesrong}`;
    document.getElementById("descri").innerHTML=`${data.description}`;
    document.getElementById("cat").innerHTML=`${data.category }`;

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












    
    // let cart =JSON.parse(localStorage.getItem("productDetails"))
    // console.log(cart);
    
    // const singledetails=(data)=>{
    //     document.getElementById("pimg").src=`${data.image}`;
    //     document.getElementById("image1").src=`${data.images.image1}`;
    //     document.getElementById("image2").src=`${data.images.image2}`;
    //     document.getElementById("image3").src=`${data.images.image3}`;
    //     document.getElementById("image4").src=`${data.images.image4}`;
    //     document.getElementById("ptitle").innerHTML=`${data.title}`
    //     document.getElementById("producttitle").innerHTML=`${data.unit}`
    //     document.getElementById("punit").innerHTML=`${data.unit}`
    //     document.getElementById("pcatagory").innerHTML=`${data.category}`
    //     document.getElementById("pprice").innerHTML=`${data.price}`
    
    //     let ut = document.getElementById("update")
    //     let toup = document.getElementById("toupdate")
    //     setInterval(() => {
    //         let update = new Date()
    //         update.setDate(update.getDate()+3)
    //         ut.innerHTML = update.toLocaleDateString()
    //     });
    //     setInterval(() => {
    //         let toupdate = new Date()
    //         toupdate.setDate(toupdate.getDate()+3)
    //         ut.innerHTML = toupdate.toLocaleDateString()
    //     }, 1000);
    
    //     document.getElementById("pdesc").innerHTML=`${data.description}`
    
    //     document.getElementById("addtocart").addEventListener("click",(e)=>{
    //         e.preventDefault()
    
    //         let login = localStorage.getItem("loggedIn")
    
    //         if(login){
    //             fetch(`http://localhost:3000/cart?id=${data.id}`)
    //             .then((res)=>res.json())
    //             .then((data)=>{
    //                 console.log(data);
    //                 if(data.length > 0){
    //                     alert("alert successfully")
    //                     console.log(data[0].qty);
    //                     data[0].qty = Number(data[0].qty) + 1;
    //                     console.log(data[0].qty);
    //                     fetch(`http://localhost:3000/cart/${data[0].id}`,{
    //                         method:"PATCH",
    //                         headers : {"Content-Type":"application/json"},
    //                         body : JSON.stringify(...data)
    //                     })
    //                 }
    //                 else{
    //                     alert("add to card post");
    //                     fetch(`http://localhost:3000/cart`,{
    //                         method:"POST",
    //                         headers : {"Content-Type":"application/json"},
    //                         body : JSON.stringify({...cart, qty : 1})
    //                     })
    //                 }
    //             })
    //         }
    //         else{
    //             alert("please Login 1st")
    //         }
    //     })
    
    // }
    
    // let mainImg = document.getElementById("pimg")
    // let smallImg = document.getElementById("smallImg")
    
    // smallImg[0].addEventListener("click",()=>{
    //     mainImg.src = smallImg[0].src
    // })
    // smallImg[1].addEventListener("click",()=>{
    //     mainImg.src = smallImg[1].src
    // })
    // smallImg[2].addEventListener("click",()=>{
    //     mainImg.src = smallImg[2].src
    // })
    // smallImg[3].addEventListener("click",()=>{
    //     mainImg.src = smallImg[3].src
    // })
    
    // singledetails(cart)
    
    
 