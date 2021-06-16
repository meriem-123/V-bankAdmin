import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Currency } from '../model/currency';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css'],
})
export class CurrencyFormComponent implements OnInit {
  currencyForm: FormGroup;
  currency: Currency;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currencyService: CurrencyService
  ) {
    this.currency = new Currency();
  }
  ngOnInit(): void {
    this.currencyForm = new FormGroup({
      code: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      alphaCode: new FormControl('', Validators.required),
      isoCode: new FormControl('', Validators.required),
      langue: new FormControl('', Validators.required),
    });
  }

  get code() {
    return this.currencyForm.get('code');
  }

  get nom() {
    return this.currencyForm.get('nom');
  }

  get alphaCode() {
    return this.currencyForm.get('alphaCode');
  }

  get isoCode() {
    return this.currencyForm.get('isoCode');
  }
  get langue() {
    return this.currencyForm.get('langue');
  }
  onSubmit() {
    this.code.setValue(this.code.value.trim());
    this.currency = this.currencyForm.value;
    this.currencyService
      .save(this.currency)
      .subscribe((result) => this.gotoCurrencyList());
  }

  gotoCurrencyList() {
    this.router.navigate(['/overview/currencyList']);
  }

  reset() {
    this.currencyForm.reset();
  }
}
