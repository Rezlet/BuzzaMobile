import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.2s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.4s 10ms ease-out', style({ opacity: 0 }))]),
]);

export const BottomToTop = trigger('BottomToTop', [
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('0.3s ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('0.2s 10ms ease-out', style({ transform: 'translateY(100%)' })),
  ]),
]);

export const ScaleY = trigger('ScaleY', [
  transition(':enter', [
    style({ transform: 'scaleY(0)' }),
    animate('0.3s ease-in', style({ transform: 'scaleY(1)' })),
  ]),
  transition(':leave', [
    animate('0.3s 10ms ease-out', style({ transform: 'scaleY(0)' })),
  ]),
]);
