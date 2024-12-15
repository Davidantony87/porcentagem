import { useState } from 'react';

export default function FormCalculo() {
    const [resultado, setResultado] = useState(null);
    const [totalComDesconto, setTotalComDesconto] = useState(null);

    const calcularPorcentagem = () => {
        const valor = parseFloat(document.getElementById('valor').value);
        const porcentagem = parseFloat(document.getElementById('porcentagem').value);

        const mensagemErro = document.getElementById('mensagem-erro');
        mensagemErro.classList.add('hidden')

        if (isNaN(valor) || isNaN(porcentagem)) {
            mensagemErro.classList.remove('hidden')
            return;
        }

        const valorPorcentagem = (valor * porcentagem) / 100;
        const valorComDesconto = valor - valorPorcentagem;

        setResultado(valorPorcentagem);
        setTotalComDesconto(valorComDesconto);
    };

    const limparResultados = () => {
        setResultado(null);
        setTotalComDesconto(null);
        document.getElementById('valor').value = '';
        document.getElementById('porcentagem').value = '';
    };

    return (
        <div id='app' className="min-h-screen flex items-center justify-center bg-gray-100">
            <div id='calculo' className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4">
                <h1 className='text-center font-bold text-xl'>Cálculo de Porcentagem</h1>
                <input
                    type="number"
                    name="valor"
                    id="valor"
                    placeholder="Insira o valor"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="number"
                    name="porcentagem"
                    id="porcentagem"
                    placeholder="Insira a %"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="button"
                    value="Calcular"
                    id="botao-calculo"
                    className="bg-green-700 text-white font-semibold p-3 rounded-md hover:bg-green-800 cursor-pointer transition-all"
                    onClick={calcularPorcentagem}
                />
                <p id='mensagem-erro' className='text-red-600 font-semibold hidden'>Por favor, insira valores válidos.</p>

                {resultado !== null && totalComDesconto !== null && (
                    <div className="text-center mt-4 p-3 bg-green-100 text-green-700 font-medium rounded-md space-y-2">
                        <p>%: R${resultado.toFixed(2)}</p>
                        <p>Total - %: R${totalComDesconto.toFixed(2)}</p>
                        <button
                            onClick={limparResultados}
                            className="font-semibold p-1 rounded-md underline hover:text-green-950 transition-all"
                        >
                            Limpar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
