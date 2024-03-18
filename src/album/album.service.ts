import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { albumDB } from 'src/db/fakeDB';
import { v4 as uuidv4 } from 'uuid';
import { UpdateAlbumDto } from './dtos/update-album.dto';
import { Album } from './album.interface';

@Injectable()
export class AlbumService {
  create(name, year, artistId) {
    const id = uuidv4();

    const newAlbum = {
      id,
      name,
      year,
      artistId,
    };

    albumDB.push(newAlbum);
    return newAlbum;
  }

  update(id: string, body: UpdateAlbumDto) {
    const album = albumDB.find((album) => album.id === id);

    if (!album) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    Object.assign(album, body);

    return album;
  }

  find(): Album[] {
    return albumDB;
  }

  findOne(id: string): Album {
    const album = albumDB.find((user) => user.id === id);
    if (!album) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return album;
  }

  remove(id: string) {
    const albumIndex = albumDB.findIndex((album) => album.id === id);

    if (albumIndex <= 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    albumDB.splice(albumIndex, 1);
    return true;
  }
}
