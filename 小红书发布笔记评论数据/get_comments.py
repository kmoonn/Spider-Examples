# _*_ coding : utf-8 _*_
# @Time : 2023-12-10 13:47
# @Author : Kmoon_Hs
# @File : get_comments
import json

import pandas as pd
import requests
from get_page_num import get_page_num
from get_next_cursor import  get_next_cursor

url = "https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?"

headers = {
    'cookie': 'a1=18934f25eabmll65hx6gz0q96btf791l67goufzve50000160405; webId=ab185ce32eb997c2a79ed2cb355c3768; gid=yYjq4iJKJ8KjyYjq4iJ2dWiu0D611K2xCKkukhd8AjKD9l28iWjy17888yK84828yDy0SfY0; abRequestId=ab185ce32eb997c2a79ed2cb355c3768; cacheId=c4e99f2c-0a32-4ed5-bd3c-2a227f8cbb87; webBuild=3.19.4; acw_tc=52448c01ad2209914b5fbc1d81a0da0a8bf4e4d0293855d54da841bd8c317c4b; xsecappid=xhs-pc-web; web_session=0400698f6d9bbf56d49a051940374bdbe60ab1; unread={%22ub%22:%22656ff48c0000000006022abf%22%2C%22ue%22:%226571b958000000000503a2be%22%2C%22uc%22:29}; websectiga=7750c37de43b7be9de8ed9ff8ea0e576519e8cd2157322eb972ecb429a7735d4; sec_poison_id=8f8806b8-d48a-40b2-911e-71be54e57ea8',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
}

def get_comments(note_id):
    comment_list = []
    pages = get_page_num(note_id)
    for page in range(1, pages + 1):
        print("正在爬取第{}页".format(page))
        cursor = get_next_cursor(note_id, page)
        params = {
            'note_id': note_id,
            'cursor': cursor if page > 1 else None
        }
        response = requests.get(url, headers=headers, params=params)

        content = json.loads(response.text)

        data = content['data']['comments']

        for item in data:
            comment_list.append(item['content'])
    return comment_list



if __name__ == '__main__':

    note_id = '65741b63000000003801e4b8'
    comment_list = get_comments(note_id)

    # 保存数据到csv
    '''
            {
            '笔记链接': 'https://www.xiaohongshu.com/explore/' + note_id,
            '页码': page,
            '评论者昵称': nickname_list,
            '评论者id': user_id_list,
            '评论者主页链接': user_link_list,
            '评论时间': create_time_list,
            '评论IP属地': ip_list,
            '评论点赞数': like_count_list,
            '评论级别': comment_level_list,
            '评论内容': content_list,
        }
    '''
    content = {
        '评论内容': comment_list
    }
    content = pd.DataFrame(content)
    content.to_csv('dataset.csv', index=False)
    print("写入完毕")
