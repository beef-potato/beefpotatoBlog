import os

"""
put unadded markdown files in docs into mkdocs.yml's right part:

eg>


site_name: BeefPotato Docs
nav:
  - Home: index.md
  - About: about.md
  - Notes:
      - mkdocs搭建网站.md
      - pwshBonus.md
      - galgameTools.md
      - test.md

"""

Blogdir = r"D:\code\python\blog\beefpotatoBlog"
if os.getcwd() != Blogdir:
    print("not in blog main dir!")
    os.chdir(Blogdir)


target_file = "mkdocs.yml"
src_folder = "docs"

mk_ls = os.listdir(src_folder)

def get_yml():
    with open(target_file, "r", encoding="utf8") as f:
        content = f.readlines() 
    return content



def add_md_to_yml(md_ls:list):
    content = get_yml()
    
    for i in range(len(content)):
        if "- Notes:" in content[i]:
            for j in range(len(md_ls)):
                elem = "      - "+ md_ls[j]+"\n"
                if elem not in content:
                    content.insert(i+1, elem)
                # insert markdowns
            break
    with open(target_file, 'w', encoding="utf-8") as f:
        f.writelines(content)


def check_diff(markdown_ls:list, yml_ls:list):
    unadd_mds = []
    for md_file in markdown_ls:
        if md_file.endswith(".md"):
            if md_file not in "".join(yml_ls):  # Check if the file is mentioned in yml content
                unadd_mds.append(md_file)
    return unadd_mds


if __name__ == "__main__":
    yml_f_ls = get_yml()
    diff_md = check_diff(mk_ls, yml_f_ls)
    if diff_md:
        add_md_to_yml(diff_md)
        print(f"Added the following markdown files to mkdocs.yml: {diff_md}")
    else:
        print("No new markdown files to add.")
