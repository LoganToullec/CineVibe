import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    watchList: {
        type: [String]
    }
})