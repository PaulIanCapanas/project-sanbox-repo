import express from "express"
import BoarderService from "../service/boarder"

class BoarderController {
  async createBoarder(req: express.Request, res: express.Response) {
    try {
      const id = await BoarderService.createBoarder(req.body);
      res.status(201).json({id})
    } catch(err) {
      console.log(err)
      res.status(500).json({"somethin went wrong": err})
    }
  }
}

export default new BoarderController();