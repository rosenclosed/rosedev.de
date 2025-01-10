#! /bin/bash

for file in res/img/*; do
    if [ -f "$file" ]; then
        cwebp -q 95 "$file" -o "${file%.*}.webp"
    fi
done