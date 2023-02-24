import '../assets/style/Contact.css';
import React from 'react';
const Contact = () => {
    return (
      <section className="contact">
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
      <div className="placeh">
        <p className="gota">GOT A QUESTION?</p>
        <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
        <p className="conta ">CONTACT US</p>
        <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
        <p className="para">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
      </div>
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>

      <center>
      <div class="w-full max-w-sm content-center items-center object-center">
        <form class="bg-[#f5f5f5] shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center ">
          <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Message">
            Message
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Message" type="text" placeholder="Message"/>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Cancel
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