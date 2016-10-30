#!/usr/bin/env bash

REPO=${GIT_DEPLOY_REPO:git@github.com:kpavlov/hugo-theme-ghostiumx.git}

rm -rf dist
git clone --branch master --depth 25 ${REPO} dist

rm -rf dist/*
npm i

npm run build

commit_title=`git log -n 1 --format="%s" HEAD`

#default commit message uses last title if a custom one is not supplied
if [[ -z $commit_message ]]; then
    commit_message="Publish: $commit_title"
fi

(
    cd dist &&
    git config user.name "Konstantin Pavlov" &&
    git config user.email git@konstantunpavlov.net &&
    git add . &&
    git commit -m "$commit_message" &&
    git status &&
    git push origin master
)
