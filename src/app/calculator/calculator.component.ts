import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  mortgage_amount: any = ""; 
  interest_rate: any = "";
  monthly_payment: any = ""; 
  constructor() { }

  ngOnInit(): void {
  }
  calculate_payment() {
    const n = 25*12 
    const i = this.interest_rate/12/100
    this.monthly_payment = this.mortgage_amount * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
    this.monthly_payment = this.monthly_payment.toFixed(2) 
  }
}