// Lo mismo que el entity pero solo los items que se necesitan para crear una nueva cerveza
export class CreateBeerDto {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  attenuation_level: number;
  brewers_tips: string;
  contributed_by: string;
}
