import requests
import re
from bs4 import BeautifulSoup


# 请求当当网
def request_dangdang(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
    except requests.RequestException:
        return None


# 解析y源代码
def parse_response(html):
    data = []
    soup = BeautifulSoup(html, 'html.parser')
    titles = soup.select("div[class='name'] a")
    pics = soup.select("div[class='pic'] img")
    authors_publishers = soup.select("div[class='publisher_info'] a")
    prices = soup.select("span[class='price_n']")
    for i in authors_publishers:
        if i.get('title') == None:
            authors_publishers.remove(i)
    for item in range(len(titles)):
        dic = {}
        dic['title'] = titles[item].text
        dic['pic'] = pics[item].get('src')
        dic['author'] = authors_publishers[item].get('title')
        dic['price'] = prices[item].text
        data.append(dic)
    return data


if __name__ == "__main__":
    data = []
    for page in range(1, 25):
        url = 'http://bang.dangdang.com/books/fivestars/01.00.00.00.00.00-recent30-0-0-1-' + str(page)
        html = request_dangdang(url)
        data += parse_response(html)
    for i in data:
        print(i)
