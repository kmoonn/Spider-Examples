# _*_ coding : utf-8 _*_
# @Time : 2023-12-14 19:26
# @Author : Kmoon_Hs
# @File : get_charts
import requests


def get_charts(paperId):
    url = f'https://ieeexplore.ieee.org/rest/document/{paperId}/figures'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
        'Cookie': 'fp=3e94efc545ab62ac0a8b7082295fe19e; WLSESSION=237134476.20480.0000; osano_consentmanager_uuid=58f52f39-edc2-4078-b076-a1faa92a7d8f; osano_consentmanager=aYnRItFYW85ts3NL4TJ5W3hdu2kG5wPLS_Za1TpifskPW_yzXMJ00ZAQVGK09PW3bLdq2ItNLirAAPu8NTt3-mUFC2eLLacOOkKQJGez87h7CxnlmB2loI2IlQmU_jes3MkoTIsMLBiuAHMQ3gS7V1BQua7ceI3sYj6dGdmwhy1ggT2xxFKH1_a6-f2nVuvvfJfWAV7t_87fCv1GvEhS0v-v1rnpQqofbKC3mheva1F3LffpQSMD5dQQlz-HKqEajgfKtrVnR_RSJzwLgfRfaBuVGV0KT02LI2g74g==; JSESSIONID=PEln_WyP9cttMBSPJk8P_qE3Qde1VDID9oSveovN7FA95t8ntDza!1902263683; ipCheck=218.197.143.107; ipList=172.234.87.48,172.233.72.221,218.197.143.107; __gads=ID=18885f7cb08a55a0:T=1702551713:RT=1702551713:S=ALNI_MYKPkMU_uiNqpfnKw5ShyTG4vlQtw; __gpi=UID=00000cae6fac56fd:T=1702551713:RT=1702551713:S=ALNI_MaxdRWNaP4ANJcGz0hnkzYLjLfqkg; AMCVS_8E929CC25A1FB2B30A495C97%40AdobeOrg=1; s_ecid=MCMID%7C62848589902211288610645463678100663156; AMCV_8E929CC25A1FB2B30A495C97%40AdobeOrg=359503849%7CMCIDTS%7C19706%7CMCMID%7C62848589902211288610645463678100663156%7CMCAAMLH-1703156514%7C11%7CMCAAMB-1703156514%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1702558915s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.0.1; s_cc=true; cto_bundle=JNZ51V9mdHZSa3Fub05SRzdtcXBFb3lFZWw1SXNTaTdMMllqM1F3RW5aNXFSam1GenFDa0hPSVpwZzZrMUQ4Z0NoMklyZEFSTkRxMTdhZk0xNWp6NUVTbllqdElPb0d2RDd4UUlGa0RYZkJXdDJpeG1CZmhhQ1AlMkI0RHp1N1Z0dHp4RmRmNyUyQm04V05UcVE0VWlNWVNobEI0RjF3JTNEJTNE; utag_main=v_id:018c67fd77e90020ff60dec2492005073003c06b00bd0$_sn:1$_se:5$_ss:0$_st:1702553533300$ses_id:1702551713772%3Bexp-session$_pn:2%3Bexp-session$vapi_domain:ieeexplore.ieee.org; ERIGHTS=z2YWAol4MqiuTQTJsox2B86EQXywSTVf26*x2F76ZefDts31mIwrdZOYNgwx3Dx3D-18x2dKeLEx2BO06HOHazdpYRIPs4Qx3Dx3D6adhXdrGSkJJoSM2VQNhHgx3Dx3D-seCuihlon4Yn6ravae9KzQx3Dx3D-x2BoJmAJK1Z3DbmTWzFvGVAAx3Dx3D; s_sq=ieeexplore.prod%3D%2526c.%2526a.%2526activitymap.%2526page%253DDynamic%252520html%252520doc%252520detail%2526link%253DFigures%2526region%253Dfigures-header%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253DDynamic%252520html%252520doc%252520detail%2526pidt%253D1%2526oid%253DFigures%2526oidt%253D3%2526ot%253DSUBMIT; xpluserinfo=eyJpc0luc3QiOiJ0cnVlIiwiaW5zdE5hbWUiOiJXVUhBTiBVTklWRVJTSVRZIE9GIFRFQ0hOT0xPR1kiLCJwcm9kdWN0cyI6IklFTHxWREV8Tk9LSUEgQkVMTCBMQUJTfCJ9; seqId=20874; TS01b03060=012f35062325c39b9aee98fb54de6d01952d236f51ec2423cca1b9958b0978bb413ff75ed99dbb51dfdddae32604d82964c30d182c; TS8e392b3b029=080f8ceb8aab28002b1b67ac57b63c5de79bdde9aaafde22a98ef0da8cf212349b526c0458ed972e42aefebf3c8bbb01; TSaeeec342027=080f8ceb8aab20008fd41b1d6daf7f3501622f9eb05e8c8efc43dbd5012c4a5edab0b733da8476c4082dcd31d8113000a791d41c316fe0e96428227ff2cb608b3ebf00dacd27bf9d088209d7bbb696c3215fe374f6abee7dd98c558171a422a3'
    }
    response = requests.get(url, headers=headers)
    content = response.json()

    all_figures = content['figures']
    figure = {}
    for fig in all_figures:
        labele = fig['label']
        url = 'https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/6488902/9933169/9858333/'+fig['graphic']['large']
        figure[labele] = url
    return figure


if __name__ == '__main__':
    paperId = '9858333'
    print(get_charts(paperId))