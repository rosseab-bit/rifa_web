#!/bin/bash
path_repo=`pwd`
sudo docker build -t api_rifa .
sudo docker run -p 8001:8001 api_rifa

