# 카카오 폰트 웹사이트

[카카오 폰트 저장소](https://github.com/heathkakao/newfont)의 웹사이트 저장소입니다.

## 로컬에서 띄워보는 법

### jekyll 설치

jekyll을 설치하면됩니다.

```
$ gem install jekyll
```

혹은 gemfile을 간단하게 만들고 bundle로 설치해도됩니다

```
$ cat Gemfile
source 'https://rubygems.org'

gem 'github-pages', group: :jekyll_plugins
$ bundle install
```

### 실행

`_config.yml` 파일을 복사합니다. `_config.dev.yml`정도로 고쳐서 `url`을
`http://localhost:4000/`으로 고칩니다 .

```console
$ jekyll serve --config _config.dev.yml # bundle exec jekyll serve
```

## 어떻게 코드를 고치고 배포해요?

`gh-pages` 브랜치에 머지합니다.
