import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { FavoritesResponse } from 'src/graphql';

@Injectable()
export class FavouritesService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVOURITES_URL,
    });
  }

  async add(payload, token): Promise<FavoritesResponse> {
    return (
      await this.client.put('/add', payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
  }

  async getAll(token): Promise<FavoritesResponse> {
    return (
      await this.client.get('', {
        headers: {
          Authorization: token,
        },
      })
    ).data;
  }
}
