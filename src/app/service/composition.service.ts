import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  bpm = 120;
  sequence: Array<Array<Boolean>>;

  constructor() {
    this.sequence = environment.defaultSequence;
  }
}
