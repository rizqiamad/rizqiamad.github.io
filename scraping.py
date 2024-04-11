import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime

# Get the current date and time
current_datetime = datetime.now()

# Extract the date and time portion
current_date = current_datetime.date()
current_time = current_datetime.time()

# Time and date format
formatted_date = current_date.strftime("%d %b %Y")
formatted_time = current_time.strftime("%H:%M:%S")

# Making a GET request
r = requests.get('https://www.republika.co.id/')

# Parsing the HTML
soup = BeautifulSoup(r.content, 'html.parser')

latest = soup.find('ul',class_='list-group wrap-latest')

captions = latest.find_all('div',class_='caption')

data = []

for capt in captions:
    
    if capt and capt.h3:  # Check if capt exists and capt.h3 is not None
        title = capt.h3.text
        kategori = capt.find('span',class_='kanal-info')
        raw_date = capt.find('div',class_='date')
        
        date = raw_date.text
        parts = date.split('-')
        time_info = parts[-1].strip()
        data.append({"judul":title,"kategori":kategori.text,"waktu_publish":time_info,"waktu_scraping":formatted_date +" "+formatted_time})
    
with open('data2.json','w') as f:
    json.dump(data,f,indent=2)