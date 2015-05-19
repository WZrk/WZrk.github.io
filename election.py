from random import random
total_wins = 0
for i in range(10000):
  region wins = 0
  region_1 = random()
  if region_1 <= .87:
    region wins = region wins + 1
  else:
    region wins = region wins
  region_2 = random()
  if region_2 <= .65:
    region wins = region wins + 1
  else:
    region wins = region wins
  region_3 = random()
  if region_3 <= .17:
    region wins = region wins + 1
  else:
    region wins = region wins
    
  if region wins >= 2:
    print 
  else:
    print "You did not win the election..."
