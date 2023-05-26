import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'
const initialState=[{
    id:uuidv4(),
    title:"Hello",
    description:"loremempsum something is done and i can't do anything"
}
]
export const PostSlice = createSlice({
 name:'post',
 initialState,
 reducers:{
    // logic to add contact
    addPost:(state,action)=>{
     const{title,description}=action.payload;
     const newPost={
      "id":uuidv4(),
      "title":title,
      "description":description
     };
     state.unshift(newPost);
    },
    // to edit post 
    editPost:(state,action)=>{
        const{title,description,id}=action.payload;
        for(let i=0;i<state.length;i++){
            if(state[i].id===id){
                state[i].title=title;
                state[i].description=description;
            }
        }
    },
    // to delete contact 
    deletePost:(state,action)=>{
         return state.filter((item)=>{return item.id!==action.payload})
         // testing state
         console.log(state)
    }
 }
})
export const {addPost,editPost,deletePost}=PostSlice.actions;
export default PostSlice.reducer;