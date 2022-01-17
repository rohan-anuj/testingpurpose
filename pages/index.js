import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FormData from 'form-data'
import { Input } from 'postcss'
import { useState } from 'react'

export default function Home() {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
  const formdata=new FormData()
  return (
    <div className="flex flex-col bg-gray-100 justify-between items-center">
      <form className='p-2 outline-2 outline-gray-400 flex   flex-col justify-between items-center '> 

      <input type="email" name="email"  value={email}  placeholder="email"  onChange={(e)=>setEmail(e.target.value)}  className="rounded-xl p-4 m-4  border-2   text-bold font-serif" />
      <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" className="rounded-xl  border-2  p-4 m-4  text-bold font-serif" />
      <button type='submit' className='px-4  py-2  rounded   bg-blue-500 text-white m-4   font-sans ' >Submit</button>


      </form>
      
      
    </div>
  )
}
