import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private el: ElementRef) {}

  contents = [
    {
      title: 'Empowering Success',
      text: "Boraste Technologies' IT Courses Tailored for Career Advancement.",
    },
    {
      title: 'Learn with Experts',
      text: 'Join our expert-led training sessions for a brighter career.',
    },
    {
      title: 'Upgrade Your Skills',
      text: 'Enhance your technical skills with hands-on experience.',
    },
  ];

  currentIndex = 0;
  currentContent = this.contents[this.currentIndex];

  // constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.contents.length;
      this.currentContent = this.contents[this.currentIndex];
    }, 3000);
  }

  //-------------------------------------------SERVICE SECTION.TS---------------------------------------------------

  services = [
    {
      title: 'UI/UX Design',
      description:
        'We create user-friendly and aesthetically pleasing designs that enhance user experience.',
      image: 'assets/images/UIUX.png',
    },
    {
      title: 'Graphic Design',
      description:
        'Our graphic design services help brands stand out with creative visuals.',
      image: 'assets/images/graphic-design.webp',
    },
    {
      title: 'Web Design',
      description:
        'Modern and responsive web design to create stunning websites.',
      image: 'assets/images/web-design.png',
    },

    {
      title: 'Branding & Logo Design',
      description:
        'We design unique brand identities that leave a lasting impression.',
      image: 'assets/images/branding-logo.png',
    },
    {
      title: 'Print Design',
      description:
        'Professional print designs for brochures, business cards, and more.',
      image: 'assets/images/print-designer.avif',
    },
    {
      title: 'Social Media Design',
      description:
        'Engaging visuals for your social media marketing campaigns.',
      image: 'assets/images/social-media.jpg',
    },
  ];

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const elements = this.el.nativeElement.querySelectorAll('.service-card');
  //   elements.forEach((el: HTMLElement) => {
  //     const rect = el.getBoundingClientRect();
  //     if (rect.top < window.innerHeight - 100) {
  //       el.classList.add('reveal');
  //     }
  //   });
  // }

  //-------------------------------------------COURSES/INTERNSHIPS SECTION.TS---------------------------------------------------

  courses = [
    {
      title: 'UI/UX Design',
      description:
        'Master UI-UX with real-world projects and hands-on creative design skills.',
      image: 'assets/images/UIUX.png',
    },
    {
      title: 'Graphic Design',
      description:
        'Master Graphic Design with real-world projects and advanced visual storytelling techniques.',
      image: 'assets/images/graphic-design.webp',
    },
    {
      title: 'Web Design',
      description:
        'Work on real-world projects and improve your Web Design skills with modern techniques.',
      image: 'assets/images/web-design.png',
    },
    {
      title: 'Branding & Logo Design',
      description:
        'We design unique brand identities that leave a lasting impression.',

      image: 'assets/images/branding-logo.png ',
    },
    {
      title: 'Print Design',
      description: 'Professional print designs for brochures, business cards.',
      image: 'assets/images/print-designer.avif',
    },
    {
      title: 'Social Media Design',
      description:
        'Engaging visuals for your social media marketing campaigns.',
      image: 'assets/images/social-media.jpg',
    },
    {
      title: 'Digital Marketing',
      description: 'Become a digital marketing expert.',
      image: 'assets/images/digital-marketing.webp',
    },
    {
      title: 'Machine Learning',
      description: 'Learn ML and AI with real-world applications.',
      image: 'assets/images/machine-learning.png',
    },
  ];

  ngAfterViewInit() {
    this.revealOnScroll(); // Check visibility on load
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.revealOnScroll();
  }

  revealOnScroll() {
    this.revealElements('.service-card');
    this.revealElements('.course-card');
  }

  revealElements(selector: string) {
    const elements = this.el.nativeElement.querySelectorAll(selector);
    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('reveal');
      }
    });
  }
}
