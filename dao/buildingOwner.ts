import db from "../database/db";

class BuildingOwnerDAO {
  async createBuildingOwner(address: string, user_id: number) {
    const [id] = await db('BuildingOwner').insert({
      address,
      user_id,
    }).returning('id')

    return id;
  }
}

export default new BuildingOwnerDAO();