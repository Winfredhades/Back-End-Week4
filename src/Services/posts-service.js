import Post from "../modals/posts.js";

const createPost = async(pNewPost) =>{
    try{
        const newPost = await Post.create(pNewPost)
        return newPost
    }
    catch(eroor){

    }
}

export default {createPost};