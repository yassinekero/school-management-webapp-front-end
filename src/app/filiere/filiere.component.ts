import { Component } from '@angular/core';
import { Filiere } from '../interfaces/filiere.interface';
import { FiliereService } from '../service/filiere.service';
import { Enseignant } from '../interfaces/enseignant.interface';
import { EnseignantService } from '../service/enseignant.service';
import { Departement } from '../interfaces/departement.interface';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrl: './filiere.component.scss'
})
export class FiliereComponent {
  enseignants: Enseignant[];
  departments: Departement[];
  selectedEnseignant: string;
  filiereName: string;
  filiereData: Filiere;
  selectedDept: number;
  constructor(private filiereService: FiliereService, private enseignantService: EnseignantService, private deptService: DepartementService) {

  }


  ngOnInit(): void {
    this.loadEnseignants();
    this.loadDepts();
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe(
      {
        next: (response: Enseignant[]) => {

          this.enseignants = response;
        },
        error: error => {
          console.error('Error fetching enseignants:', error);
        }
      }
    )

  }

  loadDepts() {
    this.deptService.getDepartements().subscribe(
      {
        next: (response: Departement[]) => {

          this.departments = response;
        },
        error: error => {
          console.error('Error fetching enseignants:', error);
        }
      }
    )

  }
  createFiliere() {
    this.filiereData = {
      "filiere_name": this.filiereName,
      "chef_filière": this.selectedEnseignant
    };

    this.filiereService.createFiliere(this.filiereData).subscribe({
      next: (response) => {
        console.log("Filiere created successfully:", response);
      },
      error: (error) => {
        console.error("Error creating filiere:", error);
      }
    });
  }
}