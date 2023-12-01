import RoomDAO from "../dao/rooms";

interface IRoomData {
  description: string;
  type: string;
  status: string;
}

class RoomService {
  async createRoom(roomData: IRoomData) {
    const { description, type, status } = roomData;
    return RoomDAO.createRoom(description, type, status);
  }
}

export default new RoomService();