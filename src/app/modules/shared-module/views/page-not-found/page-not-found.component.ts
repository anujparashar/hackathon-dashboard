import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
    content: string;
    subscription: Subject<void> = new Subject();
    constructor(private activatedroute: ActivatedRoute) { }
    ngOnDestroy(): void {
        this.subscription.next();
        this.subscription.complete();
    }

    ngOnInit(): void {
        this.activatedroute.data.pipe(takeUntil(this.subscription)).subscribe((data: any) => {
            this.content = data.message;
        })
    }

}
