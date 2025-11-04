
 let main=document.querySelector('.main');
 let count=document.querySelector('.count');
 let aa=document.querySelector('.nav-cartbtn');
 let cartpage=document.querySelector('#cart');
 cartpage.style.display='none';
 let cartitem=document.querySelector('#cart-item');

//  count.innerText='dshd';
//  let container=document.createElement('div');
//  container.className='container';
//  main.appendChild(container);
let i=0;
let arr=[];
let cart=[];
let a = async () => {
  let res = await fetch('https://fakestoreapi.com/products'); // fetch returns a Promise
   data = await res.json();
   data.map((a)=>{
    arr.push(a);
   card(a)
   })
}
  a();
  
function card(a){
 let container=document.createElement('div');
 container.className='container';
 main.appendChild(container);
 let img=document.createElement('img');
 img.src=a.image;
 let name=document.createElement('p');
//  console.log(a.title.length)
 if(a.title.length>18) name.innerText=a.title.substring(0,18)+'...';
 else name.innerText=a.title;
 let price=document.createElement('h4');
 price.innerText='Rs '+a.price;
 let cart=document.createElement('button');
 cart.id=i++;
 cart.innerText='add to cart';
 let cartnode=[];
cartnode.push(cart);
 container.appendChild(img);
 container.appendChild(name);
 container.appendChild(price);
 container.appendChild(cart);
 cart.addEventListener('click',()=>{
  cartnode.map((a)=>{
    cartbtn(a);
  })
 })
}
function cartbtn(a){
  // console.dir(a);
  a.innerText=='add to cart'?addProduct(a.id):removeProduct(a.id);
  a.innerText=='added'?a.innerText='add to cart':a.innerText='added';
  a.innerText=='added'?a.style.backgroundColor='rgb(91, 221, 130)':a.style.backgroundColor='rgb(167, 231, 209)';
  
}
function addProduct(aid){
 cart.push(arr[aid]);
//  console.log(cart);
count.innerText='cart('+cart.length+')';
// update();
// alert('product added to cart');
}
function removeProduct(aid){
  let i=0;
   let n=parseInt(aid)+1;
  //  console.log('aid='+n);
  for(;i<cart.length;i++){
    if(cart[i].id==n){
      // console.log(cart[i].id);
      // console.log('i='+i);
      cart.splice(i,1);
      count.innerText='cart('+cart.length+')';
         console.log(cart);
      //  update();
      break;

    }
  }
  // console.log(i);
  // console.log('removed');
}

aa.addEventListener('click',()=>{
 if(cartpage.className!='cartpage'){
    count.innerText='home';
   main.style.opacity='0';
   cartpage.style.display='block';
   cartpage.className='cartpage';
   cartItemBuild();
  }
  else{
    count.innerText='cart('+cart.length+')';
    cartpage.className='';
    main.style.opacity='1';
    cartpage.style.display='none';
 }
})

function cartUpdate(){
  cartitem.innerHTML='';
  cart.map((a)=>{
  cartItemBuild(a);
})}
function cartItemBuild(a){
  if(cart.length==0){
    cartitem.innerHTML="<h2>No items available</h2>";
  }
  else{
 let cartmain=document.createElement('div');
 cartmain.innerHTML='<div>'+a.title+'</div><h3>Rs '+a.price+'</h3><div><img src="'+a.image+'"></div><button id='+a.id+' class=removebtn >remove</button>';
  cartitem.appendChild(cartmain);
}}

cartitem.addEventListener('click',(e)=>{
  let aid=e.target.id;
  removeProduct(aid-1);
  e.target.parentElement.remove();
 if(cart.length==0)cartItemBuild();
})




