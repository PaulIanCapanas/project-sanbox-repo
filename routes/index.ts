import express from "express";
import UserController from "../controller/user";
import BuildingOwnerController from "../controller/buildingOwner";
import BoarderController from "../controller/boarder";
import BuildingController from "../controller/building";
import RoomController from "../controller/rooms";

export const router = express.Router()

router.post('/create-user', UserController.createUser);
router.post('/create-building-owner', BuildingOwnerController.createBuildingOwner);
router.post('/create-boarder', BoarderController.createBoarder);
router.post('/create-building', BuildingController.createBuilding);
router.post('/create-room', RoomController.createRoom);