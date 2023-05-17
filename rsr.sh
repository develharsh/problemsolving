if tsc index.ts; then
    node index.js
    if [ $1 != '.' ]; then
        mkdir -p snippets/$1
        cp index.ts snippets/$1/$2.ts
    else
        cp index.ts snippets/$2.ts
    fi
    if [ $3 == "y" ]; then
        cp template.ts index.ts
    fi
# else
    # echo command returned some error
fi