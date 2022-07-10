import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { DeleteResponse, PaginatedResponseTracks, Track } from 'src/graphql';

@Injectable()
export class TracksService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.TRACKS_URL,
    });
  }

  async get(id: string): Promise<Track> {
    const track = (await this.client.get(`/${id}`)).data;
    return { ...track, id };
  }

  async getAll(args): Promise<PaginatedResponseTracks> {
    const res = (
      await this.client.get('', {
        params: {
          limit: args?.limit ?? 0,
          offset: args?.offset ?? 0,
        },
      })
    ).data;

    const mapedTracks = [...res?.items].map((track) => ({
      ...track,
      id: track?._id,
    }));
    res.items = mapedTracks;
    return res;
  }

  async create(payload, token: string): Promise<Track> {
    const track = (
      await this.client.post('', payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...track, id: track?._id };
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

  async update(id: string, payload, token: string): Promise<Track> {
    const track = (
      await this.client.put(`/${id}`, payload, {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return { ...track, id };
  }
}
