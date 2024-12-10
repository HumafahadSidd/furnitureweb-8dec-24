import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="">
      <div className=" max-auto ">
        {/* Header */}
        <header className="header flex justify-between items-center gap-5 bg-white w-screen h-[100px] text-black ">
          <div className="w-[1280px] h-[41px] ml-10 px text-medium flex justify-between ">
            {/* Logo and Navigation */}
            <div className="logo ml-4 ">
              <Image src="/Frame 168.png" alt="logo" height="200" width="200" />
            </div>
            <nav className="flex space-x-4 w-[430px] h-20 font-medium pt-2 gap-2 px-[500px] py-[38px] ">
              <Link href="/">Home</Link>
              <Link href="/Shop">Shop</Link>
              <Link href="/Blog">Blog</Link>
              <Link href="/Contact">Contact</Link>
            </nav>
            <div className="icons flex gap-5 pt-2 ">
              <div className="icon">
                <Image src="/Vector.png" alt="Vector" height={40} width={40} />
              </div>
              <div className="icon">
                <Image src="/search.png" alt="search" height={40} width={40} />
              </div>
              <div className="icon">
              <Link href="/Products"><Image src="/heart.png" alt="heart" height={40} width={40} /></Link>
              </div>
              <div className="icon">
                  <Link href="/Cart">
                <Image src="/cart.png" alt="cart" height={40} width={40} />
                </Link>               
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
