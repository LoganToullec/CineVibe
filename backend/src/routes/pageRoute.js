import { getPages, addPage, getPageByAppName } from '../controllers/pageController'

const pageRoute = (app) => {

    app.route('/pages')
        .get(getPages)
        .post(addPage)

    app.route('/pages/:appName')
        .get(getPageByAppName)
}

export default pageRoute;