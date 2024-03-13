import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactform = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m8l7f2f', 'template_1p7tc0o', form.current, '7ZmwnZCAYddVyKOjE')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="px-2 rounded-lg">
      <p className='font-semibold'>Email address</p>
      <div>
        {!isSubmitted && (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 text-white">
            <div className="flex flex-col-mobile gap-3 items-center">
              <label htmlFor="user_email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                name="user_email"
                required
                className="pl-4 text-lg p-3 border rounded-lg w-full md:w-auto"
              />
              <button
                type="submit"
                className="button w-full bg-blue-600 duration-300 ease-in-out hover:bg-blue-700"
              >
                Get started
              </button>
            </div>
          </form>
        )}

        {isSubmitted && (
          <div className="text-center text-green-500 py-4">
            Thank you for your message! We'll be in touch.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contactform;
