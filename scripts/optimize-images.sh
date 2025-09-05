#!/bin/bash
echo "Starting image optimization pipeline..."
echo

# Create output directories
mkdir -p "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized/webp"
mkdir -p "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized/avif"
mkdir -p "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized/360"
mkdir -p "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized/768"
mkdir -p "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized/1024"
mkdir -p "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized/1280"

# 1. Compress original images
echo "Compressing original images..."
echo "Compress 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg (JPEG quality 80)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" -quality 80 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress bird-watching-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\bird-watching-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress cafe-san-vicente-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\cafe-san-vicente-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress caminata-lluvia-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\caminata-lluvia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress ana-rodriguez.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\clientes\ana-rodriguez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress carlos-gomez.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\clientes\carlos-gomez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress maria-lopez.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\clientes\maria-lopez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress equipo-guia-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\equipo-guia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress IMG_3295.JPG (JPEG quality 80)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" -quality 80 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\IMG_3295.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress IMG_4438.JPG (JPEG quality 80)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" -quality 80 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\IMG_4438.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress IMG_8803.jpg (JPEG quality 80)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" -quality 80 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\IMG_8803.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress IMG_8964.jpg (JPEG quality 80)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" -quality 80 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\IMG_8964.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress IMG_9151.jpg (JPEG quality 80)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" -quality 80 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\IMG_9151.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress logo2.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\logo2.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress minas-azufre-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\minas-azufre-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress nacientes-agua-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\nacientes-agua-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress parque-agua-juan-castro-blanco.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\parque-agua-juan-castro-blanco.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress pozas-secretas-sucre.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\pozas-secretas-sucre.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress tour-nocturno-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\tour-nocturno-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi

echo "Compress volcanes-dormidos-la-vieja.png (PNG quality 85)"
magick "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" -quality 85 -strip "C:\Users\aroja\Documents\GitHub\llvvaa\public\volcanes-dormidos-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to compress image"; fi


# 2. Convert to WebP
echo "Converting to WebP..."
echo "Convert 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\0c635aaa-5cc5-421f-8857-51ea54fed9c9.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert bird-watching-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\bird-watching-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert cafe-san-vicente-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\cafe-san-vicente-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert caminata-lluvia-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\caminata-lluvia-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert ana-rodriguez.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\clientes\ana-rodriguez.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert carlos-gomez.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\clientes\carlos-gomez.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert maria-lopez.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\clientes\maria-lopez.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert equipo-guia-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\equipo-guia-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert IMG_3295.JPG to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\IMG_3295.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert IMG_4438.JPG to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\IMG_4438.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert IMG_8803.jpg to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\IMG_8803.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert IMG_8964.jpg to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\IMG_8964.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert IMG_9151.jpg to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\IMG_9151.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert logo2.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\logo2.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert minas-azufre-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\minas-azufre-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert nacientes-agua-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\nacientes-agua-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert parque-agua-juan-castro-blanco.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\parque-agua-juan-castro-blanco.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert pozas-secretas-sucre.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\pozas-secretas-sucre.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert tour-nocturno-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\tour-nocturno-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi

echo "Convert volcanes-dormidos-la-vieja.png to WebP"
cwebp -q 75 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" -o "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\webp\volcanes-dormidos-la-vieja.webp"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to WebP"; fi


# 3. Convert to AVIF
echo "Converting to AVIF..."
echo "Convert 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\0c635aaa-5cc5-421f-8857-51ea54fed9c9.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert bird-watching-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\bird-watching-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert cafe-san-vicente-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\cafe-san-vicente-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert caminata-lluvia-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\caminata-lluvia-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert ana-rodriguez.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\clientes\ana-rodriguez.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert carlos-gomez.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\clientes\carlos-gomez.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert maria-lopez.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\clientes\maria-lopez.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert equipo-guia-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\equipo-guia-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert IMG_3295.JPG to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\IMG_3295.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert IMG_4438.JPG to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\IMG_4438.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert IMG_8803.jpg to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\IMG_8803.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert IMG_8964.jpg to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\IMG_8964.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert IMG_9151.jpg to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\IMG_9151.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert logo2.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\logo2.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert minas-azufre-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\minas-azufre-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert nacientes-agua-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\nacientes-agua-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert parque-agua-juan-castro-blanco.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\parque-agua-juan-castro-blanco.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert pozas-secretas-sucre.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\pozas-secretas-sucre.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert tour-nocturno-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\tour-nocturno-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi

echo "Convert volcanes-dormidos-la-vieja.png to AVIF"
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=30 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\avif\volcanes-dormidos-la-vieja.avif"
if [ $? -ne 0 ]; then echo "Warning: Failed to convert to AVIF"; fi


# 4. Generate responsive sizes
echo "Generating responsive sizes..."
echo "Resize 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize 0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\0c635aaa-5cc5-421f-8857-51ea54fed9c9.jpeg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize bird-watching-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\bird-watching-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize bird-watching-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\bird-watching-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize bird-watching-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\bird-watching-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize bird-watching-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\bird-watching-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\bird-watching-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize cafe-san-vicente-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\cafe-san-vicente-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize cafe-san-vicente-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\cafe-san-vicente-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize cafe-san-vicente-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\cafe-san-vicente-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize cafe-san-vicente-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\cafe-san-vicente-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\cafe-san-vicente-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize caminata-lluvia-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\caminata-lluvia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize caminata-lluvia-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\caminata-lluvia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize caminata-lluvia-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\caminata-lluvia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize caminata-lluvia-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\caminata-lluvia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\caminata-lluvia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize ana-rodriguez.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\clientes\ana-rodriguez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize ana-rodriguez.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\clientes\ana-rodriguez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize ana-rodriguez.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\clientes\ana-rodriguez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize ana-rodriguez.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\ana-rodriguez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\clientes\ana-rodriguez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize carlos-gomez.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\clientes\carlos-gomez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize carlos-gomez.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\clientes\carlos-gomez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize carlos-gomez.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\clientes\carlos-gomez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize carlos-gomez.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\carlos-gomez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\clientes\carlos-gomez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize maria-lopez.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\clientes\maria-lopez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize maria-lopez.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\clientes\maria-lopez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize maria-lopez.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\clientes\maria-lopez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize maria-lopez.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\clientes\maria-lopez.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\clientes\maria-lopez.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize equipo-guia-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\equipo-guia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize equipo-guia-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\equipo-guia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize equipo-guia-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\equipo-guia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize equipo-guia-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\equipo-guia-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\equipo-guia-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_3295.JPG to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\IMG_3295.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_3295.JPG to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\IMG_3295.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_3295.JPG to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\IMG_3295.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_3295.JPG to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_3295.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\IMG_3295.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_4438.JPG to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\IMG_4438.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_4438.JPG to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\IMG_4438.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_4438.JPG to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\IMG_4438.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_4438.JPG to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_4438.JPG" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\IMG_4438.JPG"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8803.jpg to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\IMG_8803.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8803.jpg to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\IMG_8803.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8803.jpg to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\IMG_8803.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8803.jpg to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8803.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\IMG_8803.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8964.jpg to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\IMG_8964.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8964.jpg to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\IMG_8964.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8964.jpg to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\IMG_8964.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_8964.jpg to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_8964.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\IMG_8964.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_9151.jpg to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\IMG_9151.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_9151.jpg to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\IMG_9151.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_9151.jpg to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\IMG_9151.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize IMG_9151.jpg to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\IMG_9151.jpg" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\IMG_9151.jpg"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize logo2.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\logo2.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize logo2.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\logo2.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize logo2.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\logo2.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize logo2.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\logo2.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\logo2.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize minas-azufre-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\minas-azufre-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize minas-azufre-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\minas-azufre-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize minas-azufre-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\minas-azufre-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize minas-azufre-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\minas-azufre-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\minas-azufre-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize nacientes-agua-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\nacientes-agua-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize nacientes-agua-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\nacientes-agua-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize nacientes-agua-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\nacientes-agua-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize nacientes-agua-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\nacientes-agua-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\nacientes-agua-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize parque-agua-juan-castro-blanco.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\parque-agua-juan-castro-blanco.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize parque-agua-juan-castro-blanco.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\parque-agua-juan-castro-blanco.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize parque-agua-juan-castro-blanco.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\parque-agua-juan-castro-blanco.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize parque-agua-juan-castro-blanco.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\parque-agua-juan-castro-blanco.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\parque-agua-juan-castro-blanco.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize pozas-secretas-sucre.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\pozas-secretas-sucre.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize pozas-secretas-sucre.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\pozas-secretas-sucre.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize pozas-secretas-sucre.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\pozas-secretas-sucre.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize pozas-secretas-sucre.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\pozas-secretas-sucre.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\pozas-secretas-sucre.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize tour-nocturno-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\tour-nocturno-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize tour-nocturno-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\tour-nocturno-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize tour-nocturno-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\tour-nocturno-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize tour-nocturno-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\tour-nocturno-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\tour-nocturno-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize volcanes-dormidos-la-vieja.png to 360px width"
sharp resize 360 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\360\volcanes-dormidos-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize volcanes-dormidos-la-vieja.png to 768px width"
sharp resize 768 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\768\volcanes-dormidos-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize volcanes-dormidos-la-vieja.png to 1024px width"
sharp resize 1024 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1024\volcanes-dormidos-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi

echo "Resize volcanes-dormidos-la-vieja.png to 1280px width"
sharp resize 1280 "C:\Users\aroja\Documents\GitHub\llvvaa\public\_originals\volcanes-dormidos-la-vieja.png" --output "C:\Users\aroja\Documents\GitHub\llvvaa\public\optimized\1280\volcanes-dormidos-la-vieja.png"
if [ $? -ne 0 ]; then echo "Warning: Failed to generate responsive size"; fi


echo
echo "Image optimization complete!"
echo "Check the /public/optimized/ directory for results."
