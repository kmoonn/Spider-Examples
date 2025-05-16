# _*_ coding : utf-8 _*_
# @Time : 2023-12-05 19:25
# @Author : Kmoon_Hs
# @File : QueryCompany

import json
import pandas as pd
import requests

headers = {
    # 'Connection': 'close',
    'Referer': 'https://spcjsac.gsxt.gov.cn/index.html',
    'Cookie': 'Hm_lvt_05faea25c554a42963bea18b02450589=1701756057; Hm_lpvt_05faea25c554a42963bea18b02450589=1701757069',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36'
}
url = "https://spcjsac.gsxt.gov.cn/api/goods/data"


def get_data(check_flag, goods_enterprise):
    payload = {
        'food_type': '',
        'order_by': 'time',
        'pageNumber': 1,
        'pageSize': 10,
        'goods_enterprise': goods_enterprise,
        # 'sampling_province': '',
        # 'name_first_letter': '',
        # 'food_name': '',
        # 'bar_code': '',
        'check_flag': check_flag  # 合格q/不合格uq
    }
    res = requests.post(url, data=payload, headers=headers)
    data = json.loads(res.text)
    rows = data['data']['rows']
    return rows


def read_Excel():
    companys = []
    file = pd.read_excel(r'上市公司名单.xlsx')
    data = file.values
    for i in data:
        companys.append(i[0])
    return companys


if __name__ == '__main__':
    result = []
    companys = read_Excel()
    for item in companys:
        res = get_data('uq', item)
        print(item, res)
        if len(res) > 0:
            result.append(item)
    print("匹配数量：", len(result))
    data = {'公司': result}
    data = pd.DataFrame(data)
    data.to_excel('不合格.xlsx', index=False)
    result = []
    for item in companys:
        res = get_data('q', item)
        print(item, res)
        if len(res) > 0:
            result.append(item)
    print("匹配数量：", len(result))
    data = {'公司': result}
    data = pd.DataFrame(data)
    data.to_excel('合格.xlsx', index=False)
