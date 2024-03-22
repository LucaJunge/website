#!/bin/bash

# Call this from the repo folder

for image in src/_assets/images/original/*.jpg; do
    #echo "Converting $image ..."
    
    filename=$(basename -- "$image")

    # imagefolder = "src/_assets/images/"
    imagefolder="${image%%original*}"

    # filename = "workflows"
    imagefilename="${filename%.*}"

    # extension = "jpg"
    imageextension="${filename##*.}"

    echo "${imagefolder}${imagefilename}_mobile.${imageextension}"
    convert "$image" -resize 1500 -strip -quality 85 "${imagefolder}${imagefilename}_mobile.${imageextension}"
done