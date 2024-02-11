import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const allPost = [];

function Post(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

const postRouter = express.Router();

// Get all posts
postRouter.get('/', (req, res) => {
  res.json(allPost);
});
postRouter.get('/:id', (req, res) => {
  try {
    const postId = req.params.id;
    console.log(`Requested post ID: ${postId}`);
    
    const post = allPost.find(post => post.id === postId);

    if (post) {
      console.log('Found post:', post);
      return res.json(post);
    } else {
      console.log('Post not found');
      return res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new post
postRouter.post('/', (req, res, next) => {
  const { title, content } = req.body;

  try {
    if (title && content) {
      console.log(`New Post: ${title}`);
      const id = uuidv4();
      const newPost = new Post(id, title, content);
      allPost.push(newPost);

      

      const responsePost = {
        id: newPost.id,
        title: newPost.title,
        content: newPost.content,
      };

      return res.status(201).json({
        message: 'Post Created!',
        post: responsePost,
      });
    } else {
      return next('Error: Missing Data');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


postRouter.get('/:id', (req, res) => {
  try {
    const postId = req.params.id;
    const post = allPost.find(post => post.id === postId);

    if (post) {
      return res.json(post);
    } else {
      return res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});



export default postRouter;
