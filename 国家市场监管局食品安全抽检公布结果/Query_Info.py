# _*_ coding : utf-8 _*_
# @Time : 2023-12-06 9:15
# @Author : Kmoon_Hs
# @File : Query_Info

import json
import time
import random

import pandas as pd
import requests

# 提取代理API接口，获取1个代理IP
api_url = "https://tps.kdlapi.com/api/gettps/?secret_id=ocjrr0oy67laj07ai59h&num=1&signature=imi94gzz6ovqbkn3cpzysc18z5p2odgf&pt=1&sep=1"

# 获取API接口返回的代理IP
proxy_ip = requests.get(api_url).text

# 用户名密码认证(私密代理/独享代理)
username = "t10184021044921"
password = "dk7fcbqe"
proxies = {
    "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip},
    "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": proxy_ip}
}

url = "https://spcjsac.gsxt.gov.cn/api/goods/info"

user_agent_list = [
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; …) Gecko/20100101 Firefox/61.0",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
    "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.5; en-US; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15",
    ]

headers = {'Origin': 'https://spcjsac.gsxt.gov.cn',
           'Connection': 'close',
           'Referer': 'https://spcjsac.gsxt.gov.cn/detail.html',
           'Cookie': 'Hm_lvt_05faea25c554a42963bea18b02450589=1701771843,1701824095,1701838932,1701846896; Hm_lpvt_05faea25c554a42963bea18b02450589=1701846900',
           'User-Agent': random.choice(user_agent_list)}

def get_pages(goods_enterprise, food_id, pagenumber=1):
    payload = {
        'food_type': '',
        'order_by': 'time',
        'pageNumber': pagenumber,
        'pageSize': 10,
        'goods_enterprise': goods_enterprise,
        'food_id': food_id
    }
    res = requests.post(url, data=payload, headers=headers)
    data = json.loads(res.text)
    pages = round(data['data']['total'] / 10 + 0.5)
    return pages


def get_data(goods_enterprise, food_id, pagenumber=1):
    payload = {
        'food_type': '',
        'order_by': 'time',
        'pageNumber': pagenumber,
        'pageSize': 10,
        'goods_enterprise': goods_enterprise,
        'food_id': food_id
    }
    res = requests.post(url, data=payload, headers=headers)
    data = json.loads(res.text)
    rows = data['data']['rows']
    return rows


def read_Excel():
    companys = []
    foodIDs = []
    foodNames = []
    file = pd.read_excel(r'dataset/公司-食品ID.xlsx')
    data = file.values
    for i in data:
        companys.append(i[0])
        foodNames.append(i[1])
        foodIDs.append(i[2])
    return companys, foodNames, foodIDs


if __name__ == '__main__':
    companys, foodNames, foodIDs = read_Excel()
    # companys, foodNames, foodIDs = ['獐子岛集团股份有限公司大连金贝广场'], ['花蛤罐头（香辣味）'], [3287069]
    fault = []
    flag = 0

    for i in range(len(foodIDs)):
        flag += 1
        if flag > 100:
            time.sleep(10)
            flag = 0
        sampling_name = []  # 被抽检单位名称
        sampling_province = []  # 被抽检单位所在省份
        production_address = []  # 标称生产企业地址
        food_product_time = []  # 生产日期/批号
        sample_type = []  # 规格型号
        check_flag = []  # 抽检结果
        # qualified_num = 0 #合格次数
        # unqualified_num = 0 # 不合格次数

        company = companys[i]
        food_name = foodNames[i]
        food_id = foodIDs[i]
        pages = get_pages(companys[i], foodIDs[i])
        print(pages)
        for k in range(1, pages + 1):
            # time.sleep(2)
            try:
                data = get_data(companys[i], foodIDs[i], pagenumber=k)[0]['check_list']
            except Exception:
                print("页码缺省")
                continue
            for item in data:
                for m in ['sampling_name', 'sampling_province', 'production_address', 'food_product_time',
                          'sample_type']:
                    if m not in item.keys():
                        item[m] = '/'
                sampling_name.append(item['sampling_name'])
                sampling_province.append(item['sampling_province'])
                production_address.append(item['production_address'])
                food_product_time.append(item['food_product_time'])
                sample_type.append(item['sample_type'])
                check_flag.append(item['check_flag'])
        l = len(check_flag)
        content = {
            '公司名称': [company] * l,
            '食品名称': [food_name] * l,
            '食品ID': [food_id] * l,
            '被抽检单位名称': sampling_name,
            '被抽检单位所在省份': sampling_province,
            '标称生产企业地址': production_address,
            '生产日期/批号': food_product_time,
            '规格型号': sample_type,
            '抽检结果': check_flag
        }
        try:
            content = pd.DataFrame(content)
            content.to_csv('dataset/temp2.csv', mode='a', index=False, encoding='GBK', header=False)
            print("第" + str(i + 1) + "条" + "---------写入成功---------")
        except Exception:
            fault.append(i + 1)
            print("第" + str(i + 1) + "条" + "---------写入失败---------")
    print(fault)
