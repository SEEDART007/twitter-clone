import React from 'react'
import SideBar from './layout/SideBar'
import FollowBar from './layout/FollowBar'
interface LayoutProps{
    children:React.ReactNode
}
const Layout:React.FC<LayoutProps>=({children})=>{
    return (
        <div className='h-screen bg-black'>

            <div className='container h-full mx-auto xl:px-32 max-w-6xl'>
                <div className='grid grid-cols-4 h-full'>
                    <SideBar/>
                    <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'></div>
            {children}
            </div>
            <FollowBar/>
        </div>
        </div>
    )

}

export default Layout