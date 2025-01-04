import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'
import Footer from '../components/Footer'

//connecting backend 
const Home = () => {
  const [books,setBooks] = useState([])
  const fetchbooks = async()=>{
    const response = await axios.get('https://basic-node-48px.onrender.com/book/')
    // console.log(response.status)  
    // console.log(response.data.data)   //response.data for recieving data and .data for target data and this .data is mentioned in backend in all read section

    if (response.status==200){
      setBooks(response.data.data)
    }

  }

  useEffect(()=>{
    fetchbooks()

  },[])

  console.log(books)

  return (
    <>
         <Navbar /> 
         <div className='flex flex-wrap justify-normal'>
            
            {
              books.length > 0 && books.map((book)=>{
              return (
                <Card book={book}/>
              )
              })
            }
         </div>
        <Footer />
    </>
  )
}

export default Home