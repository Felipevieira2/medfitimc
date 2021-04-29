import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-100">
      <Head>
        <title>IMC calculo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-2">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 ml-auto mr-auto">
            <div className="md:pr-12">
              <div className="p-4 text-center inline-flex items-center justify-center w-64 mb-16 shadow-sm rounded-sm">
                <a href="https://medfitpaulista.com.br/" target="_blank">
                  <img src="/imgs/logo.png"></img>
                </a>
              </div>
              <h1 className="text-5xl font-bold">IMC</h1>
              <h3 className="text-2xl text-gray-700 mt-8 font-light">Você sabe o seu peso ideal?</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">Entre muitos cuidados que devemos ter com nossa saúde e corpo, um deles é imprescindível: saber e manter o peso ideal. Sendo de grande importância para a promoção da saúde e prevenção de doenças.
                   Por isso, é importante conhecer seu Índice de Massa Corporal (IMC).</p>
              <h3 className="text-2xl text-gray-700 mt-8 font-light">Alguns benefícios para a saúde: </h3>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                          className="fas fa-fingerprint"></i></span></div>
                    <div>
                      <h4 className="text-blueGray-500">Aumenta a disposição</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                        className="fab fa-html5"></i></span></div>
                    <div>
                      <h4 className="text-blueGray-500">Diminui o Risco de Diabetes</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div><span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3"><i
                        className="far fa-paper-plane"></i></span></div>
                    <div>
                      <h4 className="text-blueGray-500">Previne doenças cardiovasculares</h4>
                    </div>
                  </div>
                </li>
              </ul>

            </div>
          </div>

          <div className="w-full md:w-6/12 ml-auto mr-auto mt-8">
            <img className="max-w-full rounded-lg shadow-lg" src="/imgs/imc.jpg"></img>
          </div>
          <div className="mt-8 w-full md:w-9/12">
            <a href="#form" target="_self">
              <button className=" bg-blue-300 text-xl font-bold 
                      px-9 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 
                      transition-all duration-150"  type="button">Calcular IMC</button>
            </a>
          </div>
          <br></br>
         
          <div className="w-full md:w-6/12">
            <div className="md:pr-12">
              <h2 className="mt-8 text-3xl font-bold">O QUE É O IMC?</h2>
              <p className="mt-8 text-lg leading-relaxed text-blueGray-500">O índice de massa corporal (IMC) é uma estimativa da gordura corporal com base na altura e no peso. Apesar de não medir a gordura corporal diretamente, a equação do IMC faz uma aproximação, indicando se a pessoa está com um peso insalubre ou saudável. </p>
              <p className="mt-8 text-lg leading-relaxed text-blueGray-500">Além de adotado pela OMS (Organização Mundial de Saúde), que é usado para o diagnóstico do baixo peso, sobrepeso e da obesidade. 
              O IMC pode ser facilmente calculado a partir de dois simples dados: peso e altura. A fórmula é simples:
              </p>  
              <div className="shadow-inner mt-12 bg-gray-200 p-4">IMC = peso (em quilos) ÷ altura² (em metros)</div>        
            </div>
          </div>
          <div id="form" className="mt-24 bg-white sm:w-12/12 lg:w-4/12 md:7/12 shadow-md w-full  ml-auto mr-auto">
            <div className="py-8 px-8 rounded-xl">
              <h1 className="font-medium text-2xl mt-3 text-center">Calculadora IMC</h1>
              <form action="" className="mt-6">
                <div className="my-5 text-sm">
                  <label htmlFor="nome" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nome *</label>
                  <input type="text" autoFocus="" id="nome"
                    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="Nome" />
                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Telefone *</label>
                  <input type="tel" id="phone" name="phone"
                    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="Telefone" />

                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="altura" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Altura (ex.: 1,70) *</label>
                  <input type="text" autoFocus="" id="altura"
                    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="Altura" />
                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Peso (ex.: 69,2) *</label>
                  <input type="text" id="peso"
                    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="peso" />
                </div>

                <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Calcular</button>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
