import db from '../database/db';

class RoomDAO {
  async createRoom(description: string, type: string, status: string) {
    const [id] = await db('Room').insert({
      description,
      type,
      status,
    }).returning('id')
    return id;
  } 
}

export default new RoomDAO();