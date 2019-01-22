import { Component, OnInit } from '@angular/core';
import { CompositionService } from '../service/composition.service';
import { PlaybackService } from '../service/playback.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html'
})

export class ControllerComponent implements OnInit {

  public pins: Array<number>;

  constructor(
    public compositionService: CompositionService,
    public playbackService: PlaybackService
  ) {}

  ngOnInit() {
    this.pins = environment.pins;
  }

  toggleStartStop() {
    if (this.playbackService.isPlaying) {
      this.playbackService.stop();
    } else {
      this.playbackService.play();
    }
  }

  changeBpm() {
    this.playbackService.stop();
    this.playbackService.play();
  }
}
