import express from "express";
import UserController from "../controller/user";
import BuildingOwnerController from "../controller/buildingOwner";
import BoarderController from "../controller/boarder";
import BuildingController from "../controller/building";
import RoomController from "../controller/rooms";

export const router = express.Router()

router.post('/test', UserController.createUser);
router.post('/test2', BuildingOwnerController.createBuildingOwner);
router.post('/test3', BoarderController.createBoarder);
router.post('/test4', BuildingController.createBuilding);
router.post('/test5', RoomController.createRoom);