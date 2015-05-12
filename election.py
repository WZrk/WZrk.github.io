from random import random
total_wins = 0
for i in range(10000):
  region wins = 0
  region 1 = random()
  if region 1 <= .87:
    region wins = region wins + 1
  else:
    region wins = region wins
  region 2 = random()
  if region 2 <= .65:
    region wins = region wins + 1
  else:
    region wins = region wins
  region 3 = random()
  if region 3 <= .17:
    region wins = region wins + 1
  else:
    region wins = region wins
    
  if region wins >= 2:
    print 
  else:
    print "You did not win the election..."
