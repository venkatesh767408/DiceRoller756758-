const submit=document.getElementById('btn');

submit.onclick=function(){
    const input=document.getElementById('input');

    const numbers=document.getElementById('numbers');
    const images=document.getElementById('images');
    let values=[];
    let imgs=[];
    for(let i=0;i<input.value;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
         imgs.push(`<img src="images/dice${value}.png" alt="text">`);
        

    }
    numbers.textContent=`Dice values are: ${values.join(',')}`
    images.innerHTML=imgs.join('      ');
}