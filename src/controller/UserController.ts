import { getRepository } from "typeorm"
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { identifications } from "../entity/identification"

export class UserController {

    // private userRepository = AppDataSource.manager.save(identifications)

    async all(request: Request, response: Response, next: NextFunction) {
        const all = await AppDataSource.manager.save(
            await AppDataSource.manager.find(identifications)
        )
        return all;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
            const one = await AppDataSource.manager.save(
                await AppDataSource.manager.findOne(identifications, { where: { id: request.params.id } })
            )
            return one;
        } catch (error) {
            error.message = "User not found";
            response.status(404).json(error);
        }

    }

    async save(request: Request, response: Response, next: NextFunction) {
        const save = await AppDataSource.manager.save(
            await AppDataSource.manager.create(identifications,
                request.body
            )
        )
        return save;
    }

    async put(request: Request, response: Response, next: NextFunction) {
        try {
            const one = await AppDataSource.manager.save(
                await AppDataSource.manager.findOne(identifications, { where: { id: request.params.id } })
            )
            if (one) {
                const { id } = one;
                await AppDataSource.manager.save(
                    await AppDataSource.manager.update(identifications,id , request.body)
                )
            }
        } catch (error) { 
            return;
        } 
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            const one = await AppDataSource.manager.save(
                await AppDataSource.manager.findOne(identifications, { where: { id: request.params.id } })
            )
            if (one) {
                const { id } = one;
                await AppDataSource.manager.save(
                    await AppDataSource.manager.delete(identifications, { id })
                )
            }
        } catch (error) { 
            return;
        } 
    }
}