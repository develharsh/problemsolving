#!/bin/bash
if [ $1 == "y" ]; then
    truncate -s 0 index.js input.txt
elif [[ $1 == "cf" || $1 == "lt" ]]; then
    cp $1-template.js index.js
fi