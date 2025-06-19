import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private openModalSource = new Subject<string>();
  openModal$ = this.openModalSource.asObservable();

  open(modalId: string) {
    this.openModalSource.next(modalId);
  }
}