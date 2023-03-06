const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/user.controller');

userRouter.get('/', userController.getProfile);
userRouter.put('/', userController.updateProfile);
userRouter.delete('/', userController.deleteProfile);

module.exports = userRouter;
