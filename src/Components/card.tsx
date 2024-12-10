import React from 'react';
import Image from 'next/image';
export default function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image src={"/image.jpg"} alt="Card Image" height={400} width={600} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          This is a description of the card. It provides some information about the content of the card.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}
