import requests
from lxml import etree

start_url = "https://www.kuaidaili.com/free/inha/{}/"
url_list = [start_url.format(i) for i in range(1, 6)]  # 这里可以按实际情况更改
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"}


def parse(html):
    tr_list = html.xpath("/html/body/div[3]/main/div/section/div[2]/div[2]/table/tbody/tr")
    ip_list = []
    for tr in tr_list:
        if tr.xpath("./td/text()")[2] == "高匿名" and tr.xpath("./td/text()")[3] == "HTTP":
            ip = {}
            ip["ip"] = tr.xpath("./td/text()")[0]
            ip["port"] = tr.xpath("./td/text()")[1]
            ip_list.append(ip)
    return ip_list


def check_ip(ip_list):
    correct_ip = []
    for ip in ip_list:
        ip_port = ip["ip"] + ":" + ip["port"]
        proxies = {'http': ip_port}
        try:
            response = requests.get('http://icanhazip.com/', proxies=proxies,
                                    timeout=5).text
            if response.strip() == ip["ip"]:  # 如果请求该网址，返回的IP地址与代理IP一致，则认为代理成功
                print("可用的IP地址为：{}".format(ip_port))
                correct_ip.append(ip_port)
        except:
            print("不可用的IP地址为：{}".format(ip_port))
    return correct_ip


def get_ip():
    # 获得URL地址
    correct_all_ip = []
    for url in url_list:
        # 获得请求，
        response = requests.get(url, headers=headers).content.decode()
        # 解析页面
        html = etree.HTML(response)
        # 得到IP
        ip_list = parse(html)
        # 检查IP
        correct_ip = check_ip(ip_list)
        correct_all_ip.extend(correct_ip)
    # 返回所有IP
    return correct_all_ip
