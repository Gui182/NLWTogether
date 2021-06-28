import { Request, Response } from "express";
import { ListUserReceiveComplimentsServices } from "../service/ListUserReceiveComplimentsService";


class ListUserReceiveComplimentsController {
    async handle(req: Request, res: Response){

        const { user_id } = req

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsServices()

        const compliments = await listUserReceiveComplimentsService.execute(user_id)

        return res.json(compliments)
    }
}

export { ListUserReceiveComplimentsController }