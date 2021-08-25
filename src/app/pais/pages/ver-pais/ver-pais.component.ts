import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; // (!) para que acepte esta propiedad null

  constructor( private activatedRoute: ActivatedRoute,
               private PaisService   : PaisService ) { }

  ngOnInit(): void {
    
   this.activatedRoute.params
   .pipe(
      switchMap( ( { id } ) => this.PaisService.getPaisPorAlpha( id  ) ) , 
      tap(console.log)
   )
       .subscribe( pais => this.pais = pais);
  }


  // TODO: SIN USAR SUBSCRIBE
//   paisCode: string = ''  ;
 
//   ngOnInit(): void {

//     this.paisCode = this.activatedRoute.snapshot.paramMap.get('id');
//     this.PaisService.getPaisPorAlpha(this.paisCode)
//        .subscribe(pais => {
//         console.log(pais);
//       });
//  }

 // this.activatedRoute.params
    //     .subscribe( ({ id }) => {
    //       console.log( id );

    //       this.PaisService.getPaisPorAlpha( id )
    //           .subscribe( pais => { 
    //             console.log( pais );
    //           });
    //     });
}
