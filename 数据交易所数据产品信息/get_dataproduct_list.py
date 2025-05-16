# coding  = UTF-8

import requests
import json


class DataProduct(object):
    def __init__(self, url, header, params):
        self.url = url
        self.header = header
        self.params = params

    def get_dataproduct_list(self):
        sysId_list= []
        response = requests.get(self.url+'list', headers=self.header, params=self.params)
        data = json.loads(response.text)['data']['list']
        for item in data:
            sysId_list.append(item['sysId'])
        return sysId_list

    def get_dataproduct_detail(self, sysId):
        response = requests.get(self.url + str(sysId), headers=self.header)
        detail = json.loads(response.text)['data']
        return detail


if __name__ == '__main__':
    url = 'https://dtxp.chinadep.com/dtxp/data-product/'
    headers = {
        'Cookie': 'SESSIONID=6iB9LNHRN6kyp8sqQoesQ; Hm_lvt_4a6e6878538254a2578d9f3c5f43a81c=1714190562; _pk_ses.12.8c85=1; _pk_id.12.8c85=0463fb4c3f55e278.1714190563.; Hm_lpvt_4a6e6878538254a2578d9f3c5f43a81c=1714190696',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36'
    }

    pageNum = 1
    params = {
        'pageNum': f'{pageNum}',  # 1-38
        'pageSize': 100,  # max = 100-->'totalPage': 38
        'orderRule': 4
    }
    instance = DataProduct(url=url, header=headers, params=params)
    data = instance.get_dataproduct_list()
    '''data
    dict_keys(['sysId', 'id', 'dataName', 'listedProductCode', 'productType', 'listedDesc', 'listedStatus', 'listDate', 'priceType', 'price', 'ladder', 'appSector', 'appSectorCategory', 'corpus', 'corpusMode', 'corpusAppArea', 'busScene', 'dataDirectory', 'keyWord', 'dataTopic', 'userCase', 'listedSys', 'listedProductImageUrl', 'tags', 'tagList', 'dspsCompanyId', 'dspsCompanySysId', 'thirdDspsCompanyLogoUrl', 'supCompanyName', 'imageUrls', 'imageUrlsList', 'd25VideoPath', 'contentDescription', 'viewNum', 'recommendNum', 'collectNum', 'shareNum', 'isTop', 'topNum', 'status', 'source', 'sourceSystem', 'sourceUrl', 'thirdProductId', 'createUser', 'createTime', 'updateUser', 'updateTime', 'sourceId', 'sysCreateUser', 'sysCreateTime', 'sysUpdateUser', 'sysUpdateTime', 'dataProductDetail', 'objectType', 'dataType', 'score'])
    'dataProductDetail': None, 'objectType': None, 'dataType': 'data_product', 'score': None
    '''
    print(len(data))
    print(data)


    '''detail
    dict_keys(['sysId', 'id', 'dataName', 'listedProductCode', 'productType', 'listedDesc', 'listedStatus', 'listDate', 'priceType', 'price', 'ladder', 'appSector', 'appSectorCategory', 'corpus', 'corpusMode', 'corpusAppArea', 'busScene', 'dataDirectory', 'keyWord', 'dataTopic', 'userCase', 'listedSys', 'listedProductImageUrl', 'tags', 'tagList', 'dspsCompanyId', 'dspsCompanySysId', 'thirdDspsCompanyLogoUrl', 'supCompanyName', 'imageUrls', 'imageUrlsList', 'd25VideoPath', 'contentDescription', 'viewNum', 'recommendNum', 'collectNum', 'shareNum', 'isTop', 'topNum', 'status', 'source', 'sourceSystem', 'sourceUrl', 'thirdProductId', 'createUser', 'createTime', 'updateUser', 'updateTime', 'sourceId', 'sysCreateUser', 'sysCreateTime', 'sysUpdateUser', 'sysUpdateTime', 'dataProductDetail', 'objectType', 'dataType', 'score'])
    '''
    detail = instance.get_dataproduct_detail(sysId=5568)
    print(detail)

