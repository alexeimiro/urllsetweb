import logo from "../assets/logo.svg";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import westernunion from "../assets/westernunion.png";
import bitcoin from "../assets/bitcoin.png";
import tether from "../assets/Tether_Logo.svg";

const Footer = () => {
  return (
    <footer
      className="footer bg-neutral-100 text-center text-black lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>

        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          
          <a className="mr-6 text-black" href="https://www.instagram.com/urllset.invest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
         
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img src={logo} className='logo-black' alt="logo" />
              
            </h6>
          </div>

           {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >Legal & privacy</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >Settings</a>
            </p>
          </div> 
          
          
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-100 p-6 text-center">
        <span>© 2024 Copyright:</span>
        <a
          className="font-semibold text-neutral-600"
          href="https://tw-elements.com/"
        > Urllset</a>
      </div>

      <div className="mt-10 flex flex-wrap justify-center overflow-x-auto">
  <img src={mastercard} alt="" className="mx-2 h-10 w-10" />
  <img src={paypal} alt="" className="mx-2 h-10 w-10" />
  <img src={visa} alt="" className="mx-2 h-10 w-10" />
  <img src={westernunion} alt="" className="mx-2 h-10 w-10" />
  <img src={bitcoin} alt="" className="mx-2 h-10 w-10" />
  <img src={tether} alt="" className="mx-2 h-10 w-10" />
</div>



    </footer>
  )
}

export default Footer