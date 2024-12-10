import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[400px] max-w-screen max-auto ">
      {/* Footer */}
      <footer className="mt-4 bg-white w-[1440px] h-[300px] shadow-sm pl-20">
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-black font-2xl font-bold mt-2 mb-4">Funira</h1>
            <h4 className="text-[#9F9F9F] mt-20">
              400 University Drive Suite <br />
              200 Coral <br /> Gables,
               FL 33134 USA
            </h4>
          </div>
          <div>
            <ul className="mt-12 font-extrabold leading-[30px]">
              <li className="text-[#9F9F9F]">Links</li>
              <li className="mt-5"><Link href={"/"}>Home</Link></li>
              <li className="mt-5"><Link href={"/Shop"}>Shop</Link></li>
              <li className="mt-5"><Link href={"/About"}>About</Link></li>
              <li className="mt-5"><Link href={"/Contact"}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <ul className="mt-5 font-bold leading-[50px] ">
              <li className="text-[#9F9F9F]">Help</li>
              <li className="mt-5">Payment Options</li>
              <li className="mt-5">Returns</li>
              <li className="mt-5">Privacy Policy</li>
            </ul>
          </div>
          <div className="mt-5">
            <h4 className="text-[#9F9F9F] mt-5">NewsLetter</h4>
            <div className="underline flex mt-5">
              <input type="text" placeholder="Enter your email addres" />
              <span className="underline">
                <h3>Subscribe</h3>
              </span>
            </div>
          </div>
         
        </div>
        
      </footer>
      <div className="mt-16 ml-8">2023 furino. All rights reverved</div>
    </div>
  );
};
export default Footer;
