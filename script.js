function calcularDesconto() {
    let preco = parseFloat(document.getElementById("preco").value);
    let desconto = parseFloat(document.getElementById("desconto").value);
    
    if (isNaN(preco) || isNaN(desconto)) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            if (preco < 0 || desconto < 0) {
                alert("Valores negativos não são permitidos!");
                return;
            }

            if (desconto > 100) {
                alert("O desconto não pode ser maior que 100%!");
                return;
            }

            let valorDesconto = preco * (desconto / 100);
            let precoFinal = preco - valorDesconto;

            console.log("Preço original: R$ " + preco.toFixed(2));
            console.log("Desconto: R$ " + valorDesconto.toFixed(2));
            console.log("Preço final: R$ " + precoFinal.toFixed(2));

            // Alert
            alert(
                "Preço original: R$ " + preco.toFixed(2) +
                "\nDesconto: R$ " + valorDesconto.toFixed(2) +
                "\nPreço final: R$ " + precoFinal.toFixed(2)
            );
}