#!/bin/bash
if [ $1 == "y" ]; then
    truncate -s 0 main.go input.txt
elif [[ $1 == "cf" || $1 == "lt" ]]; then
    cp $1-template.tmp main.go
fi