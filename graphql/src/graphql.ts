
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface MemberInput {
    id: string;
    instrument?: Nullable<string>;
    year?: Nullable<string>;
}

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface PaginatedResponseAlbums {
    items?: Nullable<Nullable<Album>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface IQuery {
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<PaginatedResponseAlbums> | Promise<Nullable<PaginatedResponseAlbums>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<PaginatedResponseArtists> | Promise<Nullable<PaginatedResponseArtists>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<PaginatedResponseBands> | Promise<Nullable<PaginatedResponseBands>>;
    favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<PaginatedResponseGenres> | Promise<Nullable<PaginatedResponseGenres>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<PaginatedResponseTracks> | Promise<Nullable<PaginatedResponseTracks>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<JwtData> | Promise<Nullable<JwtData>>;
}

export interface IMutation {
    createAlbum(name: string, released?: Nullable<number>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, trackIds?: Nullable<Nullable<string>[]>, genresIds?: Nullable<Nullable<string>[]>, image?: Nullable<string>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateAlbum(id: string, name?: Nullable<string>, released?: Nullable<number>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, trackIds?: Nullable<Nullable<string>[]>, genresIds?: Nullable<Nullable<string>[]>, image?: Nullable<string>): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(firstName: string, secondName: string, country: string, middleName?: Nullable<string>, birthDate?: Nullable<string>, birthPlace?: Nullable<string>, bandsIds?: Nullable<Nullable<string>[]>, instruments?: Nullable<Nullable<string>[]>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateArtist(id: string, firstName?: Nullable<string>, secondName?: Nullable<string>, middleName?: Nullable<string>, birthDate?: Nullable<string>, birthPlace?: Nullable<string>, country?: Nullable<string>, bandsIds?: Nullable<Nullable<string>[]>, instruments?: Nullable<Nullable<string>[]>): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(name: string, origin?: Nullable<string>, members?: Nullable<Nullable<MemberInput>[]>, website?: Nullable<string>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateBand(id: string, name?: Nullable<string>, origin?: Nullable<string>, members?: Nullable<Nullable<MemberInput>[]>, website?: Nullable<string>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Band> | Promise<Nullable<Band>>;
    addTrackToFavourites(id: string): Nullable<FavoritesResponse> | Promise<Nullable<FavoritesResponse>>;
    addBandToFavourites(id: string): Nullable<FavoritesResponse> | Promise<Nullable<FavoritesResponse>>;
    addArtistToFavourites(id: string): Nullable<FavoritesResponse> | Promise<Nullable<FavoritesResponse>>;
    addGenreToFavourites(id: string): Nullable<FavoritesResponse> | Promise<Nullable<FavoritesResponse>>;
    createGenre(name: string, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateGenre(id: string, name?: Nullable<string>, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(title: string, albumId?: Nullable<string>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, duration?: Nullable<number>, released?: Nullable<number>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateTrack(id: string, title?: Nullable<string>, albumId?: Nullable<string>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, duration?: Nullable<number>, released?: Nullable<number>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Track> | Promise<Nullable<Track>>;
    register(email: string, password: string, firstName: string, lastName: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface PaginatedResponseArtists {
    items?: Nullable<Nullable<Artist>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Member {
    id: string;
    artist?: Nullable<Artist>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface PaginatedResponseBands {
    items?: Nullable<Nullable<Band>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface FavoritesResponse {
    userId?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    artistsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface DeleteResponse {
    acknowledged?: Nullable<string>;
    deletedCount?: Nullable<number>;
}

export interface PaginatedResponseGenres {
    items?: Nullable<Nullable<Genre>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface PaginatedResponseTracks {
    items?: Nullable<Nullable<Track>[]>;
    offset?: Nullable<number>;
    limit?: Nullable<number>;
    total?: Nullable<number>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface JwtData {
    jwt?: Nullable<string>;
}

type Nullable<T> = T | null;
