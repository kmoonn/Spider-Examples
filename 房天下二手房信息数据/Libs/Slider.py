import requests

url ='https://sz.esf.fang.com/house/i353/?rfss=1-9ab598a9b192910416-15'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
    'cookie': 'global_cookie=2pa8yvjuu9bbbr8f35wugc7vz1ylq0a1ypp; __utma=147393320.222116733.1702260677.1702260677.1702260677.1; __utmc=147393320; __utmz=147393320.1702260677.1.1.utmcsr=cn.bing.com|utmccn=(referral)|utmcmd=referral|utmcct=/; csrfToken=Dvh-nS7QNIVlRvtlq7lvvLx-; g_sourcepage=esf_fy%5Elb_pc; city.sig=OGYSb1kOr8YVFH0wBEXukpoi1DeOqwvdseB7aTrJ-zE; city=tj; unique_cookie=U_2pa8yvjuu9bbbr8f35wugc7vz1ylq0a1ypp*25; __utmt_t0=1; __utmt_t1=1; __utmt_t2=1; __utmb=147393320.75.10.1702260677'
}
response = requests.get(url, headers=headers)

content = response.content.decode('utf-8')

if "请拖动滑块进行验证" in content:
    print("遇到滑块验证")
