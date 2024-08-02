import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
  counter: number = 0;
  private timerSubscription: any;

  ngOnInit() {
    console.log(this.date);
    this.timerSubscription = interval(5000) // Interval set to 30 seconds (30000 milliseconds)
      .subscribe(() => {
        this.counter++;
        // Call your function or perform any action here
        this.myFunction();
      });
  }

  ngOnDestroy() {
    // Unsubscribe from the timer observable to prevent memory leaks
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
date:any=new Date();
  myFunction() {
    this.date=new Date();
    console.log(this.date);
    console.log('Function executed every 30 seconds');
    // Implement your repeated function logic here
  }

}
