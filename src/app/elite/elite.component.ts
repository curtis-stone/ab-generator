import { Component } from '@angular/core';

@Component({
  selector: 'elite',
  templateUrl: './elite.template.html',
  styleUrls: ['./elite.component.css']
})

export class EliteComponent {
  create = false;
  exOne = null;
  exTwo = null;
  exThree = null;
  exFour = null;
  transverseOne = [
    'Spiderman Planks: 15 reps on each side',
    'Reverse Crunches: 15 reps',
    'Seated Knee Tucks: 15 reps',
    'Hollow Rocks: 10 reps',
    'Sprinter Sit-Ups: 12 reps on each side',
    'Hip Lifts: 10 reps',
    'Plate Overhead Crunches: 10 reps',
    'Kneeling Opposite Holds: 30 sec. each side',
    '6 inches: 30 sec.',
    'Leg Lifts: 15 reps',
    'Scissor Kicks: 30 reps on each leg'
  ];
  obliquesOne = [
    'Russian Twists: 20 reps on each side',
    'Side Plank Hip Lifts: 15 on each side',
    'Rotating Side Plank: 15 each side',
    'Heel Taps: 12 each side',
    'Bicycle Crunches: 25 reps on each side',
    'Jack Knives: 12 reps on each side',
    'Elbow to Knee Crunches: 12 each side',
    'Plate Chops: 10 each side'
  ];
  transverseTwo = [
    'Crunches: 30 reps',
    'Toe Touches: 30 reps',
    'Flutter Kicks: 30 reps on each leg',
    'Plank: 45 seconds',
    'X Crunches: 15 reps',
    'Back Bridge: 30 sec.',
    'Superman: 12 reps',
    'Boat Pose: 45 sec.',
    'Walkouts: 12 reps',
    'Ab Roll Ups: 12 reps'
  ];
  obliquesTwo = [
    'Cross-Body Mountain Climbers: 15 reps each side',
    'Sit Ups to Twist: 5 reps each side',
    'Trunk Rotations: 10 reps on each side',
    'Pendulums: 10 reps on each side',
    'Single-Leg Toe Touches: 20 each side',
    'Bird Dog Crunches: 15 reps on each side',
    'Side Crunches: 15 reps each side',
  ];
  phrases = [
    'Ready to Start?',
    'Run it up!',
    'Generate a new workout?',
    'Consistency is Key',
    'Keep striving!',
    'Good Luck!',
    'Hope you got some water...',
    'No Pain no Gain',
    'All effort',
    'Get your mind right',
    'Its Jus Work.',
    'All Hard Work!',
    'Talk is Cheap',
    'Don\'t talk about it, BE ABOUT IT',
    'My grandma has better abs than you!',
    'You can do it!',
    'Push your limits!',
    'You\'re doing great!',
    'Go crazy on these!',
    'Hard Work Leads to Profit',
    'Keep up the great work!',
    'You\'re Elite!',
    'Hope you\'re ready!',
    'You got this!',
    'You can do these in your sleep!',
    'Let\'s make a new one',
    'You\'re almost done!',
    'Might want to take a nap after this one',
    'I\'d get some water first if I were you..',
    'I can see the abs forming!',
    'You sure you want to do this?',
    'You\'re improving! Here\'s a tough one',
  ]
  createWorkout() {
    // if (this.create === true) {
      if (confirm(this.phrases[Math.floor(Math.random() * this.phrases.length)])) {
        this.create = true;
        this.exOne = this.onMiddle(this.transverseOne);
        this.exTwo = this.onSides(this.obliquesOne);
        this.exThree = this.onMiddle2(this.transverseTwo);
        this.exFour = this.onSides2(this.obliquesTwo)
      }
      return;
  }
  onMiddle(transverseOne) {
    return transverseOne[Math.floor(Math.random() * transverseOne.length)]
  }
  onSides(obliquesOne) {
    return obliquesOne[Math.floor(Math.random() * obliquesOne.length)]
  }
  onMiddle2(transverseTwo) {
    return transverseTwo[Math.floor(Math.random() * transverseTwo.length)]
  }
  onSides2(obliquesTwo) {
    return obliquesTwo[Math.floor(Math.random() * obliquesTwo.length)]
  }
}
