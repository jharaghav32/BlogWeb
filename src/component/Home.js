import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {BiPencil} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import {deletePost,editPost} from '../features/PostSlice.js'
import Modal from './Modal.js';
import Navbar from './Navbar.js';
import AddNote from './AddNote.js';
import ShowAlert from './ShowAlert.js';

const Home = () => {
  const dispatch=useDispatch();
  
  const data = useSelector((ele) => { return ele });
  
  console.log(data);
  return (
    <div>
      <Navbar/>
      <AddNote/>
    <section className="text-gray-600 body-font">
        
      <div className="container px-5 py-24 mx-auto">
     
        <div className="flex flex-wrap -m-4">
          { data.map((ele,id)=>{
            return  <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{ele.title}</h1>
              <p className="leading-relaxed mb-3">{ele.description}</p>
              
              <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
               
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <AiOutlineDelete onClick={()=>{dispatch(deletePost(ele.id))}}/>
                </span>
              </div>
            </div>
          </div>} )}
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home