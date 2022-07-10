import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Genre, PaginatedResponseGenres } from 'src/graphql';

@Injectable()
export class GenresService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_URL,
    });
  }

  async get(id: string): Promise<Genre> {
    const genre = (await this.client.get(`/${id}`)).data;
    return { ...genre, id };
  }

  async getAll(args): Promise<PaginatedResponseGenres> {
    const res = (
      await this.client.get('', {
        params: {
          limit: args?.limit ?? 0,
          offset: args?.offset ?? 0,
        },
      })
    ).data;
    const mapedGenres = [...res.items].map((genre) => ({
      ...genre,
      id: genre?._id,
    }));
    res.items = mapedGenres;
    return res;
  }

  async create(args, token: string): Promise<Genre> {
    const genre = (
      await this.client.post(``, args, {
        headers: {
          Authorization: token,
        },
      })
    ).data;

    return { ...genre, id: genre?._id };
  }

  async delete(id: string, token: string): Promise<any> {
    return (
      await this.client.delete(`/${id}`, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
  }

  async update(id: string, payload, token: string): Promise<Genre> {
    const genre = (
      await this.client.put(`/${id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...genre, id };
  }
}
