import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel'
import { MovieSchema } from '../models/cineVibeModel'

const User = mongoose.model('Users', UserSchema);
const Movie = mongoose.model('Movies', MovieSchema);

export const addNewUser = (req,res) => {
    let newUser = new User(req.body);
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user == null) {
                newUser.save()
                    .then(() => {
                        return res.send(200)
                    })
                    .catch(() => {
                        return res.send(400, "Bad request")
                    })
            }
        })
        .catch(() => {
            res.send(400, "Bad request")
        })
    
}

export const getUserByEmail = (req,res) => {
    User.findOne({email: req.params.email})
        .then((user) => {
            return res.json(user)
        })
        .catch(() => {
            return res.send(400, "Bad request")
        })
}


export const getUserById = (req,res) => {
    User.findById(req.params.id)
        .then((user) => {
            return res.json(user)
        })
        .catch(() => {
            return res.send(400, "Bad request")
        })
}

export const updateUser = (req,res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false })
        .then(() => {
            return res.sendStatus(200)
        })
        .catch(() => {
            return res.sendStatus(400)
        })
}

export const addToWishList = (req, res) => {
    User.findById(req.body.userId)
        .then((user) => {

            let watchList = user.watchList            
            if(!watchList.includes(req.body.movieId)) {
                watchList.push(req.body.movieId)
            }

            User.findOneAndUpdate({ _id: req.body.userId }, {watchList: watchList}, { new: true, useFindAndModify: false })
                .then((user) => {
                    return res.sendStatus(200)
                })
                .catch(() => {
                    return res.sendStatus(400)
                })
    })
    .catch(() => {return res.sendStatus(400)})
}

export const removeFromWishList = (req, res) => {
    User.findById(req.body.userId)
        .then((user) => {
            let watchList = user.watchList
            let watchListNew = watchList.filter(movie => 
                movie !== req.body.movieId
            )
            User.findOneAndUpdate({ _id: req.body.userId }, {watchList: watchListNew}, { new: true, useFindAndModify: false })
                .then((user) => {
                    return res.sendStatus(200)
                })
                .catch(() => {
                    return res.sendStatus(400)
                })
    })
    .catch(() => {return res.sendStatus(400)})
    
}

export const getWishList = (req, res) => {
    let developedWatchList = []
    User.findById(req.params.userId)
        .then((user) => {
            
            let allWatchList = []
            Promise.all(user.watchList.map(movieId => {
                return Movie.findById(movieId).then(movie => {
                   allWatchList.push(movie)
                 });
             }))
             .then(() => {
                return res.json(allWatchList)
             })
        })
        .catch(() => {
            return res.sendStatus(400)
        })
}
