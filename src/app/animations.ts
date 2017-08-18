import { trigger, state, transition, style, animate } from "@angular/animations";

export let slide = trigger('slide', [    
    transition(':enter', [
        style({ transform: 'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave', [
        animate(500, style({ transform: 'translateX(-100%)'}))
    ])
])

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [  //or we can use this bidirectional operator void <=> * instead of :enter, : leave
        animate(2000)
    ])
])