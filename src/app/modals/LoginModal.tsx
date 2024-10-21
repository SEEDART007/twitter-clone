'use client'
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";

interface LoginModalProps{

}

const LoginModal = () =>{
    const loginModal = useLoginModal()
    const[email,setEmail]=useState('')
    const[isLoading,setIsLoading]=useState(false)
    const[password,setPassword]=useState('')
    const onSubmit=useCallback(async()=>{
try {
    setIsLoading(true)
//todo login 

loginModal.onClose();

} catch (error) {
    console.log(error)
}finally{
    
    setIsLoading(false)
}
    },[loginModal])

    const bodyContent=(
        <div className="flex flex-col gap-4">
<Input placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email} disabled={isLoading}/>
<Input placeholder="Password" onChange={(e)=>setEmail(e.target.value)} value={password} disabled={isLoading}/>
        </div>
    )
return(
    <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="login" actionLabel="signin" onClose={loginModal.onClose} onSubmit={onSubmit} body={bodyContent}/>
)
}

export default LoginModal;