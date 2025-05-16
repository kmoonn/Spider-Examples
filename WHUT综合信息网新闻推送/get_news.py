# _*_ coding : utf-8 _*_
# @Time : 2023-12-08 17:51
# @Author : Kmoon_Hs
# @File : get_news

import requests
from bs4 import BeautifulSoup
import datetime
import re

url = 'http://i.whut.edu.cn/xxtg/znbm/yjsy/'

header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/98.0.4758.139 Safari/537.36'
}

response = requests.get(url, headers=header)
content = response.content.decode('utf-8')
soup = BeautifulSoup(content, 'html.parser')

result = soup.select('ul[class="normal_list2"] li a')

today = datetime.date.today().strftime('%Y%m%d')

today_news = {}

for item in result:
    title = item.get('title')
    link = url + item.get('href')[2:]
    match = re.search(r"t(\d{8})_", link).group(1)
    if match == today:
        today_news[title] = link

print(today_news)
