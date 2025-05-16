from pymongo import MongoClient
from get_bookdata import request_dangdang, parse_response

client = MongoClient('localhost', 27017)
db = client.book_database # 连接到test_database数据库
collection = db.book_collection # 连接到test_collection集合


data = []
for page in range(1, 21):
    url = 'http://bang.dangdang.com/books/fivestars/01.00.00.00.00.00-recent30-0-0-1-' + str(page)
    html = request_dangdang(url)
    data += parse_response(html)
#插入数据库
# for i in data:
#     collection.insert_one(i)

#查询数据库
for item in collection.find():
    print(item)