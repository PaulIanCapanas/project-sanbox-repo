import db from '../database/db';

class BuildingDAO {
  async createBuilding(name: string, address: string, user_id: number) {
    const [id] = await db('Buildings').insert({
      name,
      address,
      user_id,
    }).returning('id')

    return id;
  }
}

export default new BuildingDAO();