# _*_ coding : utf-8 _*_
# @Time : 2024-01-07 20:50
# @Author : Kmoon_Hs
# @File : get_data
import json

import requests

url = 'https://whut-experiment.hooook.com/api/teacher/patch_check_records'

headers = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd2h1dC1leHBlcmltZW50Lmhvb29vay5jb21cL2FwaVwvdGVhY2hlclwvbG9naW4iLCJpYXQiOjE3MDQ2MzA2NDEsImV4cCI6MTcwOTk0OTA0MSwibmJmIjoxNzA0NjMwNjQxLCJqdGkiOiJNVlBaTHNid0JSYzQ3MjBjIiwic3ViIjo0MTE5LCJwcnYiOiJiMjdiZWUyM2JhZjU0MjlmNWI5YTIxNjk2ZmRlMDNjMjc3MDQ0ZWE1Iiwia2V5IjoiYXBpLnRlYWNoZXIifQ.lN9RCucXFaqdzyT3-qaW58AkEecB24xU9xsNU26BkeY',
}


def get_data(patch_id):
    params = {
        'patch_id': patch_id,  # 实验项目 55339
        'type': 3  # 缺卡
    }
    response = requests.get(url, params=params, headers=headers)

    data = json.loads(response.text)['data']

    for item in data:
        print(item)
        # print(item['nickname'])


if __name__ == '__main__':
    experiment1 = [55334, 55339, 55345, 55347, 55348, 55349]  # 软件2101-02
    experiment2 = [55401, 55403, 55405, 55406, 55408, 55410]  # 软件zy2101-02
    for exp in experiment2:
        print("实验{}缺卡学生：".format(exp))
        get_data(exp)
