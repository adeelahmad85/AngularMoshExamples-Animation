import { trigger, state, transition, style, animate } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [  //or we can use this bidirectional operator void <=> * instead of :enter, : leave
        animate(2000)
    ])
])