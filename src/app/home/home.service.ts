import { Home } from "./home.model";
import {EventEmitter, Injectable} from '@angular/core'

@Injectable()
 
export class HomeService{
    public subHomeSelected = new EventEmitter<Home>();

    private homes: Home[] = [
        new Home('Ostrich Residency',
                 'It is luxurious residency in US. You will live peaceful life here.',
                 'http://www.archilove.net/wp-content/uploads/2014/07/011-luxurious-residence-saraiva-associados.jpg'),
        new Home('Shimmer Residency',
                 'Home is the starting place of love, hope and dreams.',
                 'https://cdn.wowowhome.com/photos/2018/05/65btp-house-luxurious-residence-38.jpg'),    
        new Home('Silver Oak',
                 'There is nothing more important than a good, safe, secure home.',
                 'https://junkmailimages.blob.core.windows.net/large/7997d44d19094dcaad26983d6274bd63.jpg'),
        new Home('Py-Piper',
                 'In this home… We do second chances. We do real. We do mistakes. We do I’m sorrys. We do loud really well. We do hugs. We do together best of all.',
                 'https://d1qfj231ug7wdu.cloudfront.net/pictures/estate/2912/2911125/11748860155cab093c6d1987.74973892_1920.jpg')          
    ];

    getHomes(){
        return this.homes.slice();
    }
}