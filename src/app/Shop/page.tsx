import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Shop() {
  return (
    <div>
      {/* back mage */}
      <div className=" max-w-screen max-auto ">
        <section id="sect1 ">
          <div className="ml-10 py-[100px] px-[20px] ">
            <Image
              src={"/Group 78 (12).png"}
              alt={"bannner"}
              height={320}
              width={1440}
            />
          </div>
          <div>
            {/* icon bar */}
            <div className="gap-[50%] justify-between">
              <div className="flex gap-10 bg-[#F9F1E7] w-full h-[100px]">
                <div className=" mt-6 ml-5">
                  <Link href={"Shop/Products"}>
                  <Image
                    src={"/Group 57.png"}
                    alt={"icon1"}
                    height={30}
                    width={85}
                  /></Link> &gt;
                </div>
                <div className="mt-8 ml-5">
                  <Image
                    src={"/ci_grid-big-round (1).png"}
                    alt={"icon2"}
                    height={20}
                    width={20}
                  />
                </div>
                <div className="mt-8 ml-8">
                  <Image
                    src={"/bi_view-list.png"}
                    alt={"icon3"}
                    height={20}
                    width={20}
                  />
                </div>
                <div className="mt-6 ml-8">
                  <Image
                    src={"/Group 62.png"}
                    alt={"icon4"}
                    height={20}
                    width={200}
                  />
                </div>

                <div className="righticons pl-96">
                  <ul className="flex gap-10 mr-20 mt-6 ml-8">
                    <li>
                      <label htmlFor="">Show </label>
                      <input
                        type="number"
                        placeholder="18"
                        className="w-12 h-10 rounded-md"
                      />
                    </li>
                    <li>
                      <label htmlFor="">Short by </label>
                      <input
                        type="text"
                        placeholder="Default"
                        className="w-20 h-10 rounded-md"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* images section */}
        <section className="sect2">
          <div className="flex justify-center">
            <div className="mt-8 ml-8 ">
              <Image
                src={"/Featured Products.png"}
                alt={"chair3"}
                height={400}
                width={250}
              />
            </div>
            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (4).png"}
                alt={"chair4"}
                height={400}
                width={250}
              />
            </div>

            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (5).png"}
                alt={"chair5"}
                height={400}
                width={250}
              />
            </div>
          </div>
{/* second div */}
          <div className="justify-center">
            <div className="mt-8 ml-[600px]">
              <Image
                src={"/Featured Products (6).png"}
                alt={"chair6"}
                height={400}
                width={250}
              />
            </div>
          </div>
          <div>
          <div className="flex justify-center">
            <div className="mt-8 ml-8 ">
              <Image
                src={"/Featured Products.png"}
                alt={"chair3"}
                height={400}
                width={250}
              />
            </div>
            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (4).png"}
                alt={"chair4"}
                height={400}
                width={250}
              />
            </div>

            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (5).png"}
                alt={"chair5"}
                height={400}
                width={250}
              />
            </div>
          </div>
          </div>
          <div>
          <div className="flex justify-center">
            <div className="mt-8 ml-8 ">
              <Image
                src={"/Featured Products.png"}
                alt={"chair3"}
                height={400}
                width={250}
              />
            </div>
            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (4).png"}
                alt={"chair4"}
                height={400}
                width={250}
              />
            </div>

            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (5).png"}
                alt={"chair5"}
                height={400}
                width={250}
              />
            </div>
          </div>
          </div>
          <div>
          <div className="flex justify-center">
            <div className="mt-8 ml-8 ">
              <Image
                src={"/Featured Products.png"}
                alt={"chair3"}
                height={400}
                width={250}
              />
            </div>
            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (4).png"}
                alt={"chair4"}
                height={400}
                width={250}
              />
            </div>

            <div className="mt-8 ml-8">
              <Image
                src={"/Featured Products (5).png"}
                alt={"chair5"}
                height={400}
                width={250}
              />
            </div>
          </div>
          </div>
          <div className="bg-[#FAF3EA] text-gray-500">
<div className="flex gap-4
">
<div className="mt-8 ml-8">
              <Image
                src={"/Frame 4.png"}
                alt={"chair5"}
                height={200}
                width={200}
              />
            </div>
            <div className="mt-8 ml-8 mb-5">
              <Image
                src={"/Frame 5.png"}
                alt={"icon6"}
                height={250}
                width={250}
              />
            </div>
            <div className="mt-8 ml-8">
              <Image
                src={"/Frame 2.png"}
                alt={"chair7"}
                height={200}
                width={250}
              />
            </div>
            {/* <div className="mb-5">
              <h2>High Quality</h2>
              <p className="text-slate-200">crafted from top materials</p>
            </div> */}
{/* </div>
<div className="mt-8 ml-8">
              <Image
                src={"/Frame 6.png"}
                alt={"chair7"}
                height={100}
                width={100}
              />
            </div>
            <div className="mb-5">
              <h2>High Quality</h2>
              <p className="text-slate-200">crafted from top materials</p>
            </div>
</div> */}

<div className="mt-8 ml-8">
              <Image
                src={"/Frame 19.png"}
                alt={"chair7"}
                height={200}
                width={250}
              />
            </div>
            {/* <div className="mb-5">
              <h2>High Quality</h2>
              <p className="text-slate-200">crafted from top materials</p>
            </div> */}

</div>
</div>
</section>

</div>


        
          </div>
        
   ) 
}
