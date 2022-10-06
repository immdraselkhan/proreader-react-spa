import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'

const ErrorPage = () => {
  const error = useRouteError();
  const {status, statusText} = error;
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        {error && <p className='mt-5 text-red-600'>{status} {statusText}</p>}
      </div>
    </>
  )
}

export default ErrorPage
