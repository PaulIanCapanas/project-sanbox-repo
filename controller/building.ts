import express from "express";
import BuildingService from '../service/building';

class BuildingController {
  async createBuilding(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingService.createBuilding(req.body);
      res.status(201).json({id});
    } catch(err) {
      console.log(err);
      res.status(500).json({"something went wrong": err});
    }
  }
}

export default new BuildingController();