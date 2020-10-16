import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 

const transverseOne = [
  'sit ups', 
  'crunches', 
  'flutter kicks'
];

const obliquesOne = [
  'bus drivers', 
  'side planks', 
  'twisters'
];

const transverseTwo = [
  'ex 1',
  'ex 2',
  'ex 3'
];

onMiddle(transverseOne) {
  return transverseOne[Math.floor(Math.random() * transverseOne.length)]
}

onSides(obliquesOne) {
  return obliquesOne[Math.floor(Math.random() * obliquesOne.length)]
}

onMiddle2(transverseTwo) {
  return transverseTwo[Math.floor(Math.random() * transverseTwo.length)]
}

exOne = this.onMiddle(this.transverseOne)
exTwo = this.onSides(this.transverseOne)
exThree = this.onMiddle2(this.transverseTwo)

console.log(exOne);
console.log(exTwo);
console.log(exThree);

}
