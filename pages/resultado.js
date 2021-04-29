import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react'


export default function Resultado() {
  const [lead, setLead] = React.useState('');
  const [textResult1, setTextResult1] = React.useState('');
  const [textResult2, setTextResult2] = React.useState('');
  const router = useRouter();
 
  React.useEffect(() => {
    // window is accessible here.
    setLead(JSON.parse(window.localStorage.getItem('lead')))
   
    if( !window.localStorage.getItem('lead') ) {
      router.push('/')
    }
  
    console.log(window.localStorage.getItem('lead'))
  }, []);

  const back = () => {
    router.push('/')
  }



  return (
    <div className="h-full w-full bg-gradient-to-r from-blue-100 absolute">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 items-center ml-auto mr-auto ">
          <div className="pr-12 border-solid border-gray-900">
            <div className="p-4 text-center inline-flex items-center justify-center w-64 mb-10 shadow-sm rounded-sm">
              <a href="https://medfitpaulista.com.br/" target="_blank">
                <img src="/imgs/logo.png"></img>
               
                </a>
            </div>
          </div> 
        </div>        
      </div>
      <div className="items-center flex flex-wrap">
        <div id="profile" className="w-full lg:w-2/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 ml-auto mr-auto ">
          <div className="p-8 text-center lg:text-left">                     
            <h1 className="text-4xl font-bold pt-8 lg:pt-0">{lead.nome}, o seu IMC é: {lead.imc}</h1>
            <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25"></div>
            
            <div className="flex flex-wrap">
              <div className='mt-12 font-medium'>
                <p className="font-thin">{lead.textResult1}</p><br></br>
                <p className="font-thin">{lead.textResult2}</p>
              </div>
              <table className="table-responsive mt-8 text-center w-full rounded">
                <thead>
                  <tr>
                  
                    <th className="border w-1/6 px-4 py-2 border-b bg-black text-white">Classificação</th>
                    <th className="border w-1/7 px-4 py-2 border-b bg-black text-white">IMC</th>
                    <th className="border px-4 py-2 border-b bg-black text-white">Peso</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2 text-md">Magreza</td>
                        <td className="border text-md">{'\< 18.5'}</td>
                        <td className="border text-md ">{'< 66.8 Kg'}</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2 text-md">Normal</td>
                        <td className="border text-md">18.5 a 24.9</td>
                        <td className="border text-md">66.8 a 89.9 Kg</td>
                    
                    </tr>                              
                    <tr>
                        <td className="border px-4 py-2 text-md">Sobrepeso</td>
                        <td className="border px-4 py-2 text-md">24.9 a 30</td>
                        <td className="border px-4 py-2 text-md">89.9 a 108.3 Kg</td>
                        
                    </tr>
                    <tr>
                        <td className="border px-4 py-2 text-md">Obesidade</td>
                        <td className="border px-4 py-2 text-md">{'> 30'}</td>
                        <td className="border px-4 py-2 text-md">{'> 108.3 Kg'}</td>    
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="mt-6 lg:pb-0  lg:w-full flex flex-wrap items-center">
            
              <div className="w-full flex justify-end mt-3">
                <button className=" bg-green-300 text-xl font-bold 
                  px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none 
                  transition-all duration-120 "  type="button" onClick={back}>Refazer calculo</button>
              
              </div>  
              <div className="w-full flex justify-end mt-7">
                <a className="link mr-6" target="_blank" href="https://www.facebook.com/medfitpaulista/" data-tippy-content="@facebook_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
                  </svg>
                </a>
                <a className="link" target="_blank" href="https://www.instagram.com/medfitclinica/" data-tippy-content="@instagram_handle">
                  <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </a> 
              </div>           
            </div>
        </div>
      </div>      
    </div>      
  </div>
  )
}
