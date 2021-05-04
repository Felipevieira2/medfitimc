import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function Home() {
  const [nome, setNome ] = React.useState(''); 
  const [nomeError, setNomeError ] = React.useState({error: false, msg: ''}); 
  const [phone, setPhone ] = React.useState('');
  const [phoneError, setPhoneError ] = React.useState({error: false, msg: ''}); 
  const [altura, setAltura ] = React.useState('');
  const [alturaError, setAlturaError ] = React.useState({error: false, msg: ''}); 
  const [peso, setPeso ] = React.useState('');
  const [pesoError, setPesoError ] = React.useState({error: false, msg: ''}); 
  const router = useRouter();

  useEffect(() => {
    setNomeError({error: false, msg: ''});
    setPhoneError({error: false, msg: ''});
    setAlturaError({error: false, msg: ''});
    setPesoError({error: false, msg: ''});

    if ( window.localStorage.getItem('lead') ){
      window.localStorage.removeItem('lead') 
    }   

  }, [nome, phone, altura, peso])

  const postLead =  async (lead) => {
    let url = "https://medfit.bitrix24.com.br/rest/1/jv899bxkerqprws2/crm.lead.add" 	
    let params = `?FIELDS[TITLE]=${lead.nome}   
    &FIELDS[PHONE][0][VALUE]=${lead.phone}
    &FIELDS[UF_CRM_1587994360221]=${'Lead IMC'}
    &FIELDS[SOURCE_ID]=WEB`

    axios({
      method: "get",
      url: url+params,
      data: null,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });

  }

  const onPressSubmit = async (e) => {
    e.preventDefault();
    console.log(Number(altura) )
    if ( nome == "" || nome.match(/\d+/g) ) {
      setNomeError({error: true, msg: 'Nome informado inválido'});
      return 
    }

    if ( phone == "" || phone.substring(3).match(/^[A-Za-z]+$/) || phone.substring(3).length < 8) {
      setPhoneError({error: true, msg: 'Telefone informado inválido'});
      return 
    }

    if ( altura == "" || Number(altura) <= 0 ) {
      setAlturaError({error: true, msg: 'Altura informado inválido'});
      return 
    }

    if ( peso == "" || Number(peso) <= 0 ) {
      setPesoError({error: true, msg: 'Peso informado inválido'});
      return 
    }


    var imc = Number((peso.replace(',', '.') / (altura.replace(',', '.') * altura.replace(',', '.'))) ).toFixed(2);
    let textResult1 = '';
    let textResult2 = '';
    let result = '';

    if( imc < 18.5 ) {
      result = 0;
      //textResult1 = "Infelizmente você está abaixo de seu peso.";
      // textResult2 = "O seu peso deveria ser no mínimo 67 kg. Assim, para ganhar peso de forma saudável e sem ganhar barriga, você deve continuar praticando atividade física, aumentar o volume das refeições e comer a cada 3 horas. "
    }
    if( imc >= 18.5 && imc <= 24.9 ) {
      result = 1;
      // textResult1 = "Parabens! Você está no seu peso ideal.";
      // textResult2 = "De acordo com as informações passadas, o seu peso pode variar entre 67 kg e 90 kg. "
    }else if( imc >= 25  && imc <= 29.9 ) {
      result = 2;
      // textResult1 = "Infelizmente você está acima do peso.";
      // textResult2 = "O seu peso ideal pode variar entre 67 kg e 90 kg por isso para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana, ingerindo 3035 calorias por dia"
    }else if( imc >= 30.0 && imc <= 39.9 ) {
      result = 3;
      // textResult1 = "Infelizmente você está com Obesidade";  
      // textResult2 = "Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido."    
    }

    let newLead = { 
      nome,
      phone,
      altura,
      peso,
      imc,
      textResult1,
      textResult2,
      result
    };   

    await postLead(newLead);

    window.localStorage.setItem('lead', JSON.stringify(newLead));
    
    router.push('/resultado');
  }

  return (
    <div className="p-4 bg-gradient-to-r from-blue-100">
      <Head>
        <title>IMC calculo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
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
                  <label htmlFor="nome" className="block mb-2 text-sm text-gray-600 dark:text-gray-400 ">Nome *</label>
                  <input type="text" autoFocus="" id="nome" 
                    onChange={(e) => { 
                      setNome(e.target.value);                                           
                     }}

                    className={`w-full px-3 py-2 placeholder-gray-300 border ${nomeError.error ? 'border-red-600' : 'border-gray-300 '}  border-2rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`}
                    placeholder="Nome" />
                    <label htmlFor="nome" className="block mb-2 font-thin text-xs text-red-600 dark:text-gray-400 ">{nomeError.msg}</label>
                </div>
                <div className="my-5 text-sm">
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Telefone *</label>
                  <input type="tel" id="phone" name="phone" maxLength="12"
                    onChange={(e) => {
                     
                      e.target.value = e.target.value.replace(/\D/g, ""); 
                      e.target.value = e.target.value.replace(/^(\d{2})(\d)/, "$1-$2")
                      setPhone(e.target.value); 
                    }}
                    className={`w-full px-3 py-2 placeholder-gray-300 border ${phoneError.error ? 'border-red-600' : 'border-gray-300 '}  border-2rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`}
                    placeholder="Telefone"/>
                    <label  className="block mb-2 font-thin text-xs text-red-600 dark:text-gray-400 ">{phoneError.msg}</label>
                </div>
                <div className="text-sm">
                  <label htmlFor="altura" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Altura (ex.: 1,70) *</label>
                  <input type="text" autoFocus="" id="altura" maxLength="4"
                    onChange={(e) => { 
                  
                      e.target.value = e.target.value.replace(/\D/g, "");
                      e.target.value = e.target.value.replace(/(\d)(\d{2})$/, "$1,$2");
                      e.target.value = e.target.value.replace(/(?=(\d{3})+(\D))\B/g, ".");
                      setAltura(e.target.value);
                    }}
                    type="tel" className={`w-full px-3 py-2 placeholder-gray-300 border ${alturaError.error ? 'border-red-600' : 'border-gray-300 '}  border-2rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`}
                    placeholder="Altura" />
                    <label  className="block mb-2 font-thin text-xs text-red-600 dark:text-gray-400 ">{alturaError.msg}</label>
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
                    type="tel" className={`w-full px-3 py-2 placeholder-gray-300 border ${pesoError.error ? 'border-red-600' : 'border-gray-300 '}  border-2rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`}
                    placeholder="Altura" />
                    <label  className="block mb-2 font-thin text-xs text-red-600 dark:text-gray-400 ">{pesoError.msg}</label>
                </div>
                <button onClick={ 
                  (e) => { onPressSubmit(e) } 
                  } type="button" className="block text-center text-white bg-gray-800 p-3 mt-12 duration-300 rounded-sm hover:bg-black w-full">
                  Calcular
                </button>
              </form>
              <div className="flex justify-end mt-8 w-full  rounded-xl ">              
                <a className="link mr-6" target="_blank" href="https://www.facebook.com/medfitpaulista/" data-tippy-content="@facebook_handle">
                  <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
                </svg>
                </a>
                <a className="link mr-6" target="_blank" href="https://www.instagram.com/medfitclinica/" data-tippy-content="@instagram_handle">
                  <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* fim/end form imc */}
          
          <div className="md:w-12/12 lg:w-6/12  mx-auto">            
            <div className="mt-7 ">                          
              <h3 className="text-3xl font-bold">Você sabe qual é o seu peso ideal?</h3>
              <p className="mt-3 text-lg leading-relaxed text-blueGray-500">Entre muitos cuidados que devemos ter com nossa saúde e corpo, um deles é imprescindível: saber e manter o peso ideal. Sendo de grande importância para a promoção da saúde e prevenção de doenças.
                   Por isso, é importante conhecer seu Índice de Massa Corporal (IMC).</p>                           
              {/* Lista de beneficios */}
                <div className="md:w-12/12 mt-6 mx-auto my-auto">
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
