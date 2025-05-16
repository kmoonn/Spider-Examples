# _*_ coding : utf-8 _*_
# @Time : 2023-12-14 18:53
# @Author : Kmoon_Hs
# @File : get_authors

import requests
import re
import json

def get_authors(paperId):
    url = f'https://ieeexplore.ieee.org/document/{paperId}/authors'
    headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
    'Cookie': 'fp=3e94efc545ab62ac0a8b7082295fe19e; WLSESSION=237134476.20480.0000; osano_consentmanager_uuid=58f52f39-edc2-4078-b076-a1faa92a7d8f; osano_consentmanager=aYnRItFYW85ts3NL4TJ5W3hdu2kG5wPLS_Za1TpifskPW_yzXMJ00ZAQVGK09PW3bLdq2ItNLirAAPu8NTt3-mUFC2eLLacOOkKQJGez87h7CxnlmB2loI2IlQmU_jes3MkoTIsMLBiuAHMQ3gS7V1BQua7ceI3sYj6dGdmwhy1ggT2xxFKH1_a6-f2nVuvvfJfWAV7t_87fCv1GvEhS0v-v1rnpQqofbKC3mheva1F3LffpQSMD5dQQlz-HKqEajgfKtrVnR_RSJzwLgfRfaBuVGV0KT02LI2g74g==; ipCheck=172.234.87.48; TS01b03060=012f3506238adfccb4b6f8bfae75e23cedee7f0cd8e41894c18f03189084cda1552b1bfb152a80c320751b8342dc18bbdced603b6b; JSESSIONID=ObVne9p7jHmVz30yocIVvF0wHxii9JvRIKLFPmKreJctdvZZUgPR!1902263683; ERIGHTS=D795p2c0x2FlHuAtv64Tfcx2FVQx2FtLHMTLLu-18x2dx2F1Sgi9U5eiAFKN8txxtZx2BIAx3Dx3DvIHVYpMReI0tXCNzjuZZuQx3Dx3D-ik0nx2BLi4cJ3kAKLGx2B3vVAQx3Dx3D-kmSjmbNedUPIEul6IcIoMQx3Dx3D; ipList=172.234.87.48; xpluserinfo=eyJpc0luc3QiOiJ0cnVlIiwiaW5zdE5hbWUiOiJXVUhBTiBVTklWRVJTSVRZIE9GIFRFQ0hOT0xPR1kiLCJwcm9kdWN0cyI6IklFTHxWREV8Tk9LSUEgQkVMTCBMQUJTfCJ9; seqId=20874; TSaeeec342027=080f8ceb8aab20000bdf80af10b7de2eaf02f27649ab916a4356cec075ceba04d0ab2d3de561ad7308a500f144113000cc1d659a96695baee2253fdff755ab295bc94e3968395e96f58032a2444dfed5e2ed2f64cada39648740684e498b58b9'
    }
    response = requests.get(url, headers=headers)
    content = response.text
    all_authors = re.findall('metadata=.+.;', content)[0][9:-1]
    all_authors = json.loads(all_authors)['authors']
    authors = {}

    for author in all_authors:
        name = author['name']
        image = 'https://ieeexplore.ieee.org/'+author['bio']['graphic'] if 'graphic' in author['bio'] else ''
        authors[name] = image
    return authors

if __name__ == '__main__':
    paperId = '9858333'
    authors = get_authors(paperId)
    print(authors)