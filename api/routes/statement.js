import express from 'express';
import { createStatement, getAllStatements } from '../controllers/statement.js';

const router = express.Router();

router.post('/', createStatement);
router.get('/', getAllStatements);

export default router;
