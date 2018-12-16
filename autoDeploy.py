#!/usr/bin/python3.6
import os
os.chdir('/home/djblog/')
os.system('date >> /home/crontab/autoDeploy.log')
#os.system('sudo git pull origin master')
os.system('hexo clean && hexo g && gulp && hexo d')
