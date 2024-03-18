import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dtos/create-album.dto';
import { UpdateAlbumDto } from './dtos/update-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get('/:id')
  findAlbum(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Get()
  findAllAlbums() {
    return this.albumService.find();
  }

  @Post()
  createAlbum(@Body() body: CreateAlbumDto) {
    const { name, year, artistId } = body;
    this.albumService.create(name, year, artistId);
  }

  @Put('/:id')
  updateAlbum(@Param('id') id: string, @Body() body: UpdateAlbumDto) {
    this.albumService.update(id, body);
  }

  @Delete('/:id')
  removeAlbum(@Param('id') id: string) {
    return this.albumService.remove(id);
  }
}
