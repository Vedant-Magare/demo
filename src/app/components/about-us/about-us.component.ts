import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  sections = [
    {
      title: 'Our Mission',
      description:
        'Our mission is to bridge the gap between academic learning and industry expectations by providing real-world exposure through well-structured internships and professional courses.',
    },
    {
      title: 'Why Choose Us?',
      points: [
        'Expert-Guided Courses with Industry-Relevant Curriculum',
        'Live Projects and Practical Experience',
        'Career Assistance and Certification',
        'Flexible Learning Options',
      ],
    },
    {
      title: 'Our Commitment',
      description:
        'We are committed to helping students and professionals develop their skills and gain valuable insights, ensuring a smooth transition into the corporate world.',
    },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      });
    }, 300);
  }
}
