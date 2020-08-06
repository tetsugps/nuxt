rm -rf dist
mkdir -p dist
# server
cp -R functions dist/server
cp -R .nuxt dist/server/
#client
cp -R static dist/client
cp -R .nuxt/dist/client/* dist/client/