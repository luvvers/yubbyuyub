import os
import json
import shutil
from distutils.dir_util import copy_tree


if (__name__ == "__main__"):
    with open('./config.json') as f:
        temp = json.load(f)
    for (dirpath, dirnames, filenames) in os.walk("./photos"):
        config = json.dumps({
            "creatorName": temp["creatorName"],
            "creatorUrl": temp["creatorUrl"],
            "creatorLinkType": temp["creatorLinkType"],
            "creatorSnapchatUrl": temp["creatorSnapchatUrl"],
            "creatorImages": filenames,
        })
        src_folder = os.path.join(os.path.basename(dirpath))
        dst_folder = os.path.join(os.path.dirname("fans-landing/public/images/"))
        # remove folder if exists
        if os.path.exists(dst_folder):
            shutil.rmtree(dst_folder, ignore_errors=True)
        # copy photos folder
        copy_tree(src=src_folder, dst=dst_folder)
    with open("./fans-landing/public/config/data.json", "w") as f:
        f.write(config)