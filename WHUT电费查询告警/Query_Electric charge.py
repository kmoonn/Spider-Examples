# _*_ coding : utf-8 _*_
# @Time : 2023-12-08 19:03
# @Author : Kmoon_Hs
# @File : Query_Electric charge
import json

import requests

url = 'http://cwsf.whut.edu.cn/queryReserve'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
    'Cookie': 'JSESSIONID=DDDDA8A10C1AE4FB3089C6A872944DE0'
}
payload = {
    'meterId': '0311.004969.1',
    'factorycode': 'E035'
}

response = requests.post(url, headers=headers, data=payload)

content = json.loads(response.text)

meterOverdue = content['meterOverdue']

print(meterOverdue)
