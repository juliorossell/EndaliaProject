
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Utils } from '../../helpers/utils';
import { IUserInfo } from '../../interfaces/user-info';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  users: IUserInfo[] = [
    {
      phone: "61744290",
      email: "prueba@endalia.com",
      name: "Ignacio",
      lastName: "Abad Jiménez",
      imagenPath: "assets/avatars/male-01.jpg",
      password: "123",
      job: "Responsable de Desarrollo de RRHH",
    },
    {
      phone: "34871575",
      email: "prueba1@endalia.com",
      name: "Miguel Ángel",
      lastName: "Aguirre Rivera",
      password: "123",
      imagenPath: "assets/avatars/male-02.jpg",
      job: "Director Comercial",
    },
    {
      phone: "28322925",
      email: "prueba2@endalia.com",
      name: "Ángela",
      lastName: "Alcalá Ordoñez",
      password: "123",
      imagenPath: "assets/avatars/female-01.jpg",
      job: "Administrativo/a",
    },
    {
      phone: "28322925",
      email: "prueba3@endalia.com",
      name: "Pedro",
      lastName: "Antón Teruel",
      password: "123",
      imagenPath: "assets/avatars/male-03.jpg",
      job: "Operario Sección 2 Turno Tarde",
    },
    {
      phone: "28322925",
      email: "prueba4@endalia.com",
      name: "Juan Pedro",
      lastName: "Ariza Franco",
      password: "123",
      imagenPath: "assets/avatars/male-04.jpg",
      job: "Responsable de Proyecto",
    },
    {
      phone: "6781696",
      email: "prueba5@endalia.com",
      name: "Verónica",
      lastName: "Aguirre León",
      password: "123",
      imagenPath: "assets/avatars/female-02.jpg",
      job: "Operario Seccion 1",
    },
    {
      phone: "47278285",
      email: "prueba6@endalia.com",
      name: "Carlos",
      lastName: "Alcalá Herrera",
      password: "123",
      imagenPath: "assets/avatars/male-05.jpg",
      job: "Auditor de MedioAmbiente / Encargado de Producción",
    },
    {
      phone: "28322925",
      email: "prueba7@endalia.com",
      name: "Laura",
      lastName: "Alvarez Pineda",
      password: "123",
      imagenPath: "assets/avatars/female-03.jpg",
      job: "Auditor de Calidad",
    },
    {
      phone: "28322925",
      email: "prueba8@endalia.com",
      name: "Vicente",
      lastName: "Aparicio Herrero",
      password: "123",
      imagenPath: "assets/avatars/male-06.jpg",
      job: "Coordinador de Ventas Zona Norte",
    },
    {
      phone: "28322925",
      email: "prueba9@endalia.com",
      name: "Ignacio",
      lastName: "Ariza Hidalgo",
      password: "123",
      imagenPath: "assets/avatars/male-07.jpg",
      job: "Auditor de MedioAmbiente",
    },

  ];
  delay: number = 1500;

  constructor() {}

  login(body: IUserInfo): any {
    const findUser = this.users.find((x) => x.email === body.email && x.password === body.password);
    const observable = new Observable((observer: any) => {
      setTimeout(() => {
        if(findUser) {
          const httpResponse = new HttpResponse({body: findUser});
          observer.next(httpResponse);
        } else {
          observer.error(new Error("'User not found'"));
        }
        observer.complete();
      }, this.delay);
    });
    return observable;
  }

  logout(token: string) {
    const observable = new Observable((observer: any) => {
      setTimeout(() => {
        const httpResponse = new HttpResponse({body: { token }});
        observer.next(httpResponse);
        observer.complete();
      }, this.delay);
    });
    return observable;
  }

  getUsers() {
    const sortByLastname = Utils.sortByProperty(this.users, 'lastName')
    const observable = new Observable((observer: any) => {
      const httpResponse = new HttpResponse({body: sortByLastname});
      observer.next(httpResponse);
      observer.complete();
    });
    return observable;
  }

  filterByTerm(term: string) {
    term = term ? Utils.removeAccentMark(term.toLocaleLowerCase()) : term;

    const filterByTerm = this.users.filter( (x) => Utils.removeAccentMark(x.email.toLocaleLowerCase()).includes(term) ||
      Utils.removeAccentMark(x.job.toLocaleLowerCase()).includes(term) ||
      Utils.removeAccentMark(x.name.toLocaleLowerCase()).includes(term) ||
      x.phone.toLocaleLowerCase().includes(term) ||
      Utils.removeAccentMark(x.lastName.toLocaleLowerCase()).includes(term)
    )
    const sortByLastname = Utils.sortByProperty(filterByTerm, 'lastName')
    const observable = new Observable((observer: any) => {
      const httpResponse = new HttpResponse({body: sortByLastname});
      observer.next(httpResponse);
      observer.complete();
    });
    return observable;
  }



}
