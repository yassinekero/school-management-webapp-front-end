import { Component } from '@angular/core';
import { EnseignantService } from '../service/enseignant.service';
import { Enseignant} from '../interfaces/enseignant.interface';
import { DepartementService } from '../service/departement.service';
import { Departement } from '../interfaces/departement.interface';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.scss'
})
export class DepartementComponent {
  enseignants: Enseignant[]; 
  selectedEnseignant: string ;
  departementName : string;
  departementData : Departement;

  constructor(private enseignantService: EnseignantService, private departementService : DepartementService) { }

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe(
      {
        next : (response : Enseignant[]) =>
        {
          console.log(response)
          this.enseignants = response;
        }, 
        error : error =>
         {
          console.error('Error fetching enseignants:', error);
        }
      }
    )
  
  }

  createDepartement() {

    this.departementData = 
    {
      "dept_name": this.departementName,
      "dept_respo": this.selectedEnseignant
    }
    this.departementService.createDepartement(this.departementData).subscribe(
     
      {
        next : response => 
        {
          console.log("Deprtment created successfully : ", response);
        },
        error : error => 
        {
          console.log("Error" , error);
        }
      }
    );
  }
}
