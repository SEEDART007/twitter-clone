'use client'
import { useRouter } from "next/navigation"
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps{
    label:string;
    showBackArror?:boolean;
}
const Header:React.FC<HeaderProps> = ({
    label,
    showBackArror
})=>{
    const router = useRouter();
    const handleBack=useCallback(()=>{
router.back()
    },[router])
    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
{
    showBackArror && (
        <BiArrowBack onClick={handleBack} color="white" size={20}/>
    )
}
<h1>{label}</h1>
            </div>

        </div>
    )
}

export default Header