import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Postphp from '../models/post-modal.js';

const allPost = [];

function Post(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

const postRouter = express.Router();

postRouter.get('/posts', (req, res) => {
  res.send('Hello World');
});



postRouter.post('/create', (req, res, next) => {
  const { title, content } = req.body;
  try {
    if (title && content) {
      console.log(`New Post: ${title}`);
      const id = uuidv4();
      const newPost = Postphp.create({
        id: id,
        title: title,
        content: content,
      });
      allPost.push(newPost);

      return res.status(201).json({ message: 'Post Created!' });
    } else {
      return next('Error: Missing Data');
    }
  } catch (error) {
    console.error(error);
  }
});


postRouter.get('/posts/:id', (req, res) => {
  try {
    const postId = req.params.id;
    const postIndex = allPost.findIndex(post => post.id.toLowerCase() === postId.toLowerCase());

    if (postIndex !== -1) {
      res.json(allPost[postIndex]);
    } else {
      throw new Error('Post not found');
    }
  } catch (error) {
    console.error(error);
  }
});

export default postRouter;
