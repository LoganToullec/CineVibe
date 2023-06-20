import mongoose from 'mongoose';
import { PageSchema } from '../models/pageModel'
const Page = mongoose.model('Page', PageSchema);

import { RowSchema } from '../models/rowModel'
const Row = mongoose.model('Row', RowSchema);


export const addPage = (req,res) => {
    let newPage = new Page(req.body);
    newPage.save()
        .then(() => {
            return res.sendStatus(200)
        })
        .catch(() => {
            return res.send(400, "Bad request")
        })
}

export const getPages = (req, res) => {
    Page.find()
        .then((pages) => {
            return res.json(pages)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}

export const getPageByAppName = (req, res) => {
    Page.findOne({appName: req.params.appName})
        .then((page) => {
            
            let allRows = []
            Promise.all(page.rowsId.map(rowId => {
                return Row.findById(rowId).then(row => {
                   allRows.push(row)
                 });
             }))
             .then(() => {
                return res.json(allRows)
             })

            

        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}
