#!/bin/bash
echo "======start  ========="
hexo clean && hexo g && gulp && hexo d
echo "======end  =========="



