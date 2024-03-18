import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  ParseUUIDPipe,
  ValidationPipe,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dtos/update-artist.dto';
import { UpdateArtistDto } from './dtos/create-artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get('/:id')
  findTrack(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.artistService.findOne(id);
  }

  @Get()
  findAllTracks() {
    return this.artistService.find();
  }

  @Post()
  createTrack(@Body(new ValidationPipe()) body: CreateArtistDto) {
    const { name, grammy } = body;
    this.artistService.create(name, grammy);
  }

  @Put('/:id')
  updateTrack(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateArtistDto,
  ) {
    this.artistService.update(id, body);
  }

  @Delete('/:id')
  removeTrack(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.artistService.remove(id);
  }
}
