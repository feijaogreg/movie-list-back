import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmdbService } from './omdb/omdb.service';
import { MovieController } from './movie/movie.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MovieController],
  providers: [AppService, OmdbService],
})
export class AppModule {}
