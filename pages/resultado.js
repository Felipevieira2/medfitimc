import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react'
import { faWhatsapp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Resultado() {
  const [lead, setLead] = React.useState('');
  const [textResult1, setTextResult1] = React.useState('');
  const [textResult2, setTextResult2] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {

    setLead(JSON.parse(window.localStorage.getItem('lead')))

    if (!window.localStorage.getItem('lead')) {
      router.push('/')
    }
    console.log(lead)
  }, []);

  const back = () => {
    router.push('/')
  }
  return (
    <div className="bg-gradient-to-r from-blue-100">

    
    <div class="max-w-5xl flex items-center lg:h-screen flex-wrap mx-auto  lg:my-0">
      <div className="p-2 inline-flex items-center justify-center w-full shadow-sm  rounded-sm">
        <a href="https://medfitpaulista.com.br/" target="_blank">
          <img src="/imgs/logo.png" className="w-64"></img>
        </a>
      </div>
      {/* <!--Main Col--> */}
      <div id="profile" class="mx-auto lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl text-center 
      bg-white opacity-75 lg:mx-0">
        <div class="p-6 md:p-12 text-center lg:text-left ">
          {/* <!-- Image for mobile view--> */}
          <h1 className="text-2xl font-bold text-center">{lead.nome}, o seu IMC é: {lead.imc}</h1>

          <div class="ml-auto mr-auto w-4/5 pt-2 border-b-2 border-green-500 opacity-25"></div>
            <p class="pt-4 font-bold ">
            <p className="text-md text-center">{lead.textResult1}</p><br></br>
          </p>
          <div class="pt-6 pb-1 ">
            <table className="table-responsive ml-auto mr-auto text-center lg:w-4/5 rounded">
              <thead>
                <tr>
                  <th className="border w-2/6 px-4 py-2 border-b bg-black text-white">Classificação</th>
                  <th className="border w-2/6 px-4 py-2 border-b bg-black text-white">IMC</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-4 py-2 text-md">Magreza</td>
                  <td className="border text-md">{'\< 18.5'}</td>

                </tr>
                <tr>
                  <td className="border px-4 py-2 text-md">Normal</td>
                  <td className="border text-md">18.5 a 24.9</td>

                </tr>
                <tr>
                  <td className="border px-4 py-2 text-md">Sobrepeso</td>
                  <td className="border px-4 py-2 text-md">24.9 a 30</td>

                </tr>
                <tr>
                  <td className="border px-4 py-2 text-md">Obesidade</td>
                  <td className="border px-4 py-2 text-md">{'> 30'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product --> */}

        </div>

      </div>

      {/* <!--Img Col--> */}
      <div class="w-full p-6  lg:w-2/5 rounded-lg mb-1 lg:rounded-l-lg lg:rounded-r-none shadow-3xl bg-gray-200 opacity-75 mx-6 lg:mx-0">
        {/* <!-- Big profile image for side bar (desktop) --> */}
        <p className="text-md text-left">Manter o imc dentro da classificação ideal, é de extrema importância pois previne doenças como diabetes, colesterol, problemas cardíacos, gordura no fígado, câncer entre outros. por isso é muito importante fazer exames regularmente e manter uma alimentação saudável.
                    </p><br></br>
        <p className="text-md text-left ">A medfit conta com um processo de emagrecimento com acompanhamento de médicos, e nutricionistas onde você realiza todos os exames clínicos sem pagar nada por isso. tudo utilizando seu convênio via reembolso.
                  clique no botão abaixo e descubra como você pode emagrecer de 5 a 10kg nas próximas semanas com nosso acompanhamento.</p>
        <div className="w-full flex justify-end mt-5">
          {/* <a href="https://api.whatsapp.com/send?phone=51955081075&text=Olá%21%20medfit" class="float" target="_blank"> */}
          <span className="flex align-middle bg-whatsapp-color items-center rounded-full bottom-2 right-64 fixed">
            <svg className="h-8 m-3 fill-current text-white cursor-pointer hover:text-green-700" role="img" viewBox="0 0 24 24" class="fill-current h-4 text-brand hover:text-teal" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"></path>
            </svg>
          </span>
    
          <div className="w-full flex justify-end">
            <a className="link mr-6" target="_blank" href="https://www.facebook.com/medfitpaulista/" data-tippy-content="@facebook_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

        {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}

      </div>


      {/* <!-- Pin to top right corner --> */}
      {/* <div class="absolute top-0 right-0 h-12 w-18 p-4">
        <button class="js-change-theme focus:outline-none">🌙</button>
      </div> */}

    </div>
    </div>
  )
}
