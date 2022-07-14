import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Album, DeleteResponse, PaginatedResponseAlbums } from 'src/graphql';

@Injectable()
export class AlbumsService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUMS_URL,
    });
  }

  async get(id: string): Promise<Album> {
    const album = (await this.client.get(`/${id}`)).data;
    return { ...album, id };
  }

  async getAll(args): Promise<PaginatedResponseAlbums> {
    const res = (
      await this.client.get('', {
        params: {
          limit: args?.limit ?? 0,
          offset: args?.offset ?? 0,
        },
      })
    ).data;

    const mapedAlbums = [...res?.items].map((album) => ({
      ...album,
      id: album?._id,
    }));
    res.items = mapedAlbums;
    return res;
  }

  async create(args, token): Promise<Album> {
    const album = (
      await this.client.post('', args, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...album, id: album?._id };
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
    const album = (
      await this.client.put(`/${id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...album, id };
  }
}
