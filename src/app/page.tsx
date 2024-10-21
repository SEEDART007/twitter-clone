import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import React from 'react'
import LoginModal from './modals/LoginModal'

import RegisterModal from './modals/RegisterModal'

function page() {
  return (
    <div>
      <RegisterModal/>
      <LoginModal/>
      
       {/* <Modal actionLabel='submit' title='hello porn' isOpen/> */}
      <Layout>
        hello
      </Layout>
    </div>
  )
}

export default page