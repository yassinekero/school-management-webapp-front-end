import { Component } from '@angular/core';
import { Departement } from '../interfaces/departement.interface';
import { DepartementService } from '../service/departement.service';
import { Enseignant } from '../interfaces/enseignant.interface';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrl: './list-departement.component.scss'
})
export class ListDepartementComponent
 

{

  departments : Departement[];

  constructor (private departementService : DepartementService) {}

  ngOnInit(): void 
  {
  this.departementService.getDepartements().subscribe(
    {
      next : (response : Departement[] ) =>
      {
        console.log(response);
              this.departments = response;
      },
      error : error =>
      {

      }
      
    }
  ); 
 
  }

  

  modifyDepartment() : void
  {

  }
   
  deleteDepartment(departmentId : any) : void
  {
    this.departementService.deleteDepartement(departmentId).subscribe(
      {
        next :() =>
        {
          const indexToRemove = this.departments.findIndex(dep => dep.id_dept === departmentId);

        if (indexToRemove !== -1) {
          this.departments.splice(indexToRemove, 1);
          console.log('Department removed successfully');
        }
        },
        error : error =>
        {
          console.log(error)
        }
      }
    )
  }

}
