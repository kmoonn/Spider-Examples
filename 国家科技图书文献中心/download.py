import re
import time

import requests
import os


def download_image(url, save_path='downloaded_image.jpg'):
    headers = {
        "Referer": "https://kd.nsfc.cn/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
    }

    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        # 创建保存目录
        os.makedirs(os.path.dirname(save_path) or ".", exist_ok=True)

        # 写入文件
        with open(save_path, 'wb') as f:
            f.write(response.content)

        print(f"✅ 图片已保存: {save_path}")
        return save_path
    except Exception as e:
        print(f"❌ 下载失败: {e}")
        return None


from PIL import Image
import os


def images_to_pdf(image_folder, output_pdf_path):
    files = os.listdir(image_folder)
    image_paths = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

    def extract_number(filename):
        match = re.search(r'(\d+)', filename)
        return int(match.group(1)) if match else float('inf')

    image_paths.sort(key=extract_number)

    image_paths = [os.path.join(image_folder, fname) for fname in image_paths]

    try:
        images = [Image.open(p).convert("RGB") for p in image_paths]
        images[0].save(output_pdf_path, save_all=True, append_images=images[1:])
        print(f"✅ 成功生成 PDF：{output_pdf_path}")
        return output_pdf_path
    except Exception as e:
        print(f"❌ 合并失败: {e}")
        return None


if __name__ == '__main__':
    item_list = '''/report/11/24c35a37c9c71af1def5c88600c82382
                /report/11/a5d75fadf963df6b15b33a406e5b35a6
                /report/11/177ce95e1151c340fd3f919d84702b2e
                /report/11/f5140e235becb547f062229f288952da
                /report/11/ead805bf2c289eea91b2b7477e3baaf7
                /report/11/a0030e4059fffc82563a13d7677f1b39
                /report/11/8a85a5d2af869810b64c5e89be00005d
                /report/11/c202caa18ec94dc645b143112e9fa2a1
                /report/11/90fc56b0600a03d3b24f177ffbb0e568
                /report/11/5b84041044a922ab43f4850f71b9014d
                /report/11/4eda47cf0872cb9bd95bb028ab6572f2
                /report/11/55dbec4c4b41eaf97bc023ebdf211b6d
                /report/11/c3c2246b3f414e2f6f2de6fe392fc540
                /report/11/a568150a5f0c9b76164c9eda2ab29b4a
                /report/11/69addaecb918ad2c3c7ae1a3d0993171
                /report/11/b841f6c04d5c5467798538a2095a2e00
                /report/11/5ef5e9f77dbe54f86a63a0414c15bddd
                /report/11/e322b6614ca3332e4d3a1b885624cdb4
                /report/11/1f1369a1641854ccc77f8f6adb580d66
                '''.split('\n')
    for index, item in enumerate(item_list):
        item = item.strip()
        if index in [0,1,2,3,6,7,8,13,20]:
            continue
        time.sleep(10)
        download_image(url='https://kd.nsfc.cn' + item, save_path=f"images/{index}.jpg")

    images_to_pdf('images', output_pdf_path='样例报告.pdf')
