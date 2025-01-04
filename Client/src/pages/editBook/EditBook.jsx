import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EditBook = () => {

  const {id} = useParams()
  console.log(id)

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
        
          const response = await axios.patch("https://basic-node-48px.onrender.com/book/"+ id, formData)
          if(response.status === 200){
            navigate("/book/" + id)
          }else{
            alert("Something went wrong")
          }
    }

    const fetchbook=async()=>{
          const response = await axios.get("https://basic-node-48px.onrender.com/book/" + id)
          if(response.status === 200){
            console.log(response.data.data)//yo data chai backend ko data vanne bata aako ho
              setData(response.data.data)
          }
    }
    useEffect(()=>{
      fetchbook
    },[])

  return (
   <>
   
   <Navbar />
    <div class="flex flex-col justify-center font-[sans-serif] p-4">
      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div class="text-center mb-12 font-bold text-purple-400"> Edit Book
          
        </div>

        <form onSubmit={handleSubmit}>
          <div class="space-y-6">
            <div>
              <label htmlFor="bookName" class="text-gray-800 text-sm mb-2 block">Book Name</label>
              <input name="bookName" id ="bookName" value={data.bookName} type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Book Name"  onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="bookPrice"  class="text-gray-800 text-sm mb-2 block">Book Price</label>
              <input name="bookPrice" id ="bookPrice" value={data.bookPrice}  type="number" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Book Price" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="isbnNumber"  class="text-gray-800 text-sm mb-2 block">ISBN Number</label>
              <input name="isbnNumber" id ="isbnNumber" value={data.isbnNumber}   type="number" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter ISBN Number" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="authorName" class="text-gray-800 text-sm mb-2 block">Author Name</label>
              <input name="authorName" id ="authorName" value={data.authorName}  type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Author Name" onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="publication"  class="text-gray-800 text-sm mb-2 block">Publication</label>
              <input name="publication" id ="publication" value={data.publication}  type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Publication" onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="publishedAt"  class="text-gray-800 text-sm mb-2 block">Published At</label>
              <input name="publishedAt" id ="publishedAt" value={data.publishedAt}  type="date" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Published Date" onChange={handleChange}/>
            </div>
            
            <div>
              <label htmlFor="image" class="text-gray-800 text-sm mb-2 block">Image</label>
              <input name="image" id ="bookImage" type="file" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Add Image" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
          </div>

          <div class="!mt-12">
            <button type="submit" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Edit Book
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

export default EditBook