import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto';

@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Post() //new beer
  create(@Body() createBeerDto: CreateBeerDto) {
    return this.beersService.create(createBeerDto);
  }

  @Get() //find all beers
  findAll() {
    return this.beersService.findAll();
  }

  @Get('random') //find random id
  findRandom() {
    return this.beersService.findRandom();
  }

  @Get(':id') //find by id
  findOne(@Param('id') id: string) {
    return this.beersService.findOne(id);
  }
}
