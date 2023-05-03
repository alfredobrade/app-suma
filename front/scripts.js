const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const boton = document.getElementById("botonsito")
const result = document.getElementById("result")



boton.addEventListener("mousedown", async () => {

    try {
        //const re = (Number(num1.value)+Number(num2.value))
        const data = {
            Np: Number(num1.value),
            Ns: Number(num2.value),
            Resultado: 0
        }

        let res = await fetch("http://localhost:5108/calculos", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "no-cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            // redirect: "follow", // manual, *follow, error
            // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        let resultado = await res.json();

        console.log(resultado)



        //result.innerText = `La suma es ${re} pee`
    } catch (err) {
        console.log(err)
    }



});

console.log(num1);