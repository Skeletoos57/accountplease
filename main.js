function calculate() {

    var money = document.form.cashToPay.value;
    var tip = document.form.tipValue.value;
    var split = document.form.splitValue.value;

    var result = document.getElementById("response");

    if (money == "" || tip == "" || split == "") {
        alert("Porfavor, llene todos los campos");
    }else{
        if (tip >= 100) {

            alert("Una propina del 100% o mas no es valida.");

        }else{

            if (tip == "0") {
                if (split == 0) {
                    alert("No hay personas para repartir el precio.");
                }else{

                    var resultado = Number(money);

                    result.innerHTML = `
                        <p>Dinero   = ${money}</p>
                        <p>Division = ${money/Number(split)} cada persona (${split})</p>
                        <p>Propina  = Ninguna</p>
                        <p>---------------------------------------</p>
                        <p>Total    = ${resultado}</p>
                    `

                }
            }else{

                if (split == 0) {
                    alert("No hay personas para repartir el precio.");
                }else{

                    var realTip = Number("0." + tip)
                    var resultado = (Number(money) * realTip) + Number(money);

                    result.innerHTML = `
                        <p>Dinero = ${money}</p>
                        <p>Division = ${money/Number(split)} cada persona (${split})</p>
                        <p>Propina = ${tip}% de ${money}</p>
                        <p>---------------------------------------</p>
                        <p>Total = ${resultado}</p>
                    `
                }
            }
        }

    }

}
