import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit {

  faqs: { question: string, answer: string, open: boolean }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.faqs = [
      {
        question: 'What is this platform?',
        answer: 'This platform is an inventory management system to help you manage your products efficiently.',
        open: false
      },
      {
        question: 'How can I reset my password?',
        answer: 'You can reset your password by going to the settings page and clicking on "Forgot Password."',
        open: false
      },
      {
        question: 'How do I contact support?',
        answer: 'You can contact support via the contact form available on the Support page or through email.',
        open: false
      },
      {
        question: 'How to change stat types?',
        answer: 'You can contact support via the contact form available on the Support page or through email.',
        open: false
      },
    ];
  }

  toggleFAQ(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  isAnswerVisible(index: number): boolean {
    return this.faqs[index].open;
  }

}
