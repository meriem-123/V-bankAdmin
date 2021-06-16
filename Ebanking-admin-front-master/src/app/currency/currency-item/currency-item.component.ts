import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css'],
})
export class CurrencyItemComponent implements OnInit {
  codeId: string;
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
    this.codeId = this.route.snapshot.params['id'];
    console.log(this.codeId);
    this.currencyService.findCurrency(this.codeId).subscribe(
      (data) => {
        this.currency = data[0];
        this.code.setValue(this.currency.code);
        this.nom.setValue(this.currency.nom);
        this.alphaCode.setValue(this.currency.alphaCode);
        this.isoCode.setValue(this.currency.isoCode);
        this.langue.setValue(this.currency.langue);
      },
      (error) => console.log(error)
    );
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
    this.currency = this.currencyForm.value;
    this.currencyService
      .update(this.currency.code, this.currency)
      .subscribe((result) => this.gotoCurrencyList());
  }

  gotoCurrencyList() {
    this.router.navigate(['/overview/currencyList']);
  }

  reset() {
    this.currencyForm.reset();
  }
}
