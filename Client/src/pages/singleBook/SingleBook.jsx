import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const SingleBook = () => {
  const {id} =useParams()
  const [book,setBook]=useState({})
  console.log(id)
  const fetchBook = async ()=>{
    const response = await axios.get(`https://basic-node-48px.onrender.com/book/${id}`)
    if (response.status===200){
      setBook(response.data.data)
    }
  }

  useEffect(()=>{
    fetchBook()
  },[])
  console.log(book)

  const navigate = useNavigate()
    const handleDelete = async (bookId) => {
      
        const response = await axios.delete(`https://basic-node-48px.onrender.com/book/${bookId}`);
  
        if (response) {
          alert("Book deleted successfully");
          navigate("/")
          // Optionally, refresh the book list or update the state
        }else{
          alert("Book cannot be deleted at this moment.")
        }
    };


  return (
    <>
          <Navbar/>
          <div class='flex flex-wrap justify-normal'>
            <div class="max-w-sm bg-violet-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mb-2 mt-2 mr-8 hover:shadow-black transition duration-500 ">
            <a href="#">
                <img class="rounded-t-lg w-50 h-50" src={book.imageUrl}alt="" />
            </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookName}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookPrice}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.isbnNumber}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.authorName}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.publication}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.publishedAt}</p>
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</button>    
               
              <button type="button" class="text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to={`/editBook/${book._id}`}>Edit Book</Link></button> 

              <button className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleDelete(id)}>Delete</button>
              </div>
          </div>
        </div>

        <Footer />
        

    </>

    
  )
}

export default SingleBook