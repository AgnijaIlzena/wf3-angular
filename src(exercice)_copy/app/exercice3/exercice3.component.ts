import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {


 toggle: boolean =false;
 items: any = [];

 onTogglePassword() {
   // si toggle = true passer a false, si = false passer à true
   this.toggle = !this.toggle;
   // Je pousse la longueur du tableau items +1 dans le tableau items
   this.items.push(this.items.length + 1);
 }



  constructor() { }

  ngOnInit(): void {
  }

}
