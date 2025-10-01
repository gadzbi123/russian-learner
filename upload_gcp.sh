gsutil -m rsync -r public/ gs://ruski.gadzbi.com/
gsutil -m acl ch -r -u AllUsers:R gs://ruski.gadzbi.com/
gsutil cors set cors.json gs://ruski.gadzbi.com
gsutil web set -m index.html -e 404.html gs://ruski.gadzbi.com
