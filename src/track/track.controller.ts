import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { TrackService } from './track.service';
import { createTrackDto } from './dtos/create-track.dto';
import { UpdateTrackDto } from './dtos/update-track.dto';

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Get('/:id')
  findTrack(@Param('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Get()
  findAllTracks() {
    return this.trackService.find();
  }

  @Post()
  createTrack(@Body() body: createTrackDto) {
    this.trackService.create(body);
  }

  @Put('/:id')
  updateTrack(@Param('id') id: string, @Body() body: UpdateTrackDto) {
    this.trackService.update(id, body);
  }

  @Delete('/:id')
  removeTrack(@Param('id') id: string) {
    return this.trackService.remove(id);
  }
}
