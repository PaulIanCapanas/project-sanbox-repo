import BuildingDAO from "../dao/building";

interface IBuildingData {
  name: string;
  address: string;
  user_id: number;
}

class BuildingService {
  async createBuilding(buildingData: IBuildingData) {
    const { name, address, user_id } = buildingData;
    return BuildingDAO.createBuilding(name, address, user_id);
  }
}

export default new BuildingService();