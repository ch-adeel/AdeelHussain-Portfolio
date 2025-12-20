import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-black to-gray-800 pt-3">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center md:ml-12">

        {/* LEFT SECTION - Text + contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3 ">
            Available for select freelance opportunities
          </h3>
          <p className="mb-4">
            Have an exciting project you need help with? 
            <br />
            <br />
            Send me an email or contact me via instant message!
          </p>          
        </div>

        {/* CENTER SECTION - Social links */}
        <div className="flex flex-col items-center justify-center gap-3 text-lg font-medium">
          <a href="https://github.com/ch-adeel" target="_blank" className="hover:text-white hover:underline">
            Github
          </a>
          <a href="https://www.linkedin.com/in/adeel-hussain-139113186/" target="_blank" className="hover:text-white hover:underline">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/chaudhary_adeel_hussain_/" target="_blank" className="hover:text-white hover:underline">
            Instagram
          </a>
        </div>

        {/* RIGHT SIDE CAN BE BLANK (or Portfolio link later) */}
        <div className="flex flex-col items-center justify-center gap-3 text-lg font-medium">
             <p className="text-gray-400">📞 +92-332-9875307</p>
          <p className="text-gray-400">📧 chadeelhussain31@email.com</p>  
          © {new Date().getFullYear()} Adeel Hussain
        </div>
      </div>
    </footer>
  );
};

export default Footer;
