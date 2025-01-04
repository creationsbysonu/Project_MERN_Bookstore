import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const AddBook = () => {

  // const [bookName,setBookName] = useState('')
  // const [bookPrice,setBookPrice] = useState('')
  // const [isbnNumber,setIsbnNumber] = useState(null)
  // const [publishedAt,setPublishedAt] = useState('')
  // const [authorName,setAuthorName] = useState('')
  // const [publication,setPublication] = useState('')
  // const [image,setImage] = useState(null)
  
  // const handlSubmit =async(e)=>{
  //   e.preventDefault()
  //     const response = await axios.post('http://localhost:3000/book',{
  //      bookName,
  //      bookPrice,
  //      isbnNumber,
  //      authorName,
  //      publishedAt, 
  //      publication,
  //      image
  //     },{



  //       headers : {
  //         'Content-Type' :'multipart/form-data'
  //       }
  //     })
  // }

  //  const handleSubmit = async (e)=>{
//   e.preventDefault()
//   const formData = new FormData() // {}
//   formData.append('bookName',bookName)
//   formData.append('bookPrice',bookPrice)
//   formData.append('isbnNumber',isbnNumber)
//   formData.append('authorName',authorName)
//   formData.append('publishedAt',publishedAt)
//   formData.append('image',image)
//   formData.append('publication',publication)
//    const response = await axios.post('http://localhost:3000/book',formData)
//  }

const navigate = useNavigate()
const [data,setData] = useState({
  bookName : '',
  bookPrice : '',
  isbnNumber : null,
  authorName : '',
  publishedAt : '',
  publication : ''
})
  const [image,setImage] = useState(null)
  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({
      ...data,
      [name] : value
    })
  
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    
    Object.entries(data).forEach(([key,value])=>{
      formData.append(key,value)
    })
    formData.append('image',image)
  
    const response = await axios.post("https://basic-node-48px.onrender.com/book",formData)
    if(response.status === 200){
      navigate("/")
    }else{
      alert("Something went wrong")
    }

    
  
  }

  return (
    <>
    <Navbar />
    <div class="flex flex-col justify-center font-[sans-serif] p-4">
      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div class="text-center mb-12 font-bold text-purple-400"> AddBook
          
        </div>

        <form onSubmit={handleSubmit}>
          <div class="space-y-6">
            <div>
              <label htmlFor="bookName" class="text-gray-800 text-sm mb-2 block">BookName</label>
              <input name="bookName" id ="bookName"  type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Book Name"  onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="bookPrice"  class="text-gray-800 text-sm mb-2 block">Book Price</label>
              <input name="bookPrice" id ="bookPrice"  type="number" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Book Price" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="isbnNumber"  class="text-gray-800 text-sm mb-2 block">ISBN Number</label>
              <input name="isbnNumber" id ="isbnNumber"  type="number" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter ISBN Number" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="authorName" class="text-gray-800 text-sm mb-2 block">Author Name</label>
              <input name="authorName" id ="authorName"  type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Author Name" onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="publication"  class="text-gray-800 text-sm mb-2 block">Publication</label>
              <input name="publication" id ="publication"  type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Publication" onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="publishedAt"  class="text-gray-800 text-sm mb-2 block">Published At</label>
              <input name="publishedAt" id ="publishedAt"  type="date" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Published Date" onChange={handleChange}/>
            </div>
            
            <div>
              <label htmlFor="image" class="text-gray-800 text-sm mb-2 block">Image</label>
              <input name="image" id ="bookImage" type="file" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Add Image" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
          </div>

          <div class="!mt-12">
            <button type="submit" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Add Book
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
   
    <Footer />
    
    </>
  )
}

export default AddBook