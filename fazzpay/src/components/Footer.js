import React from 'react'

export default function Footer() {
  return (
    <div className='font-nunito bg-primary py-10 px-20 text-white'>
        <p className='text-2xl font-bold'>Fazzpay</p>
        <p className='py-10 lg:w-48' >Simplify financial needs and saving much time in banking needs with one single app.</p>
        <hr />
        <div className='flex justify-between'>
            <p>2020 FazzPay. All right reserved.</p>
            <div className='flex justify-between gap-x-6'>   
                <p>+62 5637 8882 9901</p>
                <p>contact@fazzpay.com</p>
            </div>
        </div>
    </div>
  )
}
