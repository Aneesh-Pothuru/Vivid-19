#Author: Aditya Lakkoju

import requests
from bs4 import BeautifulSoup
import pandas as pd 
import matplotlib.pyplot as plt 
from flask import Flask
import requests
import json

#app = Flask(__name__)  

#@app.route('/')

def getData():
    url = 'https://www.worldometers.info/coronavirus/country/us/'

    #making request for website 
    r = requests.get(url) 

    #parsing html to beatifulsoap
    html = r.text
    soup = BeautifulSoup(html, 'html.parser')

    #extract basic data
    #print(soup.title.text)
   #print()
    live_data = soup.find_all('div',id='maincounter-wrap')
    #for i in live_data:
       #print(i.text) 

    #extracting table data
    table_body = soup.find('tbody')
    table_rows = table_body.find_all('tr')

    states = []
    cases = []
    new_cases = []
    deaths = []
    new_deaths = []
    act_cases = []
    total_tests = []

    for tr in table_rows:
        td = tr.find_all('td')
        states.append(td[0].get_text().strip())
        cases.append(td[1].get_text().strip())
        new_cases.append(td[2].get_text().strip())
        deaths.append(td[3].get_text().strip())
        new_deaths.append(td[4].get_text().strip())
        act_cases.append(td[5].get_text().strip())
        total_tests.append(td[8].get_text().strip())

    indices = [i for i in range(1,len(states)+1)]
    headers = ['States', 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths', 'Active Cases', 'Total Tests']
    df = pd.DataFrame(list(zip(states, cases, new_cases, deaths, new_deaths, act_cases, total_tests)),columns=headers,index=indices)
    #df.fillna(0)
    df_new=df.replace(r'^\s*$', '0', regex=True)
    df.to_json('datacovid.json',orient='records')
    datacovid_jsn=df.to_json(orient='records')
    return datacovid_jsn
    print(df_new)
    
local_json=getData()
getData()
print (local_json)
#plotting bar graph 
#y_pos = [i for i in range(1,len(states)+1)
#plt.bar(y_pos, cases[::-1], align='center', alpha=0.5)
#plt.xticks(y_pos,states, rotaion=80)
#plt.ylabel('Total Cases')
#plt.title('People affected by covid-19')
#plt.savefig('coviddata.png'dpi=600)
#plt.show()