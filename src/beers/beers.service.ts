import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import * as data from '../../data/data.json';
import { Beer } from './entities/beer.entity';

@Injectable()
export class BeersService {
  _rndm(arr: any[]) {
    return Math.floor(Math.random() * arr.length);
  }
  _idGenerator() {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (
      timestamp +
      'xxxxxxxxxxxxxxxx'
        .replace(/[x]/g, function () {
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase()
    );
  }

  create(createBeerDto: CreateBeerDto) {
    const id = this._idGenerator();
    const newBeer: Beer = {
      _id: id,
      ...createBeerDto,
      image_url: '',
      expireAt: '',
      __v: 0,
    };
    if (typeof createBeerDto.attenuation_level !== 'number')
      throw new InternalServerErrorException();

    data.push(newBeer);
    return data.find((e) => e._id === id);
  }

  findAll() {
    return data;
  }

  findOne(id: string) {
    return data.find((element) => element._id === id);
  }

  findRandom() {
    return data[this._rndm(data)];
  }
}
