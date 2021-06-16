import { Agency } from 'src/app/agency/model/agency';

export class Agent {
  id: number;
  nom: string;
  prenom: string;
  cin: string;
  adresse: string;
  telephone: string;
  email: string;
  agence: Agency;
  username: string;
  password: string;
}
