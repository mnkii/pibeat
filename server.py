from aiohttp import web
import socketio
import RPi.GPIO as GPIO
import time

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

GPIO.setmode(GPIO.BCM)

@sio.on('connect', namespace='/ws')
def connect(sid, environ):
    print(sid, "connected")

@sio.on('triggerPins', namespace='/ws')
async def message(sid, pins):
    print(sid, pins)
    active_duration = 0.02
    GPIO.setup(pins, GPIO.OUT)
    GPIO.output(pins, GPIO.HIGH)
    print('Activating Pins ', pins)
    GPIO.output(pins, GPIO.LOW)
    time.sleep(active_duration)
    GPIO.output(pins, GPIO.HIGH)
    await sio.emit('reply', "OK")

@sio.on('disconnect', namespace='/ws')
def disconnect(sid):
    print(sid, "disconnected")

app.router.add_static('/', 'www')

if __name__ == '__main__':
    web.run_app(app)

