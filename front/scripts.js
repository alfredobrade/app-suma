const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const boton = document.getElementById("botonsito")
const result = document.getElementById("result")



boton.addEventListener("click", e => {
    


    //const re = (Number(num1.value)+Number(num2.value))
    fetch("http://localhost:5108/calculos",  {
        method:"POST",
        body:{
            Np:Number(num1.value),
            Ns:Number(num2.value),
            Resultado:0
        },        mode:"no-cors"
    
        }).then(res => res.json())
        .then(data => console.log(data)).catch(error => console.log(error))



    //result.innerText = `La suma es ${re} pee`

} );

console.log(num1);