import { getRows, getRowById, addNewRow, getRowsFilter } from '../controllers/rowController'

const rowRoute = (app) => {

    app.route('/rows')
        .post(addNewRow)
        .get(getRows)

    app.route('/rows/:rowId')
        .get(getRowById)

    app.route('/rowsFilter/:rowTitle')
      .get(getRowsFilter)

}

export default rowRoute;