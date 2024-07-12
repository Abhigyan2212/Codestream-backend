
import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router=express.Router();
import Book from "../model/book.model.js";

router.get("/", getBook);

router.post('/create-multiple', async (req, res) => {
    try {
      const books = req.body.books;
      const createdBooks = await Book.insertMany(books);
      res.status(201).json(createdBooks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;
