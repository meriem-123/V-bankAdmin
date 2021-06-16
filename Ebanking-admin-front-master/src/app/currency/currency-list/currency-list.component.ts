import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  CURRENCIES: Currency[];
  dataSource = new MatTableDataSource<Currency>(this.CURRENCIES);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'code',
    'nom',
    'isoCode',
    'alphaCode',
    'creationDate',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private currencyService: CurrencyService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  deleteCurrency(id: string) {
    this.currencyService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.currencyService.findAll().subscribe(
          (data) => {
            this.CURRENCIES = data;
            this.dataSource = new MatTableDataSource<Currency>(this.CURRENCIES);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Currency>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.currencyService.findAll().subscribe(
      (data) => {
        this.CURRENCIES = data;
        console.log(data);
        console.log(this.CURRENCIES);
        this.dataSource = new MatTableDataSource<Currency>(this.CURRENCIES);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Currency>(null);
      }
    );
  }
  goToCurrencyItem(code: string) {
    this.route.navigate(['/overview/currencyItem/' + code]);
  }
  openDialog(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous supprimer la devise ' + code + '?',
        codeSupp: code,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteCurrency(result.data.codeSupp);
      }
    });
  }
}
