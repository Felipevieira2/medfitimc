import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const [nome, setNome ] = React.useState(''); 
  const [phone, setPhone ] = React.useState('');
  const [altura, setAltura ] = React.useState('');
  const [peso, setPeso ] = React.useState('');
  const router = useRouter();

  useEffect(() => {
   
    if ( window.localStorage.getItem('lead') ){
      window.localStorage.removeItem('lead') 
    }   

  }, [])


  const onPressSubmit = (e) => {
    e.preventDefault();
    
    var imc = Number((peso.replace(',', '.') / (altura.replace(',', '.') * altura.replace(',', '.'))) ).toFixed(2);
    let textResult1;
    let textResult2;

    if( imc < 18.5 ) {
      textResult1 = "Infelizmente você está abaixo de seu peso.";
      textResult2 = "O seu peso deveria ser no mínimo 67 kg. Assim, para ganhar peso de forma saudável e sem ganhar barriga, você deve continuar praticando atividade física, aumentar o volume das refeições e comer a cada 3 horas. "
    }
    if( imc >= 18.5 && imc < 24.9 ) {
      textResult1 = "Parabens! Você está no seu peso ideal.";
      textResult2 = "De acordo com as informações passadas, o seu peso pode variar entre 67 kg e 90 kg. "
    }else if( imc >= 24.9  && imc <= 30 ) {
      textResult1 = "Infelizmente você está acima do peso.";
      textResult2 = "O seu peso ideal pode variar entre 67 kg e 90 kg por isso para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana, ingerindo 3035 calorias por dia"
    }else if( imc >= 30.0 && imc <= 34.9 ) {
      textResult1 = "Infelizmente você está com Obesidade";  
      textResult2 = "Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido."    
    }

    let newLead = { 
      nome,
      phone,
      altura,
      peso,
      imc,
      textResult1,
      textResult2
    };   

    window.localStorage.setItem('lead', JSON.stringify(newLead));
    
    router.push('/resultado');
  }

  return (
    <div className="p-4 bg-gradient-to-r from-blue-100">
      <Head>
        <title>IMC calculo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto md:px-14">
        <div className="items-center flex flex-wrap">
          <div className="p-4 inline-flex items-center justify-center w-full mb-16 shadow-sm  rounded-sm">
              <a href="https://medfitpaulista.com.br/" target="_blank">
                <img src="/imgs/logo.png" className="w-64"></img>
              </a>
          </div>
          <div className="md:w-12/12 lg:w-6/12 mx-auto">            
            <div className="md:pr-4">            
              <h1 className="text-5xl font-bold">Descubra seu IMC</h1>
              <h3 className="text-2xl mt-8 font-bold">Você sabe o seu peso ideal?</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">Entre muitos cuidados que devemos ter com nossa saúde e corpo, um deles é imprescindível: saber e manter o peso ideal. Sendo de grande importância para a promoção da saúde e prevenção de doenças.
                   Por isso, é importante conhecer seu Índice de Massa Corporal (IMC).</p>
              <h3 className="text-2xl mt-8 font-medium">Alguns benefícios para a saúde: </h3>
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
          {/* Form imc */}
          <div id="form" className="bg-white  md:w-6/12 mx-auto lg:w-4/12 md:6/12 shadow-md w-full ">
            <div className="py-8 px-8 rounded-xl">
              <h1 className="font-medium text-2xl mt-3 text-center">Calculadora IMC</h1>
              <form id="formIMC" action="/resultado" method="POST" className="mt-6">
                <div className="my-5 text-sm">
                  <label htmlFor="nome" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nome *</label>
                  <input type="text" autoFocus="" id="nome" 
                    onChange={(e) => { 
                      setNome(e.target.value);                                           
                     }}
                    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="Nome" />
                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Telefone *</label>
                  <input type="tel" id="phone" name="phone" maxLength="12"
                    onChange={(e) => {
                     
                      e.target.value = e.target.value.replace(/\D/g, ""); 
                      e.target.value = e.target.value.replace(/^(\d{2})(\d)/, "$1-$2")
                      setPhone(e.target.value); 
                    }}
                    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="Telefone"/>

                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="altura" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Altura (ex.: 1,70) *</label>
                  <input type="text" autoFocus="" id="altura" maxLength="4"
                    onChange={(e) => { 
                  
                      e.target.value = e.target.value.replace(/\D/g, "");
                      e.target.value = e.target.value.replace(/(\d)(\d{2})$/, "$1,$2");
                      e.target.value = e.target.value.replace(/(?=(\d{3})+(\D))\B/g, ".");
                      setAltura(e.target.value);
                    }}
                    required type="tel" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="Altura" />
                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="phone"
                   className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Peso (ex.: 69,2) *</label>
                  <input type="text" id="peso" maxLength="6"
                    onChange={(e) => {
                   
                 
                    e.target.value = e.target.value.replace(/\D/g, "");
                    e.target.value = e.target.value.replace(/(\d)(\d{2})$/, "$1,$2");
                    e.target.value = e.target.value.replace(/(?=(\d{3})+(\D))\B/g, "$1,$2");
                    setPeso(e.target.value);
                  }}
                    required type="tel" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    placeholder="peso" />
                </div>
                <button onClick={ (e) => {  onPressSubmit(e) } } type="button" className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Calcular</button>
              </form>
            </div>
          </div>
          {/* fim/end form imc */}
    
          
        </div>
        {/* part 2 site */}
        <div class="border-b-2 m-10 border-fuchsia-600"></div>
        <div className="items-center flex flex-wrap ">     
          <div className="md:w-12/12 lg:w-6/12 mx-auto">            
            <h2 className="mt-8 text-3xl font-bold">O QUE É O IMC?</h2>
            <p className="mt-8 text-lg leading-relaxed text-blueGray-500">O índice de massa corporal (IMC) é uma estimativa da gordura corporal com base na altura e no peso. Apesar de não medir a gordura corporal diretamente, a equação do IMC faz uma aproximação, indicando se a pessoa está com um peso insalubre ou saudável. </p>
            <p className="mt-8 text-lg leading-relaxed text-blueGray-500">Além de adotado pela OMS (Organização Mundial de Saúde), que é usado para o diagnóstico do baixo peso, sobrepeso e da obesidade. 
                  O IMC pode ser facilmente calculado a partir de dois simples dados: peso e altura. A fórmula é simples:
            </p>  
            <div className="shadow-inner mt-12 bg-gray-200 p-4">IMC = peso (em quilos) ÷ altura² (em metros)</div>        
   
          </div>
          {/* Form imc */}
     
          <div className="md:w-12/12 lg:w-4/12 mx-auto mt-16">
            <img className="max-w-full rounded-lg shadow-lg" src="/imgs/imc.jpg"></img>
          </div>
          {/* fim/end form imc */}
    
          
        </div>
      </div>
    </div>
  )
}
