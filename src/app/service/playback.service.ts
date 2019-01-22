import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { CompositionService } from './composition.service';
import { SocketService } from './socket.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaybackService {

  public position: number;
  public isPlaying = false;
  private subscribe;

  constructor(private compositionService: CompositionService, private socketService: SocketService) { }

  play() {
    this.isPlaying = true;
    const ticker = interval(this.getInterval());
    this.socketService.start(environment.webSocketUrl);

    this.subscribe = ticker.subscribe(p => {

      this.position = p % this.compositionService.sequence.length;
      const currentStep = this.compositionService.sequence[this.position];

      const activePins: Array<any> = currentStep.map((x, i) => ({
        'active': x,
        'pin': environment.pins[i]
      })).filter( x => x.active === true ).map(a => a.pin);

      this.socketService.play(activePins);
    });
  }

  stop() {
    this.socketService.stop();
    this.isPlaying = false;
    this.position = null;
    this.subscribe.unsubscribe();
  }

  private getInterval() {
    return 1000 * 60 / this.compositionService.bpm;
  }
}
