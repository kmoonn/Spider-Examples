#!/usr/bin/env python
# coding: utf-8

# In[1]:


# coding=utf-8
import random
import time

from scrapy.http import TextResponse
from scrapy.selector import Selector
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import pandas as pd

# 启动Chrome浏览器实例：
# 1）进入Chrome浏览器目录下，运行cmd
# 
# 2）运行chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\selenum\AutomationProfile"

# In[76]:


# 配置Chrome浏览器选项
options = Options()
options.add_experimental_option('debuggerAddress', '127.0.0.1:9222')  # 远程调控模式启用
# options.add_argument('--incognito')  # 隐身/无痕模式启用
browser = webdriver.Chrome(options=options)
action = ActionChains(browser)

# In[77]:


# 定义全局变量
key_word = ""
num = 0


# In[78]:


def selenium_test():
    global key_word, num  # 使用全局变量
    browser.get('https://www.xiaohongshu.com/explore')

    print("即将开始检查小红书登录状态...")
    # 定义循环：检查是否成功登录小红书
    while True:
        page_source = browser.page_source
        if '登录探索更多内容' in page_source:
            time.sleep(10)
            print('暂未登录，请手动登录')
            print('检查时间:', time.ctime())
            continue
        else:
            print('登录成功')
            print('检查时间:', time.ctime())
            time.sleep(3)
            break

    print("即将开始检查网页加载状态...")
    print("如果网页进入人机验证页面，请先手动完成验证。")
    print("请在文本框中根据提示输入搜索关键词和笔记爬取数量。")
    key_word = input("搜索话题关键词：")
    num = input("笔记爬取数量：")
    num = int(num)

    url = f'https://www.xiaohongshu.com/search_result?keyword={key_word}&source=web_explore_feed'
    browser.get(url)
    time.sleep(3)

    # 定义循环：检查页面是否加载成功
    while True:
        if key_word in browser.title:
            print('加载成功')
            print('检查时间:', time.ctime())
            break
        else:
            time.sleep(2)

    # 通过模拟点击更改排序方式
    sort_order = ['综合', '最新', '最热']
    print("请在文本框中根据提示输入对应数字来选择排序方式。")
    for i, order in enumerate(sort_order, 1):
        print(f'{i}.{order}')
    selected_order = input("请选择排序方式:")

    try:
        selected_order_index = int(selected_order)
        selected_order_text = sort_order[selected_order_index - 1]
        element = browser.find_element(By.XPATH, '//*[@id="global"]/div[2]/div[2]/div/div[1]/div[2]')
        action.move_to_element(element).perform()  # 模拟鼠标悬停
        menu = browser.find_element(By.CLASS_NAME, 'dropdown-items')
        option = menu.find_element(By.XPATH, f'/html/body/div[4]/div/li[{selected_order_index}]')
        option.click()  # 模拟鼠标点击
        print('已选择排序方式为:', selected_order_text)
        print('检查时间:', time.ctime())
    except Exception as e:
        print(e)


if __name__ == '__main__':
    selenium_test()

# In[79]:


URL_list = []
userURL_list = []

wait_time = random.uniform(10, 15)  # 生成随机等待时间


# 定义函数：解析网页内容，爬取数据
def parsePage(key_word):
    response = TextResponse(url=browser.current_url, body=key_word, encoding='utf-8')  # 将key_word转换为Response对象
    selector = Selector(response)
    divs = selector.xpath('//div[contains(@class, "feeds-container")]/section/div')  # 选中网页中包含笔记信息的部分

    print(f'当前页面包含{len(divs)}条笔记')

    # 定义循环：遍历divs获取每一篇笔记的信息
    for div in divs:
        # 选择并提取网页数据
        try:
            url = div.xpath('./div/a/@href').extract_first().split('/')[-1]  # 笔记URL
            user_url = div.xpath('./div/div/a/@href').extract_first()  # 用户URL

            print(url)

            URL_list.append(url)
            userURL_list.append(user_url)

            time.sleep(0.35)

        except:
            pass

    print(len(set(URL_list)))


# 定义循环：检查是否已经爬取足够数量的笔记，或是否已经达到页面底部
while len(URL_list) < num:
    if '- THE END -' in browser.page_source:
        print(f"当前与{key_word}有关的笔记数量少于 {num}")
        print('检查时间:', time.ctime())
        break

    parsePage(browser.page_source)  # 解析当前页面
    time.sleep(5)
    browser.execute_script('window.scrollTo(0,document.body.scrollHeight)')  # 模拟鼠标滚动
    time.sleep(wait_time)

if len(URL_list) > num:
    URL_list = URL_list[:num]
    userURL_list = userURL_list[:num]

# In[80]:


print(len(set(URL_list)), len(URL_list))

# In[81]:


userURL_list_cleaned = [url.split('/')[-1] for url in userURL_list]

ID_FansNr_dic = {}

wait_time = random.uniform(3, 5)

# 定义循环：遍历items中的每一篇笔记
for user_url in set(userURL_list_cleaned):
    whole_url = 'https://www.xiaohongshu.com/user/profile/' + user_url  # 构造完整个人页面URL
    browser.get(whole_url)

    WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@id="userPostedFeeds"]//section')))  # 等待笔记页面加载完成
    # 解析完成加载的网页内容
    html = browser.page_source
    selector = Selector(text=html)

    # 选择并提取网页数据
    author_fans_nr = selector.xpath(
        '//*[@class="data-info"]/div[1]/div[2]/span[@class="count"]/text()').extract_first()  # 作者粉丝数量
    author_ID = selector.xpath(
        '//*[@class="basic-info"]/div[@class="user-basic"]/div[@class="user-content"]/span[@class="user-redId"]/text()').extract_first()  # 作者小红书号

    author_ID = author_ID.split('：')[-1]
    author_fans_nr = str(author_fans_nr)

    print('小红书号:', author_ID, '粉丝数:', author_fans_nr)

    if author_fans_nr[-1] == '+':
        author_fans_nr = author_fans_nr[:-1]
    else:
        if author_fans_nr[-1] == '万' or author_fans_nr[-1] == 'W':
            author_fans_nr = float(author_fans_nr[:-1]) * 10000
        elif author_fans_nr[-1] == 'K':
            author_fans_nr = float(author_fans_nr[:-1]) * 1000
        else:
            author_fans_nr = float(author_fans_nr)

    ID_FansNr_dic[author_ID] = author_fans_nr

    time.sleep(wait_time)

# In[86]:


print(len(ID_FansNr_dic))

# In[88]:

# 写入Excel
author_ID_list = []
author_fans_nr_list = []

for author_ID, author_fans_nr in ID_FansNr_dic.items():
    try:
        if int(author_fans_nr) > 1000:
            author_ID_list.append(author_ID)
            author_fans_nr_list.append(author_fans_nr)
    except:
        pass

data = {
    "小红书ID": author_ID_list,
    "粉丝数量": author_fans_nr_list,
}
content = pd.DataFrame(data)
content.to_csv('data.csv', mode='a', index=False,encoding='utf-8-sig',index_label=False)
print("写入完成")