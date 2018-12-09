#!/bin/bash
echo "======start  ========="
cd /home/djblog/ && hexo clean && hexo g && gulp && hexo d
echo "======end  =========="



