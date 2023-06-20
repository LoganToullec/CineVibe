import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const MovieSchema = new Schema({
    title: {
        type: String
    },
    actors: {
        type: [String]
    },
    coverArt: {
        type: String
    },
    verticalPoster: {
        type: String
    },
    duration: {
        type: String
    },
    trailerId: {
        type: String
    },
    grade: {
        type: String
    },
    year: {
        type: String
    },
    specs: {
        type: [String]
    },
    genres: {
        type: [String]
    },
    desc: {
        type: String
    }

})