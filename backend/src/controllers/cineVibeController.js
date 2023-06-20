import mongoose from 'mongoose';
import { MovieSchema } from '../models/cineVibeModel'
const Movie = mongoose.model('Movies', MovieSchema);

export const addNewMovie = (req,res) => {
    let newMovie = new Movie(req.body);
    newMovie.save()
        .then(() => {
            return res.sendStatus(200)
        })
        .catch(() => {
            return res.send(400, "Bad request")
        })
}

export const getMovies = (req,res) => {
    Movie.find()
        .then((foundMovies) => {
            return res.json(foundMovies)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}

export const getMoviesFiltered = (req,res) => {
    const title = req.params.searchValue
    Movie.find({ title: { $regex: RegExp(title, "i") }})
        .then((foundMovies) => {
            return res.json(foundMovies)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}

export const getMovieWithId = (req,res) => {
    Movie.findById(req.params.movieId)
        .then((foundMovie) => {
            return res.json(foundMovie)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}

export const updateMovie = (req,res) => {
    Movie.findOneAndUpdate({ _id: req.params.movieId }, req.body, { new: true, useFindAndModify: false })
        .then(() => {
            return res.sendStatus(200)
        })
        .catch(() => {
            return res.sendStatus(400)
        })
}

export const deleteMovie = (req,res) => {
    Movie.deleteOne({ _id: req.params.movieId })
        .then(() => {
            return res.sendStatus(200)
        })
        .catch(() => {
            return res.sendStatus(400)
        })
}