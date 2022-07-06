
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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

export interface IQuery {
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    createAlbum(name?: Nullable<string>, released?: Nullable<number>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, tracksIds?: Nullable<Nullable<string>[]>, genresIds?: Nullable<Nullable<string>[]>, image?: Nullable<string>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, name?: Nullable<string>, released?: Nullable<number>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, tracksIds?: Nullable<Nullable<string>[]>, genresIds?: Nullable<Nullable<string>[]>, image?: Nullable<string>): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(firstName?: Nullable<string>, secondName?: Nullable<string>, middleName?: Nullable<string>, birthDate?: Nullable<string>, birthPlace?: Nullable<string>, country?: Nullable<string>, bandsIds?: Nullable<Nullable<string>[]>, instruments?: Nullable<Nullable<string>[]>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, firstName?: Nullable<string>, secondName?: Nullable<string>, middleName?: Nullable<string>, birthDate?: Nullable<string>, birthPlace?: Nullable<string>, country?: Nullable<string>, bandsIds?: Nullable<Nullable<string>[]>, instruments?: Nullable<Nullable<string>[]>): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(name?: Nullable<string>, origin?: Nullable<string>, membersIds?: Nullable<Nullable<string>[]>, website?: Nullable<string>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, name?: Nullable<string>, origin?: Nullable<string>, membersIds?: Nullable<Nullable<string>[]>, website?: Nullable<string>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Band> | Promise<Nullable<Band>>;
    addTrackToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addBandToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addArtistToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    addGenreToFavourites(id: string): Nullable<Favourites> | Promise<Nullable<Favourites>>;
    createGenre(name?: Nullable<string>, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, name?: Nullable<string>, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(title: string, albumId?: Nullable<string>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, duration?: Nullable<number>, released?: Nullable<number>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, title: string, albumId?: Nullable<string>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, duration?: Nullable<number>, released?: Nullable<number>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Track> | Promise<Nullable<Track>>;
    register(email: string, firstName?: Nullable<string>, lastName?: Nullable<string>, password?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
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

export interface Member {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
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

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
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

export interface User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

type Nullable<T> = T | null;
