#!/bin/bash
#v3
start_time=$(date +%s.%N)
if cat input.txt | node index.js; then
    end_time=$(date +%s.%N)
    running_time=$(printf "%.3f" $(echo "$end_time - $start_time" | bc))
    echo "Running time: ${running_time}s"
    if [ $1 == 'l' ]; then
        cp index.js snippets/leetcode/$2.js
    elif [ $1 == 'c' ]; then
        cp index.js snippets/codeforces/$2.js
    elif [ $1 == 's' ]; then
        cp index.js snippets/standard-dsa/$2.js
    fi
    if [ $3 == "y" ]; then
        truncate -s 0 index.js
    elif [[ $3 == "cf" || $3 == "lt" ]]; then
        cp $3-template.js index.js
    fi
else
    echo "command returned some error"
fi

#v2
# if tsc -p tsconfig.json; then
#     start_time=$(date +%s.%N)

#     # Execute the command
#     node index.js

#     end_time=$(date +%s.%N)
    
#     running_time=$(printf "%.3f" $(echo "$end_time - $start_time" | bc))

#     echo "Running time: ${running_time}s"
#     if [ $1 == 'l' ]; then
#         cp index.ts snippets/leetcode/$2.ts
#     elif [ $1 == 'c' ]; then
#         cp index.ts snippets/codeforces/$2.ts
#     elif [ $1 == 's' ]; then
#         cp index.ts snippets/standard-dsa/$2.ts
#     fi
#     if [ $3 == "y" ]; then
#         truncate -s 0 index.ts
#     fi
# else
#     echo "command returned some error"
# fi
# find . -name "*.js" ! -name "index.js" -type f -delete

#v1
# if tsc -p tsconfig.json; then
#     node index.js
#     if [ $1 != '.' ]; then
#         mkdir -p snippets/$1
#         cp index.ts snippets/$1/$2.ts
#     else
#         cp index.ts snippets/$2.ts
#     fi
#     if [ $3 == "y" ]; then
#         cp template.ts index.ts
#     fi
# else
#     echo command returned some error
# fi
# rm *.js
# rm snippets/*.js