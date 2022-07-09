import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { User } from 'src/graphql';

@Injectable()
export class UsersService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.USERS_URL,
    });
  }

  async getUser(id: string): Promise<User> {
    return (await this.client.get(`/${id}`)).data;
  }

  async login(loginDTO): Promise<{ jwt: string }> {
    return (await this.client.post('/login', loginDTO)).data;
  }

  async register(newUserDTO): Promise<User> {
    const user = (await this.client.post('/register', newUserDTO)).data;

    return { ...user, id: user._id };
  }
}
