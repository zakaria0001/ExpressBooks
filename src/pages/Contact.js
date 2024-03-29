import '../assets/style/Contact.css';
import React from 'react';
const Contact = () => {
    return (
      <section className="contact">
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
      <div className="placeh">
        <p className="gota">Vous Avez Des Questions ?</p>
        <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
        <p className="conta ">Contactez-Nous</p>
        <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
        <p className="para">Nous sommes là pour vous aider et répondre à toutes vos questions. Nous avons hâte d'avoir de tes nouvelles.</p>
      </div>
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>

      <center>
      <div class="w-full max-w-sm content-center  items-center object-center">
        <form class="bg-[#f5f5f5] shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center ">
          <div class="mb-4">
        
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom"/>
         
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Message" type="text" placeholder="Message"/>
          <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Envoyer
          </button>
          <button class="bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Annuler
          </button>
          </div>
        </form>
      </div>
      </center>
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>

      </section>
    )
  };
  
  export default Contact;