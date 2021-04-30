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
          <div className="p-2 inline-flex items-center justify-center w-full mb-2 shadow-sm  rounded-sm">
              <a href="https://medfitpaulista.com.br/" target="_blank">
                <img src="/imgs/logo.png" className="w-64"></img>
              </a>
          </div>
          <div className="inline-flex items-center justify-center w-full mb-6">    
          <h1 className="text-5xl font-bold text-center">Descubra seu peso ideal.</h1></div>
      
          {/* Form imc */}
          <div id="form" className="bg-blue-50 md:w-6/12 mx-auto lg:w-4/12 md:6/12 shadow-md w-full ">
            
            <div className="py-8 px-8 rounded-xl">
              <h1 className="font-medium text-3xl text-center">Calcule o seu IMC</h1>
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
          <div className="md:w-12/12 lg:w-6/12 mt-6 mx-auto">            
            <div className="md:pr-1">            
              
              <h3 className="text-3xl font-bold">Você sabe qual é o seu peso ideal?</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">Entre muitos cuidados que devemos ter com nossa saúde e corpo, um deles é imprescindível: saber e manter o peso ideal. Sendo de grande importância para a promoção da saúde e prevenção de doenças.
                   Por isso, é importante conhecer seu Índice de Massa Corporal (IMC).</p>
             
              
              {/* Lista de beneficios */}
              
               
                
                <div className="md:w-12/12 mt-10 mx-auto my-auto">
                  <img className="max-w-full rounded-lg shadow-lg" src="/imgs/imc.jpg"></img>
                </div>
           
             

            </div>
          </div>
        </div>
        {/* part 2 site */}
        <div className="border-b-2 m-10 border-fuchsia-600"></div>
        <div className="items-center flex flex-wrap ">     
          
          {/* Form imc */}
     
        
          {/* fim/end form imc */}
    
          
        </div>
      </div>
    </div>
  )
}
