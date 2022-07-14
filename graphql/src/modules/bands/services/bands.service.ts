import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Band, DeleteResponse, PaginatedResponseBands } from 'src/graphql';

@Injectable()
export class BandsService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BANDS_URL,
    });
  }

  async get(id: string): Promise<Band> {
    const band = (await this.client.get(`/${id}`)).data;

    return { ...band, id };
  }

  async getAll(args): Promise<PaginatedResponseBands> {
    const res = (
      await this.client.get('', {
        params: {
          limit: args?.limit ?? 0,
          offset: args?.offset ?? 0,
        },
      })
    ).data;

    const mapedBands = [...res.items].map((band) => ({
      ...band,
      id: band?._id,
    }));

    res.items = mapedBands;
    return res;
  }

  async create(args, token): Promise<Band> {
    const band = (
      await this.client.post('', args, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...band, id: band?._id };
  }

  async delete(id: string, token: string): Promise<DeleteResponse> {
    return (
      await this.client.delete(`/${id}`, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
  }

  async update(id: string, payload, token) {
    const band = (
      await this.client.put(`/${id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...band, id };
  }
}
