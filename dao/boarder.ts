import db from '../database/db';

class BoarderDAO {
  async createBoarder(address: string, user_id: number) {
    const [id] = await db('Boarder').insert({
      address,
      user_id,
    }).returning('id')

    return id;
  }
}

export default new BoarderDAO();