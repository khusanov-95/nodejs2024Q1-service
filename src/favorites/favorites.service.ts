import { Injectable } from '@nestjs/common';
import { Album } from 'src/album/album.interface';
import { Artist } from 'src/artist/artist.interface';
import { albumDB, artistDB, favoritesDB, trackDB } from 'src/db/fakeDB';
import { Track } from 'src/track/track.interface';

@Injectable()
export class FavoritesService {
  find() {
    return favoritesDB;
  }

  addTrack(id: string): Track {
    const track = trackDB.find((track) => track.id === id);
    if (track) {
      favoritesDB.tracks.push(track);
      return track;
    }
  }

  removeTrack(id: string) {
    const trackIndex = favoritesDB.tracks.findIndex((track) => track.id === id);
    if (trackIndex >= 0) {
      favoritesDB.tracks.splice(trackIndex, 1);
    }
  }

  addAlbum(id: string): Album {
    const album = albumDB.find((album) => album.id === id);
    if (album) {
      favoritesDB.albums.push(album);
      return album;
    }
  }

  removeAlbum(id: string) {
    const albumIndex = favoritesDB.albums.findIndex((album) => album.id === id);
    if (albumIndex >= 0) {
      favoritesDB.albums.splice(albumIndex, 1);
    }
  }

  addArtist(id: string): Artist {
    const artist = artistDB.find((artist) => artist.id === id);
    if (artist) {
      favoritesDB.artists.push(artist);
      return artist;
    }
  }

  removeArtist(id: string) {
    const artistIndex = favoritesDB.artists.findIndex(
      (artist) => artist.id === id,
    );
    if (artistIndex >= 0) {
      favoritesDB.artists.splice(artistIndex, 1);
    }
  }
}
