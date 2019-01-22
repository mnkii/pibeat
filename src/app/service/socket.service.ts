import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  public start(url: string): void {
    this.socket = io(url);
  }

  public stop(): void {
    this.socket.close();
  }

  public play(pins: number[]): void {
    this.socket.emit('triggerPins', pins);
  }

  public onTriggerPins(): Observable<Number> {
    return new Observable<Number>(observer => {
      this.socket.on('triggerPins', (data: Number) => observer.next(data));
    });
  }

  public onEvent(event: string): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
