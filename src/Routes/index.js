import express from 'express';

import author from './author.js';
import user from './user.js';
import comments from './comments.js';

const router = new express.Router();

router.use('/author', author);
router.use('/user', user);
router.use('/comments', comments);

export default router;
