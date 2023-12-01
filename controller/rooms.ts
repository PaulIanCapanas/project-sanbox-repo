import express from 'express';
import RoomService from '../service/rooms';

class RoomController {
  async createRoom(req: express.Request, res: express.Response) {
    try {
      const id = await RoomService.createRoom(req.body);
      res.status(201).json({id});
    } catch(err) {
      console.log(err);
      res.status(500).json({"something went wrong": err});
    }
  }
}

export default new RoomController();