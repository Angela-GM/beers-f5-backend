import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { beers } from '../../data/data';

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
    // Generar un nuevo ID para la cerveza
    const newBeerId = this._idGenerator();

    // Crear un nuevo objeto de cerveza con el ID generado y los datos proporcionados
    const newBeer: CreateBeerDto = {
      _id: newBeerId,
      ...createBeerDto,
      image_url: '',
      expireAt: '',
      __v: 0,
    };

    // Agregar la nueva cerveza al arreglo de cervezas existentes
    beers.push(newBeer);

    // Devolver la cerveza recién creada
    return newBeer;
  }

  findAll() {
    return beers;
  }

  findOne(id: number) {
    return `This action returns a #${id} beer`;
  }

  update(id: number, updateBeerDto: UpdateBeerDto) {
    return `This action updates a #${id} beer`;
  }

  remove(id: number) {
    return `This action removes a #${id} beer`;
  }
}
