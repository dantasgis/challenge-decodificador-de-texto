function codificar() {
    const texto = document.getElementById('texto').value.toLowerCase().replace(/[^a-z]/g, '');
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const char = texto.charCodeAt(i) - 97;
        const novoChar = (char + 13) % 26 + 97;
        resultado += String.fromCharCode(novoChar);
    }

    document.getElementById('resultado').value = resultado;
}

function decodificar() {
    const texto = document.getElementById('texto').value.toLowerCase().replace(/[^a-z]/g, '');
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const char = texto.charCodeAt(i) - 97;
        const novoChar = (char + 13) % 26 + 97; // Inverte a lógica da codificação
        resultado += String.fromCharCode(novoChar);
    }

    document.getElementById('resultado').value = resultado;
}