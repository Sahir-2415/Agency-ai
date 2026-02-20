import { useState } from 'react'
import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
// import {toast} from 'sonner'
import { useToast } from '../ToastContext'
const ContactUs = () => {
    const {showToast}=useToast();
    const onSubmit=async(event)=>{
        event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1c9e981e-c584-4fe8-92b9-e2804ef8dacb");
        try{
            const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
        if(data.success){
            // toast.success('Thank you for your submission');
            showToast('Thank you for your submission',"success")
            event.target.reset();
        }else{
            // toast.error(data.message);
            showToast(data.message,"error")
        }
        }catch(event){
            showToast("Something went wrong","error")
        }
    
    }

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onSubmit={onSubmit}>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt=""/>
                    <input type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none required' name='name'/>
                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Email</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt=""/>
                    <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none required' name='email'/>
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' name='message' required/>
            </div>
            
            <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit <img src={assets.arrow_icon} className='w-4'></img>
            </button>

        </form>

    </div>
  )
}

export default ContactUs
