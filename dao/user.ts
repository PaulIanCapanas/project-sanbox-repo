import db from "../database/db";

class UserDAO {
  async createUser(first_name: string, last_name: string, email: string, date_of_birth: Date, user_type: string) {
    const [id] = await db('User').insert({
      first_name,
      last_name,
      email: email,
      date_of_birth,
      user_type,
    }).returning('id')

    return id;
  }
}

export default new UserDAO();