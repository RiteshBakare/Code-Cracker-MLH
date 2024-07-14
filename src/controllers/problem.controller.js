import { Problem } from "../models/problem.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllProblems = asyncHandler(async (req, res) => {
    const problems = await Problem.find().select(
        "_id title problemStatement example constraints difficultyLevel"
    );
    return res.status(200).json({ problems });
});

const getProblemById = asyncHandler(async (req, res) => {
    const problemID = req.params.id;

    const problem = await Problem.findById(problemID).select(
        "-pythonSolution -pythonDriverCode"
    );

    return res.status(200).json(problem);
});

export {getAllProblems, getProblemById };
