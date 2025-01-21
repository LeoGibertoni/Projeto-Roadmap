document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("texto");
    const contador = document.getElementById("contador");

    textarea.addEventListener("input", () => {
        const caracteresUsados = textarea.value.length;
        const limite = 250;

        // Atualiza o contador
        contador.textContent = `${caracteresUsados}/${limite}`;

        // Verifica se ultrapassou o limite de caracteres
        if (caracteresUsados > limite) {
            textarea.classList.add("error");
            contador.classList.add("error");
        } else {
            textarea.classList.remove("error");
            contador.classList.remove("error");
        }
    });
});
