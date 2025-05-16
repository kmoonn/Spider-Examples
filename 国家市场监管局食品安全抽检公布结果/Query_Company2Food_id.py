# _*_ coding : utf-8 _*_
# @Time : 2023-12-05 22:05
# @Author : Kmoon_Hs
# @File : Query_Company2Food_id


import json
import pandas as pd
import requests

headers = {
    'Referer': 'https://spcjsac.gsxt.gov.cn/index.html',
    'Cookie': 'Hm_lvt_05faea25c554a42963bea18b02450589=1701756057; Hm_lpvt_05faea25c554a42963bea18b02450589=1701757069',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36'
}
url = "https://spcjsac.gsxt.gov.cn/api/goods/data"


def get_pages(check_flag, goods_enterprise, pageNumber=1):
    payload = {
        'food_type': '',
        'order_by': 'time',
        'pageNumber': pageNumber,
        'pageSize': 10,
        'goods_enterprise': goods_enterprise,
        'check_flag': check_flag  # 合格q/不合格uq
    }
    res = requests.post(url, data=payload, headers=headers)
    data = json.loads(res.text)
    pages = round(data['data']['total'] / 10 + 0.5)
    return pages


def get_data(check_flag, goods_enterprise, pageNumber=1):
    payload = {
        'food_type': '',
        'order_by': 'time',
        'pageNumber': pageNumber,
        'pageSize': 10,
        'goods_enterprise': goods_enterprise,
        'check_flag': check_flag  # 合格q/不合格uq
    }
    res = requests.post(url, data=payload, headers=headers)
    data = json.loads(res.text)
    rows = data['data']['rows']
    return rows


def read_Excel():
    companys = []
    file = pd.read_excel(r'dataset/part合格.xlsx')
    data = file.values
    for i in data:
        companys.append(i[0])
    return companys


if __name__ == '__main__':
    companys = read_Excel()
    food_name = []
    food_id = []

    for company in companys:
        # 合格的食品名称
        food_name1 = []
        food_id1 = []
        pages = get_pages('q', company)
        print(pages)
        for i in range(1, pages + 1):
            data = get_data('q', company, pageNumber=i)
            for item in data:
                food_name1.append(item['food_name'])
                food_id1.append(item['id'])

        # 不合格的食品名称
        food_name2 = []
        food_id2 = []
        pages = get_pages('uq', company)
        print(pages)
        for i in range(1, pages + 1):
            data = get_data('uq', company, pageNumber=i)
            for item in data:
                food_name2.append(item['food_name'])
                food_id2.append(item['id'])

        food_name = food_name1 + food_name2
        food_id = food_id1 + food_id2
        content = {
            '公司名称': [company] * len(food_name),
            '食品名称': food_name,
            '食品ID': food_id
        }
        try:
            content = pd.DataFrame(content)
            content.to_excel('dataset/temp.xlsx', index=False, header=False)
            print(company + "---------写入成功---------")
        except Exception:
            print(company + "---------写入失败---------")
