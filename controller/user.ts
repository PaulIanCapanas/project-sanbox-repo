import express from "express"
import UserService from "../service/user"

class UserController {
  async createUser(req: express.Request, res: express.Response) {
    try {
      const id = await UserService.createUser(req.body);
      res.status(201).json({id})
    } catch(err) {
      console.log(err)
      res.status(500).json({"somethin went wrong": err})
    }
  }
}

export default new UserController();