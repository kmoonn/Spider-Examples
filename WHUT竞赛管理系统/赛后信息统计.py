# coding=utf-8
# @Time : 2024/8/27 下午3:07
# @Author : Kmoon_Hs
# @File : 赛后信息统计
import os

import requests
import pandas as pd

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 '
                  'Safari/537.36',
    'Cookie': 'layui-this=2; checkbox=true; userName=; passWord=ky113966; school=; phone=15927249525; '
              'connect.sid=s%3AG08ZKpBvhGRVK0vTBn_8vT2nbOVY0WFo.fvhcRAwjDqRHEyMu9hiVQVuAAMf8dGAcx3g9c9DdjWE'
}


def get_award_info(year, match):
    url = 'http://www.racelink.cn/re/award/data'

    params = {
        'key[match]': f'{year}-{match}',
        'page': 1,
        'limit': 1000,
        'year': year,
        'keyWord':'赵冬冬'
    }

    response = requests.get(url, params=params, headers=headers)

    data = response.json()['data']

    return data


def see_image(year, matchname, name):
    url = f"http://www.racelink.cn:8080/vIACP/service/readFile?code=1003&name={name}"

    dir_name = f"{year}/{matchname}/"

    if not os.path.isdir(dir_name):
        os.makedirs(dir_name)

    file_path = dir_name + name

    response = requests.get(url, headers=headers)
    with open(file_path, "wb") as code:
        code.write(response.content)  # 调用write方法时将内存中的二进制数据写入硬盘


def write2csv():
    df = pd.DataFrame()


match = {
    'ICPC': '004',
    'CCPC': '101',
    'RAICOM': '052',
    '天梯': '033',
    '百度之星': '153'
}

if __name__ == '__main__':
    years = []
    name = []
    stage = []
    level = []
    image = []
    manage = []
    member = []
    mentor = []
    for year in [2023, 2024]:
        for matchname, matchid in match.items():
            data = get_award_info(year, matchid)
            print(f'================={year}-{matchname}-{matchid}================={len(data)}')
            for item in data:
                years.append(year)
                name.append(item['ma']['name'])
                stage.append(item['stage'])
                level.append(item['name'])
                image.append(item['image'])
                manage.append(item['manage'])
                member.append(item['member'])
                mentor.append(item['mentor'])
                see_image(year, matchname, item['image'])

    df = pd.DataFrame(
        {
            'year': years,
            'name': name,
            'stage': stage,
            'level': level,
            'image': image,
            'manage': manage,
            'member': member,
            'mentor': mentor
        }
    )
    df.to_excel('2023-2024获奖统计.xlsx', sheet_name='获奖统计', index=False)
