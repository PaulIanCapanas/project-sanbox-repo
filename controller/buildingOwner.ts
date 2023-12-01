import express from "express"
import BuildingOwnerService from "../service/buildingOwner"

class BuildingOwnerController {
  async createBuildingOwner(req: express.Request, res: express.Response) {
    try {
      const id = await BuildingOwnerService.createBuildingOwner(req.body);
      res.status(201).json({id})
    } catch(err) {
      console.log(err)
      res.status(500).json({"somethin went wrong": err})
    }
  }
}

export default new BuildingOwnerController();