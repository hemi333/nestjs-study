import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

// url의 entry point를 컨트롤
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesservice: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesservice.getAll();
  }

  // 'search'가 get(':id')보다 밑에 있으면 'search'를 id로 판단함 / expressjs, Nestjs 동일
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);

    return this.moviesservice.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesservice.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesservice.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesservice.update(movieId, updateData);
  }
}
