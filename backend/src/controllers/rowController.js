import mongoose from 'mongoose';
import { RowSchema } from '../models/rowModel'
const Row = mongoose.model('Row', RowSchema);

export const getRows = (req,res) => {
    Row.find()
        .then((rows) => {
            return res.json(rows)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}

export const getRowById = (req,res) => {
    Row.findById(req.params.rowId)
        .then((row) => {
            return res.json(row)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}

export const addNewRow = (req,res) => {
    let newRow = new Row(req.body);
    newRow.save()
        .then(() => {
            return res.send(200)
        })
        .catch(() => {
            return res.send(400, "Bad request")
        })
    
}

export const getRowsFilter = (req,res) => {
    const appname = req.params.rowTitle
    Row.find({ title: { $regex: RegExp(appname, "i") }})
        .then((foundRows) => {
            return res.json(foundRows)
        })
        .catch((error) => {
            return res.sendStatus(400)
        })
}