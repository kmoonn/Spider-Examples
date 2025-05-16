# _*_ coding : utf-8 _*_
# @Time : 2023-12-09 13:29
# @Author : Kmoon_Hs
# @File : get_data
import json
import pandas as pd
import requests

url = "https://sc.scm121.com/api/goods/myself/rapidly/goods/list"

header = {
    'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxODAxMjQwNjQxOCIsImN1cnJlbnRfdXNlcl9vcmdfaWQiOiIiLCJjb0lkIjoiMTI2MDg4MzEiLCJhdXRob3JpdGllcyI6WyJKU1QtY2hhbm5lbCIsIm11bHRpTG9naW4iLCJKU1Qtc3VwcGxpZXIiXSwiY3VycmVudF91c2VyX29yZ19jb2RlIjoiLTEiLCJjbGllbnRfaWQiOiJwYyIsInVpZCI6IjE3OTg0NDczIiwicm9sZUlkcyI6WyJDNjM3QjBBOTM3QUQ0NzUxQTEwNzIwMjUxRjZGNzlERCIsIkFBOTA5NEU0MjBGMTRBMTU4REMxNzY1OEQ3NTcyNTREIiwiMzJCNzVERUY4OEU5NDJBNzg5N0I2ODY1QThCMDMyREQiXSwic2NvcGUiOlsidHJ1c3QiXSwiZXhwaXJhdGlvbiI6MTcwMjk2MzExNTkwMywiZXhwIjoxNzAyOTYzMTE1LCJ1c2VyIjp7ImNvSWQiOiIxMjYwODgzMSIsInVpZCI6IjE3OTg0NDczIiwibG9naW5OYW1lIjoiMTgwMTI0MDY0MTgiLCJuaWNrTmFtZSI6IuWRqOe0q-mYsyIsImNvTmFtZSI6Iumjnum-meWbvuS5piIsInByb3h5TG9naW5OYW1lIjpudWxsLCJsb2dpbldheSI6IlVTRVJOQU1FIiwicm9sZUlkcyI6IjEyLDEzLDE0LDE1LDE3LDE4LDIyLDIzLDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM5LDQwLDQxLDYxLDYyLDYzLDY0LDY1LDcwLDcxLDcyLDczLDc2LDkwLDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDEwNywxMDgsMTA5In0sImp0aSI6ImQzMDljYTY2LTk1MDMtNDA3MC04NzNiLTFkYjg0OWQ5NWE3MyJ9.WY08EEjEI-DM4WzOwtqwkwXgOYexFsybW-E0zlz6XQY',
    'content-type': 'application/json;charset=UTF-8',
    'gwfp': '30712bba609785a09d3bfcac186d3940',
    'is-agent': 'false',
    'origin': 'https://sc.scm121.com',
    'referer': 'https://sc.scm121.com/manage/goods/goodsManage/index?pageNum=1&pageSize=100&visible=false&isRapid=true&sort=spu.CREATED%20DESC%2C%20spu.ID%20ASC&labelEquals=OR&labelInclude=CONTAIN&offlineSupplierIdList=&offlineSupplierSearch=&saleOutComboDateRange=YESTERDAY&draftStatus=&erpStatusList=1',
}

payload = {"sort": "spu.CREATED DESC, spu.ID ASC", "erpStatusList": [1], "labelEquals": "OR", "labelInclude": "CONTAIN",
           "offlineSupplierIdList": "", "offlineSupplierSearch": "", "pageNum": 1, "pageSize": 8000,
           "saleOutComboDateRange": "YESTERDAY", "ruleLabelIds": [], "completePlatformList": [],
           "flawedPlatformList": [], "shopTypeList": [], "leafUserCategoryIds": [], "draftStatus": "",
           "labelList": [], "erpCategoryIdList": [], "checkHasData": 'true', "searchType": 1}

response = requests.post(url, headers=header, json=payload)

styleCodes = []
itenNames = []
itemStatus = []

data = json.loads(response.text)['data']
for item in data:
    styleCodes.append(item['styleCode'])
    itenNames.append(item['itemName'])
    itemStatus.append('已加入' if item['itemStatus'] == 'distribution' else '未加入')

content = {
    "资料编码": styleCodes,
    "商品名称": itenNames,
    "是否加入分销小站": itemStatus
}
content = pd.DataFrame(content)
content.to_excel('dataset.xlsx', index=False)
