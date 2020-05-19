gedit coronavirus.py

from selenium import webdriver
from BeautifulSoup import BeautifulSoup
import pandas as pd

driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver")

state=[]
confirmed_cases=[]
confirmed_deaths=[]
active_cases=[]
tests=[]
driver.get(<a href="https://www.worldometers.info/coronavirus/country/us/")

content = driver.page_source
soup = BeautifulSoup(content)
for a in soup.findAll('a',href=True, attrs={'class':'_31qSD5'})
state=a.find('div', attrs={'class':'mt_a'})
active_cases=a.find('div', attrs={'class':'sorting_5'})
confirmed_cases=a.find('div', attrs={'class':'sorting_1'})
confirmed_deaths=a.find('div', attrs={'class':'sorting_3'})
tests=a.find('div', attrs={'class':'sorting_8'})
state.append(state.text)
active_cases.append(active_cases.text)
confirmed_cases.append(confirmed_cases.text)
confirmed_deaths.append(confirmed_deaths.text)
tests.append(tests.text)

python coronavirus.py

df = pd.DataFrame({'State':state,'Active Cases':active_cases,'Total Confirmed Cases':confirmed_cases, 'Total Confirmed Deaths':confirmed_deaths, 'Tests':tests})
df.to_csv('covid.csv', index=False, encoding='utf-8')
