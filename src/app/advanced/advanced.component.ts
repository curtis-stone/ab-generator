import { Component } from '@angular/core';

@Component({
  selector: 'advanced',
  templateUrl: './advanced.template.html',
  styleUrls: ['./advanced.component.css']
})

export class AdvancedComponent {
  create = false;
  exOne = null;
  exTwo = null;
  exThree = null;
  exFour = null;

  transverseOne = [
    'Spiderman Planks: 12 reps on each side',
    'Reverse Crunches: 15 reps',
    'Seated Knee Tucks: 12 reps',
    'Hollow Rocks: 10 reps',
    'Sprinter Sit-Ups: 12 reps on each side',
    'Hip Lifts: 10 reps',
    'Plate Overhead Crunches: 10 reps',
    'Kneeling Opposite Holds: 30 sec. each side',
    '6 inches: 30 sec.',
    'Leg Lifts: 12 reps',
    'Scissor Kicks: 20 reps on each leg'
  ];
  obliquesOne = [
    'Russian Twists: 15 reps on each side',
    'Side Plank Hip Lifts: 12 on each side',
    'Rotating Side Plank: 10 each side',
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
    'Plank: 45 sec.',
    'X Crunches: 15 reps',
    'Back Bridge: 30 sec.',
    'Superman: 30 sec.',
    'Boat Pose: 30 sec.',
    'Walkouts: 10 reps',
    'Ab Roll Ups: 12 reps'
  ];
  obliquesTwo = [
    'Cross-Body Mountain Climbers: 15 reps each side',
    'Sit Ups to Twist: 5 reps each side',
    'Trunk Rotations: 10 reps on each side',
    'Pendulums: 10 reps on each side',
    'Single-Leg Toe Touches: 20 each side',
    'Bird Dog Crunches: 12 reps on each side',
    'Side Crunches: 12 reps each side',
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
    'Let\'s try Elite next!',
    'You\'re doing great!',
    'Go crazy on these!',
    'Hard Work Leads to Profit',
    'Keep up the great work!',
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
