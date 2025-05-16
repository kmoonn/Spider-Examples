import requests
import re
import csv
from bs4 import BeautifulSoup


def get_html(url):  # 获取页面源码
    url = url
    result = requests.get(url)  # 发出访问请求
    result.encoding = 'gb2312'  # 设置编码格式，搜索页面源码charset
    html = result.text  # 获取源码
    return html


title = []  # 存储标题
data = []  # 存储下载地址
magnet = []

n = 1  # 页码
status = 0  # 重新访问次数

while n < 3:  # 这里我们使用while循环，处理访问出错的页面
    url = 'https://www.dygod.net/html/gndy/china/index_{}.html'.format(
        str(n)) if n != 1 else 'https://www.dygod.net/html/gndy/china/index.html'
    html = get_html(url)
    print(url)
    soup = BeautifulSoup(html, 'html.parser')
    href = soup.select('a[class="ulink"]')

    for h in href:  # 遍历页面所有电影详情页
        if h.get('href')[-4:] != 'html':
            continue
        info_url = 'https://www.dygod.net/' + h.get('href')
        print(info_url)
        info_html = get_html(info_url)
        try:
            soup = BeautifulSoup(info_html, 'html.parser')
            titles = soup.select('div[class="title_all"]')
            downloads = soup.select('div[class="player_list"] ul li a')
            magnets = soup.select('tbody tr a')
            for item in downloads:
                data.append(item.get('href'))
            for item in titles:
                title.append(item.text)
            for item in magnets:
                magnet.append(item.get('href'))
        except:
            print("遇到错误")
    n += 1  # 翻页

print(data)
print(title)

# all_data = list(zip(title, data))  # 将标题和地址打包
# with open('国内电影.csv', 'w', newline='', encoding='utf-8-sig') as f:  # 写入文件
#     writer = csv.writer(f)
#     writer.writerows(all_data)
