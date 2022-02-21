import './App.css';
import Iframe from './components/Iframe';
import ReactGA from 'react-ga';
import React,{ Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import bookcase from './images/bookcase.jpg'
import logo from './images/logo.svg'

const items = [
  {
    libro: '<iframe src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0xb1765a97d10C1850f7236cE3B2093325d5dE5431&chainId=4&tokenId=5" width="600px" height="600px" style="max-width:100%;" frameborder="0" />',
  },
  {
    libro: '<iframe src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0xb1765a97d10C1850f7236cE3B2093325d5dE5431&chainId=4&tokenId=1" width="600px" height="600px" style="max-width:100%;" frameborder="0" />',
  },
  {
    libro: '<iframe src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0xb1765a97d10C1850f7236cE3B2093325d5dE5431&chainId=4&tokenId=2" width="600px" height="600px" style="max-width:100%;" frameborder="0" />',
  },
  {
    libro: '<iframe src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0xb1765a97d10C1850f7236cE3B2093325d5dE5431&chainId=4&tokenId=3" width="600px" height="600px" style="max-width:100%;" frameborder="0" />',
  },
  {
    libro: '<iframe src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0xb1765a97d10C1850f7236cE3B2093325d5dE5431&chainId=4&tokenId=4" width="600px" height="600px" style="max-width:100%;" frameborder="0" />',
  }



]

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Claim', href: '#' },
]

function App() {

  useEffect(() => {
    ReactGA.initialize('G-Z97DCMWZ3J');
    ReactGA.pageview("landing page");
  })

  return (
    <div className="relative bg-white overflow-hidden px-8 py-4">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-amber-600 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src={logo}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-amber-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-amber-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Readers Club</span>{'  '}
                  <span className="block text-amber-600 xl:inline">NFT space</span>
                </h1>
                <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A place to claim an NFT for each read book
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={bookcase}
            alt=""
          />
        </div>
      </div>
      <div class="container mx-auto px-4 py-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="inline-block">Claim your</span>{' '}
          <span className="block text-amber-600 xl:inline">NFT</span>
        </h1>
        <p className="text-xl pt-10 tracking-tight font-extrabold text-gray-900">
        <span className="block text-amber-600 xl:inline">Notas importantes:</span>
        <br/>
        <span className="inline-block">- No utilicen su wallet principal, creen una wallet separada para estas cosas random, en metamask son gratis.</span>
        <br/>
        <span className="inline-block">- En la </span>
        <a className="text-green-500" href = "https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-Create-an-Additional-Account-in-your-MetaMask-Wallet"> ayuda </a>{' '}
        <span className="inline-block">de Metamask hay una guía para crear nuevas cuentas.</span>
        <br/>
        <span className="inline-block">- Con la wallet pueden ir a la testnet de Rinkeby en </span>{' '}
        <a className="text-green-500" href = "https://testnets.opensea.io/">OpenSea</a>{' '}
        <span className="inline-block">y ver todos los NFT que tienen.</span>{' '}
        <span className="inline-block">- Para interactuar con la página necesitan Fake ETH, lo pueden conseguir en los Faucets. El de </span>{' '}
        <a className="text-green-500" href = "https://faucets.chain.link/rinkeby">ChainLink</a>{' '}
        <span className="inline-block">suele ser el que mejor funciona.</span>{' '}
        </p>
      </div>
      <div class="container mx-auto px-4 py-8">
        <div class="columns-3xs lg">
          {items.map((item) => (
            <Iframe iframe={item.libro} />
          ))}
        </div>
      </div>
      <div class="container mx-auto px-4 py-8">
        <p className="text-l pt-2 pb-10 tracking-tight font-extrabold text-gray-900">
        <span className="inline-block">¿Por qué sale 0.02 ETH cada NFT? Hacer deploy de los contratos cuesta ETH, y algunos faucets solo dejan un pedido por día, así que es una buena forma de recaudar Fake ETH para seguir haciendo pruebas :D</span>{' '}
        <br/>
        <span className="inline-block">Si en la </span>{' '}
        <a className="text-green-700" href = "https://rinkeby.etherscan.io/address/0x9a42f627c643331b765449A2Fd22AdFE509Befe3">wallet</a>{' '}
        <span className="inline-block">se recauda más de 1 Fake ETH, será donado a la wallet</span>{' '}
        <a className="text-green-700" href = "https://rinkeby.etherscan.io/address/0xFee51018dd2C4cda72122a2D53E639f88ee4c2d3">0xFee51018dd2C4cda72122a2D53E639f88ee4c2d3</a>{' '}
        <span className="inline-block">de</span>{' '}
        <a className="text-green-700" href = "https://buildspace.so/">buildspace</a>{' '}
        <span className="inline-block"> que es una comunidad gratis donde aprendí a a programar Web3</span>{' '}
        </p>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="inline-block">Disclaimer</span>{' '}
        </h1>
        <p className="text-s tracking-tight  text-gray-900">
          TL;DR:
          No conecten la wallet principal a una página random en internet, creen wallets separadas, son gratis.
          <br/>
          <br/>
          The content will be updated gradually without any prior notice，as this information is referencing a product in development. 
          <br/>
          Please read the "Disclaimer" section carefully. Nothing in this product constitutes legal, financial, commercial or fiscal advice, and you should consult your own legal, financial, fiscal or other professional advisor for any direct or indirect damages or losses you may suffer as a result of any other website or material before engaging in any activity related to this agreement.
          <br/>
          Investing in digital currencies involves investment risks. Digital currencies may lose some or all of their value. Citizens or residents of the United States are or may be prohibited from participating in the blind box offering without proving or verifying that they are qualified investors, in accordance with the program participation policy.
          <br/>
          The information set forth in this Website may not be exhaustive and does not imply any elements of a contractual relationship. The content of this Website is not binding on the Company and the Company reserves the right to change, modify, add, or remove portions of this Website for any reason at any time before, during and after the sale of tokens by updating an amended Website. This Website does not constitute an investment, legal, tax, regulatory, financial, accounting or other advice, and this Website is not intended to provide the sole basis for any evaluation of a transaction on acquiring of the tokens and is expressly not incorporated by reference into any securities offering or similar documents. Prior to acquiring the tokens, a prospective purchaser should consult with his/her own legal, investment, tax, accounting, and other advisors to determine the potential benefits, burdens, and other consequences of such transaction. The Company is under no obligation to update the Website or modify the Website for any inconsistencies or for material changes to the information.
          <br/>
          NFTs are not a digital currency, security, commodity, or any other kind of financial instrument and have not been registered under the Securities Act of 1933, as amended, the securities laws of any State of the United States of America or the securities laws of any other country, including the securities laws of any jurisdiction in which a potential token holder is a resident. The NFTs are not being offered or distributed to, as well as cannot be resold or otherwise alienated by their holders to, citizens of, natural and legal persons, having their habitual residence, location or their seat of incorporation in the country or territory where transactions with NFTs are prohibited or in any manner restricted by applicable laws or regulations. If such restricted person purchases the tokens, such restricted person has done so on an unlawful, unauthorized and fraudulent basis and in this regard, shall bear negative consequences.
          <br/>
          The Company neither offers or distributes the NFTs nor carries on a business (activity) in any regulated activity in the United States, or in other countries and territories where transactions in respect of, or with use of, tokens fall under the restrictive regulations or require from the Company to be registered or licensed with any applicable governmental authorities. Each purchaser of the NFTs is reminded that this Website has been presented to him/her on the basis that he/she is a person into whose attention the document may be lawfully presented in accordance with the laws of the purchaser’s jurisdiction. It is the responsibility of each potential purchaser of the tokens to determine if the purchaser can legally purchase the tokens in the purchaser’s jurisdiction and whether the purchaser can then resell the tokens to another purchaser in any given jurisdiction.
          <br/>
          Certain statements, estimates and financial information contained in this Website are for informational purposes only, and may constitute forward-looking statements or information. Such forward-looking statements or information involve known and unknown risks and uncertainties which may cause actual events or results to differ materially from the estimates or the results implied or expressed in such forward-looking statements or information. The English language Website is the primary official source of information. The information contained in English language Website may from time to time be translated into other languages. In the course of such translation some of the information contained in the English language Website may be lost, corrupted or misrepresented. The accuracy of such alternative communications cannot be guaranteed. In the event of any conflicts or inconsistencies between such translations and the official English language Website, the provisions of the English language original document shall prevail.
        </p>
      </div>
    </div>
  );
}

export default App;
