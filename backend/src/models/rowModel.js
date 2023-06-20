import mongoose from 'mongoose';
import MovieSchema from './cineVibeModel'
const Schema = mongoose.Schema;
export const RowSchema = new Schema({
    title: {
        type: String
    },
    type: {
        type: String
    },
    elements: {
        type: [
            {
                _id: String,
                title: String,
                actors: [String],
                coverArt: String,
                verticalPoster: String,
                duration: String,
                trailerId: String,
                grade: String,
                year: String,
                specs: [String],
                genres: [String],
                desc: String,
                _v: Number
            }
        ]
    },
})
