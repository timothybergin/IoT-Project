from grovepi import *
from grove_rgb_lcd import *
from time import sleep
from math import isnan
import os
import requests
import grovepi
import sqlite3
import configparser 


import socket, struct, dweepy, time, platform, random

def getTemp():
    return random.randint(1,1000)
    
def getHumidity():
    return 10

def post(dic):
    thing = 'therapeutic-caption' 
	#dweet 
    print dweepy.dweet_for(thing, dic)
    
def getReadings():
    dict = {}
    dict["temperature"] = getTemp();
    dict["humidity"] = getHumidity()
    return dict

while True:
    dict = getReadings();
    post(dict)
    time.sleep(5)











