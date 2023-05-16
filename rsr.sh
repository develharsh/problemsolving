# tsc index.ts && node index.js
# cp index.ts snippets/$1.ts
# cp template.ts index.ts

# if tsc index.ts; then
#     echo command returned true
# else
#     echo command returned some error
# fi

if tsc index.ts; then
    node index.js
    if [ $2 == "y" ]; then
        cp template.ts index.ts
    fi
    cp index.ts snippets/$1.ts
# else
    # echo command returned some error
fi