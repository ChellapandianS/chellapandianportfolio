import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact bg-gray-100 py-20 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Contact Me
      </h2>
      <div className="contact-info flex flex-col sm:flex-row sm:flex-wrap gap-5 justify-center items-center mx-auto max-w-xl">
        <a
          rel="noreferrer"
          target="_blank"
          className="contact-item hover:underline text-center"
          href="mailto:chellapandian625@gmail.com"
        >
          <i className="fa fa-envelope mr-2 animate-bounce"></i>
          E-mail: <span className="font-bold">chellapandian625@gmail.com</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="contact-item hover:underline text-center"
          href="tel:+917871144922"
        >
          <i className="fa fa-phone mr-2 animate-bounce"></i>
          Contact Number: <span className="font-bold">91+ 7871144922</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="contact-item hover:underline text-center"
          href="https://x.com/Chellap98580365?t=mH2BONlw9GLghJfwUgYJ1w&s=08"
        >
          <i className="fa fa-twitter mr-2 animate-bounce"></i>
          Twitter: <span className="font-bold">chellapandian</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="contact-item hover:underline text-center"
          href="https://github.com/ChellapandianS"
        >
          <i className="fa fa-github mr-2 animate-bounce"></i>
          GitHub: <span className="font-bold">chellapandians</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="contact-item hover:underline text-center"
          href="https://www.linkedin.com/in/chellapandian-s/"
        >
          <i className="fa fa-linkedin mr-2 animate-bounce"></i>
          LinkedIn: <span className="font-bold">chellapandians</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="contact-item hover:underline text-center"
          href="https://maps.app.goo.gl/RYoeJwPS5mpXwS346"
        >
          <i className="fa fa-address-card mr-2 animate-bounce"></i>
          Address: <span className="font-bold">Yagappanagar, Madurai-625020</span>
        </a>
      </div>
    </section>
  );
}