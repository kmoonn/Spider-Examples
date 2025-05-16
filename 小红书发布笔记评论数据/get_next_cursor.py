# _*_ coding : utf-8 _*_
# @Time : 2023-12-10 14:32
# @Author : Kmoon_Hs
# @File : get_next_cursor
import requests

headers = {
    'cookie': 'a1=18934f25eabmll65hx6gz0q96btf791l67goufzve50000160405; webId=ab185ce32eb997c2a79ed2cb355c3768; gid=yYjq4iJKJ8KjyYjq4iJ2dWiu0D611K2xCKkukhd8AjKD9l28iWjy17888yK84828yDy0SfY0; abRequestId=ab185ce32eb997c2a79ed2cb355c3768; cacheId=c4e99f2c-0a32-4ed5-bd3c-2a227f8cbb87; webBuild=3.19.4; acw_tc=52448c01ad2209914b5fbc1d81a0da0a8bf4e4d0293855d54da841bd8c317c4b; xsecappid=xhs-pc-web; web_session=0400698f6d9bbf56d49a051940374bdbe60ab1; unread={%22ub%22:%22656ff48c0000000006022abf%22%2C%22ue%22:%226571b958000000000503a2be%22%2C%22uc%22:29}; websectiga=7750c37de43b7be9de8ed9ff8ea0e576519e8cd2157322eb972ecb429a7735d4; sec_poison_id=8f8806b8-d48a-40b2-911e-71be54e57ea8',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
}


def get_next_cursor(note_id, page, cursor=''):
    if page == 1:
        url = 'https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?note_id={}&top_comment_id=&image_scenes=FD_WM_WEBP,CRD_WM_WEBP'.format(
            note_id)
    else:
        url = 'https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?note_id={}&top_comment_id=&image_scenes=FD_WM_WEBP,CRD_WM_WEBP&cursor={}'.format(
            note_id, cursor)
    # 发送请求
    r = requests.get(url, headers=headers)
    # 解析数据
    json_data = r.json()
    # 得到下一页的游标
    if json_data['data']['cursor'] != '':
        next_cursor = json_data['data']['cursor']
    else:
        next_cursor = ''
    return next_cursor
