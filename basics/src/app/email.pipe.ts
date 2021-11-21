import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(email: string, ...args: unknown[]): unknown {

    const firstLettre = email[0];

    const domaine = email.split('@')[1];

    

    return firstLettre+'************'+domaine;
  }

}
