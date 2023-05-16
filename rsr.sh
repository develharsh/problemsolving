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
    cp index.ts snippets/$1.ts
    if [ $2 == "y" ]; then
        cp template.ts index.ts
    fi
# else
    # echo command returned some error
fi