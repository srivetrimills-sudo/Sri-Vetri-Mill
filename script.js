const items=[
{name:"Chilli Powder 500g",price:200},
{name:"Chilli Powder 1kg",price:400},
{name:"Coriander Powder 500g",price:125},
{name:"Coriander Powder 1kg",price:250},
{name:"Turmeric Powder 500g",price:200},
{name:"Turmeric Powder 1kg",price:400},
{name:"Cumin Powder 500g",price:490},
{name:"Cumin Powder 1kg",price:980},
{name:"Fennel Powder 500g",price:200},
{name:"Fennel Powder 1kg",price:400},
{name:"Mixed Masala 500g",price:200},
{name:"Mixed Masala 1kg",price:400}
];
let cart=[];
const p=document.getElementById("products");
items.forEach((i)=>{
 const d=document.createElement("div");
 d.className="card";
 d.innerHTML=`<h3>${i.name}</h3><p>₹${i.price}</p><button>Add to Cart</button>`;
 d.querySelector("button").onclick=()=>{cart.push(i);update();};
 p.appendChild(d);
});
function update(){
 document.getElementById("total").innerText=cart.reduce((a,b)=>a+b.price,0);
}
function orderWhatsApp(){
 let msg="Hello Selvi Masala,%0A%0AOrder Details:%0A";
 cart.forEach(i=>msg+=`${i.name} - ₹${i.price}%0A`);
 msg+=`%0ATotal: ₹${cart.reduce((a,b)=>a+b.price,0)}`;
 window.open(`https://wa.me/919566700910?text=${msg}`,"_blank");
}
