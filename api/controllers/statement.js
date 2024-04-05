import Statement from "../models/statement.js";
import { errorHandler } from "../utils/errorHandler.js";
import { validateStatement } from "../utils/validateStatement.js";

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

export const getAllStatements = async (req, res) => {
  try {
    const statements = await Statement.find();

    if (statements.length === 0) {
      errorHandler(res, 404, 'No statements found');
    }
    
    res.status(200).json(statements);
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
}
