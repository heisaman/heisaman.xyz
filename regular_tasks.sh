mongoexport --db weibo --collection favorites --sort '{"favorited_time_int": -1}' --out ~/freshman21/_data/favorites.json --jsonArray
cd /usr/share/nginx/html/
rm -rf ./*
jekyll build --source ~/freshman21/ --destination ./
