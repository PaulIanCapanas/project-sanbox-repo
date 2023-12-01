import BuildingOwner from "../dao/buildingOwner";

interface IBuildingOwnerData {
  address: string;
  user_id: number;
}

class BuildingOwnerService {
  async createBuildingOwner(buildingOwnerData: IBuildingOwnerData) {
    const { address, user_id } = buildingOwnerData;
    return BuildingOwner.createBuildingOwner(address, user_id);
  }
}

export default new BuildingOwnerService();