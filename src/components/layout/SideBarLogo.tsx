'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'

function SideBarLogo() {
    const router = useRouter()
  return (
    <div onClick={()=>router.push(`/`)} className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 text-white transition'>
<BsTwitter/>
    </div>
  )
}

export default SideBarLogo