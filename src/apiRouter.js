import express from 'express';
import authorRouter from './authorRouter.js';
import cors from 'cors'

// Andiamo a mettere tutte le nostre chiamate CRUD in una sotto-directory (API)
const apiRouter = express.Router()

apiRouter.use(express.json())

apiRouter.use(cors())

apiRouter.use('/authors', authorRouter)

export default apiRouter