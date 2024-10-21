'use client'
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";


const RegisterModal = () =>{
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const[email,setEmail]=useState('')
    const[isLoading,setIsLoading]=useState(false)
    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const onToggle=useCallback(()=>{
if(isLoading)return;

registerModal.onClose();
loginModal.onOpen();
    },[isLoading,registerModal,loginModal])
    const onSubmit=useCallback(async()=>{
try {
    setIsLoading(true)
//todo login 

registerModal.onClose();

} catch (error) {
    console.log(error)
}finally{
    
    setIsLoading(false)
}
    },[registerModal])

    const bodyContent=(
        <div className="flex flex-col gap-4">
<Input placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email} disabled={isLoading}/>
<Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} disabled={isLoading}/>
<Input placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} disabled={isLoading}/>
<Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} disabled={isLoading}/>
        </div>
    )
    const footerContent=(
        <div className="text-neutral-400 text-white text-center mt-4">
            <p>already have an account?<span onClick={onToggle} className="text-white cursor-pointer hover:underline"> sign in</span></p>
        </div>
    )
return(
    <Modal footer={footerContent} disabled={isLoading} isOpen={registerModal.isOpen} title="Create An Account" actionLabel="signin" onClose={registerModal.onClose} onSubmit={onSubmit} body={bodyContent}/>
)
}

export default RegisterModal;