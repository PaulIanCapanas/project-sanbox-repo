import UserDAO from "../dao/user";

interface IPersonData {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
  user_type: string;
}

class UserService {
  async createUser(personData: IPersonData) {
    const { first_name, last_name, email, date_of_birth, user_type } = personData;
    return UserDAO.createUser(first_name, last_name, email, date_of_birth, user_type);
  }
}

export default new UserService();