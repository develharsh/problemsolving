#v2
if tsc -p tsconfig.json; then
    node index.js
    if [ $1 == 'l' ]; then
        cp index.ts snippets/leetcode/$2.ts
    elif [ $1 == 's' ]; then
        cp index.ts snippets/standard-dsa/$2.ts
    fi
    if [ $3 == "y" ]; then
        truncate -s 0 index.ts
    fi
else
    echo command returned some error
fi
find . -name "*.js" -type f -delete

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