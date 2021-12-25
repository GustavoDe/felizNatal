import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  felizNatal: boolean = false;
  horasCont: number = 0;
  minutosCont: number = 0;
  secCont: number = 0;
  contadorArray = `${this.horasCont} : ${this.minutosCont} : ${this.secCont}` 
  constructor() { 
    this.contador()
  }

  ngOnInit(): void {
    this.contador()
    setInterval(()=> {
      this.contador()
    }, 1000)
    
  }
  
  contador() {
    let count_down = new Date(2021,12,25,0,0,0).getTime()
    const segundo = 1000;
    const minute = segundo * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let now = Date.now()
    let diff =  count_down - now
    this.horasCont = Math.floor(diff % day / hour)
    this.minutosCont = Math.floor(diff % hour / minute)
    this.secCont = Math.floor(diff % minute / segundo)
    if(this.secCont == 0 && this.minutosCont == 0) {
        this.felizNatal = true;
    } else {
      this.felizNatal = false;
    }
    
  }
}
