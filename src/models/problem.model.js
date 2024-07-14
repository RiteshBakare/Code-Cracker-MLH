import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        problemStatement: {
            type: String,
            required: true,
        },
        example: {
            type: String,
            required: true,
        },
        constraints: {
            type: String,
            required: true,
        },
        difficultyLevel: {
            type: String,
            enum: ["Easy","Medium","Hard"],
            required: true,
        },
        // ----------------------------------------------------------------
        pythonSolution: {
            type: String,
            required: true,
        },
        pythonDriverCode: {
            type: String,
            required: true,
        },
        pythonStarterCode: {
            type: String,
            required: true,
        },
        // // ----------------------------------------------------------------
    },
    {
        timestamps: true,
    }
);

export const Problem = mongoose.model("Problem", problemSchema);
