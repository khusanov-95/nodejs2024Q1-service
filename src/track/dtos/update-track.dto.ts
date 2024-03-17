import { IsString } from 'class-validator';

export class UpdateTrackDto {
  @IsString()
  name: string;

  @IsString()
  artistId: string | null; // refers to Artist

  @IsString()
  albumId: string | null; // refers to Album

  @IsString()
  duration: number; // integer number
}
