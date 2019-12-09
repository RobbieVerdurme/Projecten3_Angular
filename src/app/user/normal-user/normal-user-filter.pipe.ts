import { Pipe, PipeTransform } from '@angular/core';
import { NormalUser } from './NormalUser';

@Pipe({
  name: 'normalUserFilter'
})
export class NormalUserFilterPipe implements PipeTransform {

  transform(users: NormalUser[], filter: string): NormalUser[] {
    if(!filter || filter.length === 0){
      return users
    }
    return users.filter(rec =>
      rec.firstname.toLowerCase().startsWith(filter.toLowerCase())  
    );
  }

}
