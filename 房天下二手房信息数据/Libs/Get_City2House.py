import time

import requests
from bs4 import BeautifulSoup


def Get_City():
    url = 'https://tj.esf.fang.com/newsecond/esfcities.aspx?rfss=2-38aa032e391ab8b25c-79#'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
        'cookie': 'global_cookie=2pa8yvjuu9bbbr8f35wugc7vz1ylq0a1ypp; __utma=147393320.222116733.1702260677.1702260677.1702260677.1; __utmc=147393320; __utmz=147393320.1702260677.1.1.utmcsr=cn.bing.com|utmccn=(referral)|utmcmd=referral|utmcct=/; csrfToken=Dvh-nS7QNIVlRvtlq7lvvLx-; g_sourcepage=esf_fy^lb_pc; city=tj; __utmt_t0=1; __utmt_t1=1; __utmt_t2=1; __utmb=147393320.39.10.1702260677; unique_cookie=U_2pa8yvjuu9bbbr8f35wugc7vz1ylq0a1ypp*12'
    }

    response = requests.get(url, headers=headers)

    content = response.content.decode('utf-8')

    soup = BeautifulSoup(content, 'html.parser')

    res = soup.select('div[class="searchcity floatl"] a')
    city = {}
    for item in res:
        city[item.text] = item.get('href')
    return city

def Get_City2House(cityname, href, page):
    url = f'{href}house/i3{page}/?rfss=1-9ab598a9b192910416-15'
    print(url)

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
        'cookie': 'global_cookie=2pa8yvjuu9bbbr8f35wugc7vz1ylq0a1ypp; __utma=147393320.222116733.1702260677.1702260677.1702260677.1; __utmc=147393320; __utmz=147393320.1702260677.1.1.utmcsr=cn.bing.com|utmccn=(referral)|utmcmd=referral|utmcct=/; csrfToken=Dvh-nS7QNIVlRvtlq7lvvLx-; g_sourcepage=esf_fy%5Elb_pc; city.sig=OGYSb1kOr8YVFH0wBEXukpoi1DeOqwvdseB7aTrJ-zE; city=tj; unique_cookie=U_2pa8yvjuu9bbbr8f35wugc7vz1ylq0a1ypp*25; __utmt_t0=1; __utmt_t1=1; __utmt_t2=1; __utmb=147393320.75.10.1702260677'
    }
    # ip = get_ip()
    try:
        response = requests.get(url, headers=headers)
    except Exception:
        time.sleep(5)
        response = requests.get(url, headers=headers)

    content = response.content.decode('utf-8')
    if "请拖动滑块进行验证" in content:
        print("遇到滑块验证")

    soup = BeautifulSoup(content, 'html.parser')

    titles = soup.select('div [class="shop_list shop_list_4"] h4[class="clearfix"] span[class="tit_shop"]')
    descriptions = soup.select('div [class="shop_list shop_list_4"] p[class="tel_shop"]')
    addresses = soup.select('div [class="shop_list shop_list_4"] p[class="add_shop"]')
    unit_prcies = soup.select('div [class="shop_list shop_list_4"] dd[class="price_right"]')
    total_prices = soup.select('div [class="shop_list shop_list_4"] dd[class="price_right"] span[class="red"]')
    '''
    城市 cityname
    标题 tit_shop
    房源信息描述 tel_shop
    房源位置信息 add_shop
    单价 price_right span
    房总款  price_right red
    '''
    city = [cityname] * len(titles)
    title = []
    description = []
    address = []
    unit_price = []
    total_price = []

    for i in range(len(titles)):
        title.append(titles[i].get_text().strip())
        description.append("".join(descriptions[i].text.strip().split()))
        address.append("".join(addresses[i].text.strip().split()))
        unit_price.append(unit_prcies[i].select('span').pop(1).text.strip())
        total_price.append(total_prices[i].text.strip())
    return city, title, description, address, unit_price, total_price