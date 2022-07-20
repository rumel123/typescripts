import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { identifications } from "./entity/identification"

function errorHandler(e,req,res,next) {
res.status(e.statusCode || 500).send(e.message);
}

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, async(req: Request, res: Response, next: Function) => {
            const result = await (new (route.controller as any))[route.action](req, res, next)
            try {
                res.json(result) 
            } catch (err) {
                next(err)
            }
        })
    })

    // setup express app here
    // ...

    //middleware
    app.use(errorHandler);
    // start express server
    app.listen(3000)
     
     

    console.log("Express server has started on port 3000. Open http://localhost:3000/identification to see results")

}).catch(error => console.log(error))
