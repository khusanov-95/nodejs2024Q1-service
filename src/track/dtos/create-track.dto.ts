import { IsString } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  name: string; // previous password

  @IsString()
  artistId: string | null; // refers to Artist

  @IsString()
  albumId: string | null; // refers to Album

  @IsString()
  duration: number; // integer number
}
