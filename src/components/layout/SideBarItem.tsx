import React from 'react'
import { IconType } from 'react-icons';
interface SideBarItemsProps{
    label:string;
    href?:string;
    icon:IconType;
    onClick?:()=>void

}
const SideBarItem:React.FC<SideBarItemsProps>=({
label,
href,
icon:Icon,
onClick,
})=>{
return(
    <div className='flex flex-row items-center'>
        <div className='rounded-full relative h-14 w-14 flex items-center justify-center p-4 lg:hidden '>
            <Icon size={28} color='white'/>
        </div>
        <div className='relative hidden lg:flex items-center gap-4 p-4 rounded-full'>
            <Icon size={24} color='white'/>
            <p className='hidden lg:block text-white'>
                {label}
            </p>
            </div>
    </div>
)
}

export default SideBarItem