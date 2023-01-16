import express, { Request, Response } from "express";
require("../database/config");

const _db = require('../database/schema');

/* Router Definition */
export const _router = express.Router();

/* Controller Definitions */
// GET data
_router.get("/getData", async (req: Request, res: Response) => {
    try {
        let r: [] = await _db.find();
        res.status(200).send(r);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST data
_router.post("/insertData", async (req: Request, res: Response) => {
    try {
        if (/\d/.test(req.body.first_name) || /\d/.test(req.body.last_name)) return res.status(400).json('Name contains a number.');

        if (!(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(req.body.emailid))) return res.status(400).json('Email id is not valid.');

        let _d: any = new _db(req.body);
        const r: {} = await _d.save();
        res.status(201).json(r);
        
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});