npm run build --prod

aws s3 sync --profile=mortensserier --acl public-read --exclude='index.html' --sse --delete dist/mortens-serier s3://mortens-serier-website

aws s3 --profile=mortensserier sync --sse --acl public-read dist/mortens-serier s3://mortens-serier-website --cache-control 'max-age=0'