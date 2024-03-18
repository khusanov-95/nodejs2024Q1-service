import { IsNumber, IsString } from 'class-validator';

export class createAlbumDto {
  @IsString()
  name: string;

  @IsNumber()
  year: number;

  @IsString()
  artistId: string | null;
}
