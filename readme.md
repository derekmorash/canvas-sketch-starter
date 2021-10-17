Run:
```
canvas-sketch hydra.js --open
```

Define export directory (`cmd + s` to export still, `cmd + shift + s` to export animation):
```
canvas-sketch hydra.js --output=output-dir/ --open
```

Stream video directly to mp4 file:
```
canvas-sketch hydra.js --stream --open
```
Streaming isn't very stable, large resolutions or weird dimensions may fail. Export directly to png image sequences if this happens

ffmpeg command to compile sequence of png files to mp4 file:

```
 ffmpeg -r 30 -f image2 -s 1080x1080 -i %03d.png -vcodec libx264 -crf 24 -pix_fmt yuv420p output.mp4
```

- `-r 30` is frame rate
- `-i %03d.png` is to select the image sequence files, file names will look like 000.png, 001.png, etc.
- `-crf 24` is for the amount of compression, lower is better quality but will have higher output file size