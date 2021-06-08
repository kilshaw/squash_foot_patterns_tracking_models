import json
import urllib.request
import time
import socket
import time
import sys

HOST = "127.0.0.1"
UDP_IP = "127.0.0.1"
UDP_PORT = 3232

PORTA = 1255
PORTB = 1256
PORTC = 1257
PORTD = 1258
PORTE = 1259
PORTF = 1260
PORTG = 1261
PORTH = 1262
PORTI = 1263
PORTJ = 1264
PORTK = 1265

s = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
sock.bind((UDP_IP, UDP_PORT))




contents = open("/Users/simon.kilshaw/Desktop/training/BackCourtBHOneFootlunge.json").read()
varab = eval(contents)
##print (varab)
print (varab['header']['name'])
print (varab['audio']['theme'])
print (varab['header']['complexity'])
print (varab['foot patterns'][0]['name'])


print (varab['foot patterns'][0]['notes'][0]['time']-249)
time = varab['foot patterns'][0]['notes'][0]['time']
s.sendto(str(time).encode('utf-8'),(HOST,PORTA))
print (varab['foot patterns'][0]['notes'][1]['time']-249)


print (varab['foot patterns'][1]['name'])
print (varab['foot patterns'][1]['notes'][0]['time']-249)
timeb = varab['foot patterns'][1]['notes'][0]['time']
s.sendto(str(timeb).encode('utf-8'),(HOST,PORTB))
print (varab['foot patterns'][1]['notes'][1]['time']-249)
timec = varab['foot patterns'][1]['notes'][1]['time']
s.sendto(str(timec).encode('utf-8'),(HOST,PORTC))

print (varab['foot patterns'][2]['name'])
print (varab['foot patterns'][2]['notes'][0]['time']-249)
timed = varab['foot patterns'][2]['notes'][0]['time']
s.sendto(str(timed).encode('utf-8'),(HOST,PORTD))

print (varab['foot patterns'][3]['name'])
print (varab['foot patterns'][3]['notes'][0]['time']-249)
timee = varab['foot patterns'][3]['notes'][0]['time']
s.sendto(str(timee).encode('utf-8'),(HOST,PORTE))


print (varab['foot patterns'][4]['name'])
print (varab['foot patterns'][4]['notes'][0]['time']-249)
timef = varab['foot patterns'][4]['notes'][0]['time']
s.sendto(str(timef).encode('utf-8'),(HOST,PORTF))
print (varab['foot patterns'][4]['notes'][1]['time']-249)
timeg = varab['foot patterns'][4]['notes'][1]['time']
s.sendto(str(timeg).encode('utf-8'),(HOST,PORTF))

print (varab['foot patterns'][5]['name'])
print (varab['foot patterns'][5]['notes'][0]['time']-249)
timeh = varab['foot patterns'][5]['notes'][0]['time']
s.sendto(str(timeh).encode('utf-8'),(HOST,PORTG))

print (varab['foot patterns'][6]['name'])
print (varab['foot patterns'][6]['notes'][0]['time']-249)
timei = varab['foot patterns'][6]['notes'][0]['time']
s.sendto(str(timei).encode('utf-8'),(HOST,PORTH))
print (varab['foot patterns'][6]['notes'][1]['time']-249)
timej = varab['foot patterns'][6]['notes'][1]['time']
s.sendto(str(timej).encode('utf-8'),(HOST,PORTI))

print (varab['foot patterns'][7]['name'])
print (varab['foot patterns'][7]['notes'][0]['time']-249)
timeK = varab['foot patterns'][7]['notes'][0]['time']
s.sendto(str(timeK).encode('utf-8'),(HOST,PORTJ))


print (varab['foot patterns'][8]['name'])
print (varab['foot patterns'][8]['notes'][0]['time']-249)
timel = varab['foot patterns'][8]['notes'][0]['time']
s.sendto(str(timel).encode('utf-8'),(HOST,PORTK))


