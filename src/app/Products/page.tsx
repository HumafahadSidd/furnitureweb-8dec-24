import React from 'react'
import Image from 'next/image'

export default function Products(){
  return (
    <div>
      <div>
        <Image src= {"/Group 104.png"} alt={"sofaset1"} height={800} width={1200} /></div>
      <div>
      <Image src= {"/Group 110.png"} alt={"sofaset2"} height={400} width={1200} />
      
      </div>
      <div>
         <Image src= {"/Group 19 (1).png"} alt={"sofaset3"} height={500} width={1200} />      
      </div>
    </div>
  )
}
