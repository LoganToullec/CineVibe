import mongoose from "mongoose";
const Schema = mongoose.Schema
export const PageSchema = new Schema({
    appName: String,
    rowsId: [String]
})