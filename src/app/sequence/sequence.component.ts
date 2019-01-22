import { Component, OnInit } from '@angular/core';
import { PlaybackService } from '../service/playback.service';
import { CompositionService } from '../service/composition.service';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html'
})
export class SequenceComponent implements OnInit {

  private classes: Array<string> = [
  'checkmark-orange', 'checkmark-blue', 'checkmark-yellow',
  'checkmark-purple', 'checkmark-green', 'checkmark-red'
  ];

  constructor(
    public playbackService: PlaybackService,
    public compositionService: CompositionService
  ) { }

  ngOnInit() {
  }

  addBeat() {
    const newBeat = new Array(this.compositionService.sequence[0].length).fill(false);
    this.compositionService.sequence.push(newBeat);
  }

  removeBeat() {
    if (this.compositionService.sequence.length <= 1) {
      return false;
    }
    this.compositionService.sequence.splice(-1, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
