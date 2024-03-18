import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { albumDB, artistDB, favoritesDB, trackDB } from 'src/db/fakeDB';
import { v4 as uuidv4 } from 'uuid';
import { Artist } from './artist.interface';
import { UpdateArtistDto } from './dtos/create-artist.dto';

@Injectable()
export class ArtistService {
  create(name: string, grammy: boolean) {
    const id = uuidv4();
    const newArtist = { id, name, grammy };

    artistDB.push(newArtist);

    return newArtist;
  }

  update(id: string, body: UpdateArtistDto) {
    const artist = artistDB.find((track) => track.id === id);

    if (!artist) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    Object.assign(artist, body);
    return artist;
  }

  find(): Artist[] {
    return artistDB;
  }

  findOne(id: string): Artist {
    return artistDB.find((artist) => artist.id === id);
  }

  remove(id: string) {
    const artistIndex = artistDB.findIndex((track) => track.id === id);
    if (artistIndex <= 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    artistDB.splice(artistIndex, 1);

    return true;
  }
}
