import pandas as pd
from Libs.Get_City2House import Get_City2House,Get_City

city = Get_City()

for cityname, href in city.items():
    print(f"正在爬取城市：{cityname}")
    for page in range(1, 100): #爬取页数
        print(f"正在爬取第{page}页")
        try:
            city, title, description, address, unit_price, total_price = Get_City2House(cityname, href, page)
        except Exception as e:
            continue
        content = {
            '城市': city,
            '标题': title,
            '房源信息描述': description,
            '房源位置信息': address,
            '单价': unit_price,
            '房总款': total_price
        }

        content = pd.DataFrame(content)
        content.to_csv('dataset.csv',mode='a', index=False, encoding='UTF-8',header=False)
        print("写入完毕")
