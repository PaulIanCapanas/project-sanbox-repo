import BoarderDAO from "../dao/boarder";

interface IBoarderData {
  address: string;
  user_id: number;
}

class BoarderService {
  async createBoarder(boarderData: IBoarderData) {
    const { address, user_id } = boarderData;
    return BoarderDAO.createBoarder(address, user_id);
  }
}

export default new BoarderService();