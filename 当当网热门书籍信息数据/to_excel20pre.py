from pymongo import MongoClient
import pandas as pd

client = MongoClient('localhost', 27017)
db = client.book_database  # 连接到test_database数据库
collection = db.book_collection  # 连接到test_collection集合

count = 0
page = 1
titles = []
pics = []
authors = []
prices = []
for item in collection.find():
    titles.append(item['title'])
    pics.append(item['pic'])
    authors.append(item['author'])
    prices.append(item['price'])
    count += 1
    if count == 20:
        item = pd.DataFrame({
            "title": titles,
            "pic": pics,
            "author": authors,
            "price": prices
        })
        with pd.ExcelWriter("books.xlsx", mode='a', engine='openpyxl') as writer:
            item.to_excel(writer, sheet_name=f'第{page}页',index=False)
        page += 1
        count = 0
        titles = []
        pics = []
        authors = []
        prices = []