import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Artist, DeleteResponse, PaginatedResponseArtists } from 'src/graphql';

@Injectable()
export class ArtistsService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTISTS_URL,
    });
  }

  async get(id: string): Promise<Artist> {
    const artist = (await this.client.get(`/${id}`)).data;
    return { ...artist, id };
  }

  async getAll(args): Promise<PaginatedResponseArtists> {
    const res = (
      await this.client.get('', {
        params: {
          limit: args?.limit ?? 0,
          offset: args?.offset ?? 0,
        },
      })
    ).data;

    const mapedArtists = [...res?.items].map((artist) => ({
      ...artist,
      id: artist?._id,
    }));
    res.items = mapedArtists;
    return res;
  }

  async create(args, token): Promise<Artist> {
    const artist = (
      await this.client.post('', args, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...artist, id: artist?._id };
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
    const artist = (
      await this.client.put(`/${id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...artist, id };
  }
}
