# _*_ coding : utf-8 _*_
# @Time : 2023-12-14 19:49
# @Author : Kmoon_Hs
# @File : main

from download_img import download_img
from get_charts import get_charts
from get_authors import get_authors

if __name__ == '__main__':
    paperId = '9858333'
    authors = get_authors(paperId)
    charts = get_charts(paperId)
    # download_img(authors)
    download_img(charts)
