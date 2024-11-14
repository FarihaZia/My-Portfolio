import Image from 'next/image'
import React from 'react'
import farihapfp from "@/public/farihapfp 1.png"

function Profile() {
  return (<div className='flex'>

    <div  className="mt-5 overflow-hidden circle ">
        <Image className="" src={farihapfp} alt=''></Image>

    </div>

    <div className='styles  '>
        <h1 >I am</h1>
        </div>

        <div className=' heading'>
         <h1 >Fariha Zia</h1> 
         </div>

        </div>
      
  
  )
}

export default Profile