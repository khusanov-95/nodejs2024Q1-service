import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTrackDto } from './dtos/create-track.dto';
import { trackDB } from 'src/db/fakeDB';
import { UpdateTrackDto } from './dtos/update-track.dto';
import { Track } from './track.interface';

@Injectable()
export class TrackService {
  create(body: CreateTrackDto) {
    const id = uuidv4();

    const { name, artistId, albumId, duration } = body;

    const newTrack = {
      id,
      name,
      artistId,
      albumId,
      duration,
    };

    trackDB.push(newTrack);
    return newTrack;
  }

  update(id: string, body: UpdateTrackDto) {
    const track = trackDB.find((track) => track.id === id);

    if (!track) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    Object.assign(track, body);
    return track;
  }

  find(): Track[] {
    return trackDB;
  }

  findOne(id: string): Track {
    const track = trackDB.find((user) => user.id === id);
    if (!track) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return track;
  }

  remove(id: string) {
    const trackIndex = trackDB.findIndex((track) => track.id === id);
    if (trackIndex <= 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    trackDB.splice(trackIndex, 1);
    return true;
  }
}
