import express from 'express';
import { createStatement, statementTest } from '../controllers/statement.js';

const router = express.Router();

router.get('/', statementTest);
router.post('/', createStatement);

export default router;
