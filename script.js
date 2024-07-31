class NumeroDivertido {
    constructor() {
        this.romanosDivertidos = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
    }

    converterParaRomano(diversaoReal) {
        let resultadoRomano = '';
        let valorRestante = diversaoReal;

        for (let letra in this.romanosDivertidos) {
            while (valorRestante >= this.romanosDivertidos[letra]) {
                resultadoRomano += letra;
                valorRestante -= this.romanosDivertidos[letra];
            }
        }

        return resultadoRomano;
    }

    converterParaReal(diversaoRomano) {
        let valorReal = 0;
        let i = 0;

        while (i < diversaoRomano.length) {
            const doisCaracteres = diversaoRomano.slice(i, i + 2);
            const umCaracter = diversaoRomano.slice(i, i + 1);

            if (this.romanosDivertidos[doisCaracteres]) {
                valorReal += this.romanosDivertidos[doisCaracteres];
                i += 2;
            } else {
                valorReal += this.romanosDivertidos[umCaracter];
                i += 1;
            }
        }

        return valorReal;
    }
}

const meuConversorDivertido = new NumeroDivertido();

function convertToRoman() {
    const numeroReal = document.getElementById('realNumber').value;
    const resultado = meuConversorDivertido.converterParaRomano(parseInt(numeroReal));
    document.getElementById('result').innerText = resultado;
}

function convertToReal() {
    const numeroRomano = document.getElementById('romanNumber').value.toUpperCase();
    const resultado = meuConversorDivertido.converterParaReal(numeroRomano);
    document.getElementById('result').innerText = resultado;
}
