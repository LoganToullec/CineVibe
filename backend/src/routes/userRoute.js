import { addNewUser, getUserByEmail, updateUser, getUserById, addToWishList, removeFromWishList, getWishList } from "../controllers/userController";

const userRoute = (app) => {

    app.route('/users/create')
        .post(addNewUser)

    app.route('/users/:email')
        .get(getUserByEmail)

    app.route('/getUser/:id')
        .get(getUserById)

    app.route('/users/:userId')
        .put(updateUser)
    
    app.route('/users/wishList/:userId')
        .get(getWishList)

    app.route('/users/addToList')
        .post(addToWishList)

    app.route('/users/removeFromList')
        .post(removeFromWishList)
    
    
}

export default userRoute;

