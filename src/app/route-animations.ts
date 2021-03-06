import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


export const slideInAnimation =
      trigger('routeAnimations', [
        
        transition('About => Projects', [
          query(':enter, :leave', 
                style({ opacity: 0 }), 
                { optional: true }),
          group([
            query(':enter', 
                  [style({ opacity: 0 }), animate('0.5s ease-in-out', style({ opacity: 1 }))], 
                  { optional: true }),
            query(':leave', 
                  [style({ opacity: 1 }), animate('0.5s ease-in-out', style({ opacity: 0 }))], 
                  { optional: true })
          ])
        ]),
        
        transition('Projects => About', [
          query(':enter, :leave', 
                style({ opacity: 0 }), 
                { optional: true }),
          group([
            query(':enter', 
                  [style({ opacity: 0 }), animate('0.5s ease-in-out', style({ opacity: 1 }))], 
                  { optional: true }),
            query(':leave', 
                  [style({ opacity: 1 }), animate('0.5s ease-in-out', style({ opacity: 0 }))], 
                  { optional: true })
          ])
        ]),
        
        transition('Projects => Project', [
          query(':enter, :leave', 
                style({ opacity: 0 }), 
                { optional: true }),
          group([
            query(':enter', 
                  [style({ opacity: 0, transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))], 
                  { optional: true }),
            query(':leave', 
                  [style({ opacity: 1, transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
            ], { optional: true }),
          ])
        ]),
        
        transition('Project => Projects', [
          query(':enter, :leave', 
                style({ opacity: 0 }), 
                { optional: true }),
          group([
            query(':enter', 
                  [style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))], 
                  { optional: true }),
            query(':leave', 
                  [style({ opacity: 1, transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(100%)' }))
                  ], { optional: true }),
          ])
        ]),
        
        transition('Project <=> About', [
          query(':enter, :leave', 
                style({ opacity: 0 }), 
                { optional: true }),
          group([
            query(':enter', 
                  [style({ opacity: 0 }), animate('0.5s ease-in-out', style({ opacity: 1 }))], 
                  { optional: true }),
            query(':leave', 
                  [style({ opacity: 1 }), animate('0.5s ease-in-out', style({ opacity: 0 }))], 
                  { optional: true })
          ])
        ])
      ]);
