import React from 'react'
import { Input } from '../ui/input'

export function Form() {
  return (
    <form className='lg:max-w-96 w-full p-10 border-2 rounded-md'>
        <Input type='number' placeholder='Amount'></Input>
    </form>
  )
}


function FormWrapper(){
    return(
        <div className='flex flex-col items-center justify-center'>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">ETH calculator:</h2>
            <Form/>
        </div>
    )
}

export default FormWrapper