const div1 =document.getElementById('first');
const div2 =document.getElementById('second');
const div3 =document.getElementById('third');


const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingField = document.getElementById('shipping');

const total = document.getElementById('total');

free.addEventListener('click', function(){
    shippingField.innerText = '5';
    updateTotal();
})
express.addEventListener('click', function(){
    shippingField.innerText = '30';
    updateTotal();
})

function updateTotal(){
    const shppingCharge = parseInt(shippingField.innerText);
    const totalPrice = parseInt(price.innerText);
    const grandTotal = shppingCharge + totalPrice;
    total.innerText = grandTotal;
}

div1.addEventListener('click', function(){
    img.src ='images/1.jpg';  
    desc.innerHTML = "first :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque fuga repellendus impedit odio saepe qui! Ea autem dolor excepturi atque aliquid optio sit veritatis.";
    price.innerText = '450$';
    updateTotal();
})

div2.addEventListener('click', function(){
    img.src ='images/2.jpg';
    desc.innerHTML = "Second :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque fuga repellendus impedit odio saepe qui! Ea autem dolor excepturi atque aliquid optio sit veritatis.";
    price.innerText = '750$';
    updateTotal();
})

div3.addEventListener('click', function(){
    img.src ='images/3.jpg';
    desc.innerHTML = "Third :- Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque fuga repellendus impedit odio saepe qui! Ea autem dolor excepturi atque aliquid optio sit veritatis.";
    price.innerText = '350$';
    updateTotal();
})