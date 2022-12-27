var btnPlus = document.querySelectorAll('.plus')
var inputV =document.querySelectorAll('.inputV')
var btnMoin = document.querySelectorAll('.moin')
var total =document.querySelector('.sum')
var price =document.querySelectorAll('.price')
var dlt =document.querySelectorAll('.delete')
var heart=document.querySelectorAll('.heart')

//incrementing

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click', ()=> {
        var inputV =document.querySelectorAll('.inputV')
        inputV[i].value= parseInt(inputV[i].value) +1
        total.value = +total.value + +price[i].value
    }) 
    
}
//decrementing 

for (let i = 0; i < btnMoin.length; i++) {
btnMoin[i].addEventListener('click', ()=> {
    var inputV =document.querySelectorAll('.inputV')
    if (parseInt(inputV[i].value)>0){
    inputV[i].value= parseInt(inputV[i].value) -1
    total.value = +total.value - +price[i].value
    }
    else{
        parseInt(inputV.value)=0
    }
})}
//remove option
for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener ('click',()=>{
        dlt[i].parentElement.remove();
        total.value = +total.value - inputV[i].value*+price[i].value
    })
    
    
}
//heart option
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', ()=>{
        if (heart[i].style.color!='red'){
        heart[i].style.color='red'
        }
        else{
            heart[i].style.color='black'   
        }

    })
 
    
}
