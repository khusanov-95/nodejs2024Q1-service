import { User } from '../user/user.interface';
import { Track } from '../track/track.interface';
import { Artist } from '../artist/artist.interface';
import { Album } from '../album/album.interface';
import { Favorites } from 'src/favorites/favorites.interface';

export const userDB: User[] = [];
export const trackDB: Track[] = [];
export const artistDB: Artist[] = [];
export const albumDB: Album[] = [];

export const favoritesDB: Favorites = {
  artists: [],
  albums: [],
  tracks: [],
};
