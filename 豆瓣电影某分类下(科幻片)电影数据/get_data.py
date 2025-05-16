# _*_ coding : utf-8 _*_
import json
import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
    'Cookie': 'll="118254"; bid=TFqdTWQ2cq8; __utmv=30149280.26942; _pk_id.100001.4cf6=ba3e77a5cbb11c18.1697200792.; __yadk_uid=u0opzlCfwkvLUsUFtfY5fw2k2HM7l2Pv; _vwo_uuid_v2=DBA58FD2F8EE30421B89306DC3A4531C3|eca9ff3763537c33e1b0a553dd1942cf; viewed="3354490_26879778_35727756_26838444_27145908_30234628_35061159_35043951_26768309_30254298"; _pk_ref.100001.4cf6=["","",1703213811,"https://cn.bing.com/"]; _pk_ses.100001.4cf6=1; __utmz=30149280.1703213811.5.5.utmcsr=cn.bing.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmc=30149280; __utma=30149280.1842172659.1697200647.1700834944.1703213811.5; __utmz=223695111.1703213811.2.2.utmcsr=cn.bing.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmc=223695111; __utmb=223695111.0.10.1703213811; __utma=223695111.336256830.1697200792.1697200792.1703213811.2; dbcl2="269424515:vOBvnBa002o"; ck=pWoP; frodotk_db="402ca9d3b71cc79dc085fd7b255656d7"; push_noty_num=0; push_doumail_num=0; ap_v=0,6.0; __utmt=1; __utmb=30149280.4.10.1703213811'
}


def get_intro():
    url = 'https://movie.douban.com/j/chart/top_list'

    param = {
        'type': 17,  # 分类类别 17表示科幻
        'interval_id': '100:90',  # interval_id为固定数据
        'start': 0,  # 起始序号
        'limit': 100  # 电影条目数 需要100就修改成100
    }
    response = requests.get(url, headers=headers, params=param)
    content = json.loads(response.text)
    for item in content:
        title.append(item['title'])
        types.append(";".join(item['types']))
        release_date.append(item['release_date'])
        urls.append(item['url'])


def get_details():
    for href in urls:
        print(href)
        response = requests.get(href, headers=headers)
        requests.get('https://movie.douban.com/blank?expand', headers=headers)
        content = response.text
        soup = BeautifulSoup(content, 'html.parser')
        directors = soup.select('a[rel="v:directedBy"]')
        stories = soup.select('span[property="v:summary"]')
        director.append(",".join(i.text for i in directors))
        story.append(stories[0].text.strip().replace(' ','').replace('\n',''))


def write_txt():
    for i in range(len(title)):
        content = '名称:' + title[i] + '\n' + '导演:' + director[i] + '\n' + '类型:' + types[i] + '\n' + '上映日期:' + \
                  release_date[i] + '\n' + '剧情简介:' + story[i]

        with open(f"{title[i]}.txt", "w", encoding='UTF-8') as f:
            f.write(content)


if __name__ == '__main__':
    title = []
    types = []
    release_date = []
    urls = [] #电影详情页
    director = [] #导演
    story = []  #剧情简介
    get_intro() #获取电影名、类型、上映日期
    get_details() #获取导演、剧情简介
    write_txt() #写入txt
