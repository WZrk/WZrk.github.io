from gipigo import *
import time
import math
enable_servo()

set_speed(100)

def move_forward(feet):
  mm = 304.8 * feet
  steps = mm/11.344
  enc_tgt(1,1,steps)
  time.sleep(.1)
  fwd()
  time.sleep(4*feet)

def turn_right():
  enc_tgt(1,0,15)
  time.sleep(.1)
  right()
  time.sleep(2)

def turn_left():
  enc_tgt(0,1,15)
  time.sleep(.1)
  left()
  time.sleep(2)
  
while us_dist(15) > 15:
  fwd()
  servo(0)

if us_dist(15) < 15:
  stop()
  servo(90)
  
