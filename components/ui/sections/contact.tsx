import {  Mail } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '../button'

function Contact() {
  return ( 

<div className='mt-10 contact'>
    <div  className="mt-1 flex justify-center  ">
    <div><h1 className=" text-xl text-white ">Contact Me</h1></div>
     </div>
<div className='flex justify-center'>
<Link href="mailto:farihazia2006@gmail.com">
<Button className='z-18 size={""}'>
    Send me email <Mail className='size-6 ml-3'/>
    </Button>
    </Link>

</div>
    
</div>
  )
}

export default Contact