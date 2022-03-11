## 멋사 REACT 실습 예제

## Django-api Document

1. get postList

- 요청방식 : get
- 기능 : 게시물들의 목록을 보여준다. (id 값, title 만 보여줌)
- API url : https://reactapitest.pythonanywhere.com/api/list/?page={n}&page_size={np}
  (n은 현재 page, np는 한번에 보여질 페이지 수를 의미한다.)
- 예시

### 요청

```
https://reactapitest.pythonanywhere.com/api/list/?page=1&page_size=10
```

### 응답

```
{
    "count": 23,
    "next": "https://reactapitest.pythonanywhere.com/api/list/?page=2&page_size=10",
    "previous": null,
    "results": [
        {
            "id": 23,
            "title": "찬성을 얻은 때"
        },
        {
            "id": 22,
            "title": "모 신임·얻어"
        },
        {
            "id": 21,
            "title": "모의 자유며을 얻어"
        },
        {
            "id": 20,
            "title": "모준하고, 을 신며을 얻어"
        },
        {
            "id": 19,
            "title": "모든 국민은을 신며을 얻어"
        },
        {
            "id": 18,
            "title": "교사절을 신며을 얻어"
        },
        {
            "id": 17,
            "title": "국는 파견하며을 얻어"
        },
        {
            "id": 16,
            "title": "국회의 의결을 얻어"
        },
        {
            "id": 15,
            "title": "대통령은 즉시석"
        },
        {
            "id": 14,
            "title": ". 제2항의 찬성을  출석"
        }
    ]
}
```

(next와 previous를 통해 화살표 관리하면 될 것으로 추정)

2. get postList

- 요청방식 : get
- 기능 : 게시물의 상세페이지를 보여준다. (id, title, contents, repls)
- API url : https://reactapitest.pythonanywhere.com/api/posts/{n}
  (n은 조회하고자 하는 post의 id이다.)
- 예시

### 요청

```
https://reactapitest.pythonanywhere.com/api/posts/1
```

### 응답

```
{
    "id": 1,
    "title": "이건 아니지",
    "contents": "잘 되나 보자",
    "repls": [
        "잘 되면 보자라니.. 응원해줘",
        "그래 응원해주자!!"
    ]
}
```

3. post post

- 요청방식 : post
- 기능 : 게시물를 작성한다. (title, contents, repls[빈값])
- API url : https://reactapitest.pythonanywhere.com/api/posts/
- 예시

### 요청

```
https://reactapitest.pythonanywhere.com/api/posts/
```

Body

```
{
    "title": " 찬성을 얻은 때",
    "contents": "모든 국민은 종교의 자유를 가진다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다. 대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를 한다.한다..",
    "repls":[]
}
```

### 응답

```
{
    "id": 23,
    "title": "찬성을 얻은 때",
    "contents": "모든 국민은 종교의 자유를 가진다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다. 대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를 한다.한다..",
    "repls": []
}
```

3. post repl

- 요청방식 : post
- 기능 : 댓글을 작성한다. (contents, post[post의 id])
- API url : https://reactapitest.pythonanywhere.com/api/repl/
- 예시

### 요청

```
https://reactapitest.pythonanywhere.com/api/repl/
```

Body

```
{
    "contents": "그래 응원해주자!!",
     "post": 1
}
```

### 응답

```
{
    "id": 3,
    "contents": "그래 응원해주자!!",
    "post": 1
}
```
