import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiveComplimentsServices {
    async execute(user_id: string){
        const complimentsREpositories = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsREpositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments
    }
}

export { ListUserReceiveComplimentsServices }