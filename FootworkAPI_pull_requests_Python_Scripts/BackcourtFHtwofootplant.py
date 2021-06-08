import json
import urllib.request
import time
import socket

contents = open("/Users/simon.kilshaw/Desktop/training/BackCourtFHtwofootplant.json").read()
varab = eval(contents)
##print (varab)
print (varab['header']['name'])
print (varab['audio']['theme'])
print (varab['header']['complexity'])
print (varab['foot patterns'][0]['name'])


print (varab['foot patterns'][0]['notes'][0]['time']-240)
print (varab['foot patterns'][0]['notes'][1]['time']-240)
print (varab['foot patterns'][0]['notes'][2]['time']-240)
print (varab['foot patterns'][0]['notes'][3]['time']-240)


print (varab['foot patterns'][1]['name'])
print (varab['foot patterns'][1]['notes'][0]['time']-240)


print (varab['foot patterns'][2]['name'])
print (varab['foot patterns'][2]['notes'][0]['time']-240)
print (varab['foot patterns'][2]['notes'][1]['time']-240)


print (varab['foot patterns'][3]['name'])
print (varab['foot patterns'][3]['notes'][0]['time']-240)
print (varab['foot patterns'][3]['notes'][1]['time']-240)

print (varab['foot patterns'][4]['name'])
print (varab['foot patterns'][4]['notes'][0]['time']-240)
print (varab['foot patterns'][4]['notes'][1]['time']-240)
print (varab['foot patterns'][4]['notes'][2]['time']-240)


print (varab['foot patterns'][5]['name'])
print (varab['foot patterns'][5]['notes'][0]['time']-240)

print (varab['foot patterns'][6]['name'])
print (varab['foot patterns'][6]['notes'][0]['time']-240)


print (varab['foot patterns'][7]['name'])
print (varab['foot patterns'][7]['notes'][0]['time']-240)
print (varab['foot patterns'][7]['notes'][1]['time']-240)





