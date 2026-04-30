#!/bin/bash
ffmpeg -y \
-loop 1 -t 4 -i public/videos/hero-stills/1_garage.png \
-loop 1 -t 4 -i public/videos/hero-stills/2_ui.png \
-loop 1 -t 4 -i public/videos/hero-stills/3_split.png \
-loop 1 -t 4 -i public/videos/hero-stills/4_morning.png \
-filter_complex \
"[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080[v0]; \
 [1:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080[v1]; \
 [2:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080[v2]; \
 [3:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080[v3]; \
 [v0][v1]xfade=transition=fade:duration=1:offset=3[v01]; \
 [v01][v2]xfade=transition=fade:duration=1:offset=6[v012]; \
 [v012][v3]xfade=transition=fade:duration=1:offset=9[outv]" \
-map "[outv]" -c:v libx264 -pix_fmt yuv420p -r 30 public/videos/ai-receptionist-cinematic.mp4
