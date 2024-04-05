import Statement from "../models/statement.js";
import { errorHandler } from "../utils/errorHandler.js";
import { validateStatement } from "../utils/validateStatement.js";

export const statementTest = async (req, res) => {
  res.send('Statement test');
}

export const createStatement = async (req, res) => {
  try {
    const statement = req.body;

    if(!validateStatement(statement)){
      errorHandler(res, 400, 'Invalid statement');
    }

    const savedStatement = await Statement.create(statement);
    res.status(201).json(savedStatement);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};
