import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-project-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstName$: Observable<string>;

  constructor(private store: Store) {
    this.firstName$ = this.store.select(state => state.auth.firstname)
  }

  ngOnInit(): void {
  }

}
