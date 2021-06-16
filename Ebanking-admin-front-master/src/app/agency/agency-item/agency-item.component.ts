import { Component, OnInit } from '@angular/core';
import { Agency } from '../model/agency';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from '../service/agency.service';

@Component({
  selector: 'app-agency-item',
  templateUrl: './agency-item.component.html',
  styleUrls: ['./agency-item.component.css'],
})
export class AgencyItemComponent implements OnInit {
  agency: Agency;
  agencyForm: FormGroup;
  id: string;

  get nom() {
    return this.agencyForm.get('nom');
  }

  get adresse() {
    return this.agencyForm.get('adresse');
  }
  get telephone() {
    return this.agencyForm.get('telephone');
  }

  get fax() {
    return this.agencyForm.get('fax');
  }

  get email() {
    return this.agencyForm.get('email');
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agencyService: AgencyService
  ) {}

  ngOnInit(): void {
    this.agencyForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      fax: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
    this.id = this.route.snapshot.params['id'];
    this.agencyService.findAgency(this.id).subscribe(
      (data) => {
        this.agency = data[0];
        this.adresse.setValue(this.agency.adresse);
        this.nom.setValue(this.agency.nom);
        this.telephone.setValue(this.agency.telephone);
        this.fax.setValue(this.agency.fax);
        this.email.setValue(this.agency.email);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.agency = this.agencyForm.value;
    this.agencyService
      .update(this.id, this.agency)
      .subscribe((result) => this.gotoAgencyList());
  }

  gotoAgencyList() {
    this.router.navigate(['/overview//agencyList']);
  }

  reset() {
    this.agencyForm.reset();
  }
}
