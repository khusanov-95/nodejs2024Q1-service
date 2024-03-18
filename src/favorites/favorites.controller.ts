import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  findAllFavorites() {
    return this.favoritesService.find();
  }

  @Post('/track/:id')
  addTrack(@Param('id', new ParseUUIDPipe()) id: string) {
    this.favoritesService.addTrack(id);
  }

  @Delete('/track/:id')
  removeTrack(@Param('id', new ParseUUIDPipe()) id: string) {
    this.favoritesService.removeTrack(id);
  }

  @Post('/album/:id')
  addAlbum(@Param('id', new ParseUUIDPipe()) id: string) {
    this.favoritesService.addAlbum(id);
  }

  @Delete('/album/:id')
  removeAlbum(@Param('id', new ParseUUIDPipe()) id: string) {
    this.favoritesService.removeAlbum(id);
  }

  @Post('/artist/:id')
  addArtist(@Param('id', new ParseUUIDPipe()) id: string) {
    this.favoritesService.addArtist(id);
  }

  @Delete('/artist/:id')
  removeArtist(@Param('id', new ParseUUIDPipe()) id: string) {
    this.favoritesService.removeArtist(id);
  }
}
