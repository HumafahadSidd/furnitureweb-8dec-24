import React from "react";
import Image from "next/image";
import Button from "./button";

export default function HeroHome() {
  return (
    <div>
      <div className="max-h-screen max-w-screen-xl">
        <Image
          src={"/background.png"}
          alt={"interiors"}
          height={1000}
          width={1440}
          className="absolute -z-10 "
        />

        <div className="pt-[100px]">
          <div className=" Peach h-[400px] w-[600px] bg-[#FFF3E3] ml-[700px]  pt-[30px] pr-[50px] mb-4 text-[#FFF3E3] ">
            <div className="mt-4 ml-6">
              <h4 className="text-black">New Arrival</h4>
              <h1 className="text-[#B88E2F]  text-6xl mt-2">
                Discover Our <br /> New Collection
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis.
              </p>
              <div className="mt-2">
                <Button text={"BUY NOW"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
        <div className="mt-[400px] ml-10">
          <div className="container text-center justify-center   bg-white w-[1200px] h-[685px]">
            <div className="">
              <div>
                <h1 className="text-3xl font-bold">Browse The Range</h1>
                <p className="mt-10 mb-10 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex ml-20 gap-10">
                <div>
                  <Image
                    src={"/Mask Group.png"}
                    alt="table"
                    height={400}
                    width={380}
                  />
                  <h1 className="font-bold mt-4">Dininig</h1>
                </div>
                <div>
                  <Image
                    src={"/Image-living room.png"}
                    alt="table2"
                    height={400}
                    width={380}
                  />
                  <h1 className="font-bold mt-4">Living</h1>
                </div>

                <div>
                  <Image
                    src={"/Mask Group.png"}
                    alt="table3"
                    height={400}
                    width={380}
                  />
                  <h1 className="font-bold mt-4">Bedroom</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        {/* Card Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4 ">Our Products</h2>

          {/* one Image in a Row */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> */}
          <div className="rounded m-3">
            <div>
              <Image
                src="/Featured Products.png"
                alt="Pic 1"
                height={380}
                width={280}
              />
            </div>
          </div>
          <div>
            <div className="flex rounded-md ">
              {/* four images in row */}

              <div className="rounded m-3">
                <Image
                  src="/Featured Products (5).png"
                  alt="Pic 1"
                  height={380}
                  width={280}
                />
              </div>

              {/* 2n image n so on */}
              <div className="rounded m-3 flex">
                <div>
                  <Image
                    src="/Featured Products (6).png"
                    alt="Pic 2"
                    height={300}
                    width={280}
                  />
                </div>

                <div className="rounded m-3">
                  <Image
                    src="/Featured Products (7).png"
                    alt="Pic 3"
                    height={380}
                    width={280}
                  />
                </div>

                <div className="rounded m-3 ">
                  <Image
                    src="/Featured Products (8).png"
                    alt="Pic 4"
                    height={300}
                    width={280}
                  />
                </div>
              </div>
            </div>
            <div className="beautiful room bg-[#FCF8F3] w-[1440px] h-[600px] flex pt-20 pl-10 ">
              <div className="flex ">
                <div className="">
                  <h1 className="font-bold text-5xl mt-2 ">
                    50+ Beautiful rooms <br />
                    inspiration
                  </h1>
                  <p className="text-2xl mt-2 ">
                    Our designer already made a lot of beautiful <br />
                    prototipe of rooms that inspire you
                  </p>
                  <div className="mt-6 ml-2">
                    <Button text={"Explore More"} />
                  </div>
                </div>
              </div>

              <div className="ml-2">
                <Image
                  src={"/Products.png"}
                  alt={"bedsets"}
                  height={500}
                  width={800}
                />
              </div>
            </div>
            {/* furnitures */}
            <div className="text-center mt-10 ">
            <div className="">
              {/* heading */}
              <div className="w-[350px] h-[86px] pl-[400px]justify-center">
                <h4 className="text-gray-500 text-center">
                  Share your setup with
                </h4>
                <h1 className="text-4xl font-bold">#FuniroFurniture</h1>
              </div>
              </div>
              {/* images */}

              <div>
                <div>
                  <Image
                    src={"/Images (1).png"}
                    alt={"products"}
                    height={700}
                    width={1200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
