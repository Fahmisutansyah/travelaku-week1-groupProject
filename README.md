# rest-api

##  Get list all country
```
    URL : /country
    Method : GET
    Headers: None
    Authenticate = None
    Body : None
    Params : None
    Success Response :
        Code 200
        [
            {
                "name": "Afghanistan",
                "topLevelDomain": [
                    ".af"
                ],
                "alpha2Code": "AF",
                "alpha3Code": "AFG",
                "callingCodes": [
                    "93"
                ],
                "capital": "Kabul",
                "altSpellings": [
                    "AF",
                    "Afġānistān"
                ],
                "region": "Asia",
                "subregion": "Southern Asia",
                "population": 27657145,
                "latlng": [
                    33,
                    65
                ],
                "demonym": "Afghan",
                "area": 652230,
                "gini": 27.8,
                "timezones": [
                    "UTC+04:30"
                ],
                "borders": [
                    "IRN",
                    "PAK",
                    "TKM",
                    "UZB",
                    "TJK",
                    "CHN"
                ],
                "nativeName": "افغانستان",
                "numericCode": "004",
                "currencies": [
                    {
                        "code": "AFN",
                        "name": "Afghan afghani",
                        "symbol": "؋"
                    }
                ],
                "languages": [
                    {
                        "iso639_1": "ps",
                        "iso639_2": "pus",
                        "name": "Pashto",
                        "nativeName": "پښتو"
                    },
                    {
                        "iso639_1": "uz",
                        "iso639_2": "uzb",
                        "name": "Uzbek",
                        "nativeName": "Oʻzbek"
                    },
                    {
                        "iso639_1": "tk",
                        "iso639_2": "tuk",
                        "name": "Turkmen",
                        "nativeName": "Türkmen"
                    }
                ],
                "translations": {
                    "de": "Afghanistan",
                    "es": "Afganistán",
                    "fr": "Afghanistan",
                    "ja": "アフガニスタン",
                    "it": "Afghanistan",
                    "br": "Afeganistão",
                    "pt": "Afeganistão",
                    "nl": "Afghanistan",
                    "hr": "Afganistan",
                    "fa": "افغانستان"
                },
                "flag": "https://restcountries.eu/data/afg.svg",
                "regionalBlocs": [
                    {
                        "acronym": "SAARC",
                        "name": "South Asian Association for Regional Cooperation",
                        "otherAcronyms": [],
                        "otherNames": []
                    }
                ],
                "cioc": "AFG"
            }, <object>
        ]
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
## Get one city
```
URL : /cities/:city
    Method : GET
    Headers: None
    Authenticate = None
    Body : None
    Params : city=[string]
    Success Response :
        Code 200
        {
            "results": [
                {
                    "name": "Jakarta",
                    "snippet": "Known for music and shows. Recommended places to visit are Jakarta History Museum, Monas and National Museum.",
                    "parent_id": "wv__Java",
                    "score": 8.08429955159994,
                    "images": 
                    ...
                        },<object>
                    ]
            ]
        }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Get 10 cities from a country
```
    URL : /cities
    Method : GET
    Headers: None
    Authenticate = None
    Body : None
    Query : country=[string]
    Success Response :
        Code 200
        {
            "results": [
                {
                    "name": "Jakarta",
                    "snippet": "Known for music and shows. Recommended places to visit are Jakarta History Museum, Monas and National Museum.",
                    "parent_id": "wv__Java",
                    "score": 8.08429955159994,
                    "images": [
                        {
                            "attribution": {
                                "license_link": <url>,
                                "attribution_text": "yohanes budiyanto",
                                "license_text": "CC BY 2.0",
                                "format": "{attribution} / {license}"
                            },
                            "license": "CC BY 2.0",
                            "sizes": {
                                "medium": {
                                    "url": <url>,
                                    "width": 640,
                                    "format": "jpg",
                                    "bytes": 32132,
                                    "height": 317
                                },
                                "original": {
                                    "url": <url>,
                                    "width": 906,
                                    "format": "jpg",
                                    "bytes": 531046,
                                    "height": 450
                                },
                                "thumbnail": {
                                    "url": <url>,
                                    "width": 192,
                                    "format": "jpg",
                                    "bytes": 4885,
                                    "height": 95
                                }
                            },
                            "owner": "yohanes budiyanto",
                            "source_url": <url>,
                            "caption": "Jakarta Skyline",
                            "source_id": "wikivoyage",
                            "owner_url": <url>
                        },<object>
                    ]
            ]
        }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  Get currency value
```
    URL : /currency
    Method : GET
    Headers: None
    Authenticate = None
    Body : None
    Query : origin=[string], destination=[string] (name country)
    Success Response :
        Code 200
            {
                "origin": "IDR",
                "destination": "SGD",
                "value": 0.0000956707
            }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  User Register
```
    URL : /users/register
    Method : POST
    Headers: None
    Authenticate = None
    Body : name=[string], password=[string], email=[string]
    Params : None
    Success Response :
        Code 201
            {
                "_id": "5ccb24a09d738f4fd1011de0",
                "name": "komangmahendra",
                "email": "mail@mail.com",
                "password": "$2a$10$.HDPulTBd1.M0vTnU7oyDe4j8b3o68uj2FWAFJc.jhEgF4478rxna",
                "__v": 0
            }
    Error Response :
        Code: 500 
        Content: { message : <error message> }
```
##  User Login
```
    URL : /users/login
    Method : POST
    Headers: None
    Authenticate = None
    Body : password=[string], email=[string]
    Params : None
    Success Response :
        Code 201
            {
                "token": <token> 
            }
    Error Response :
        Code: 500/400
        Content: { message : <error message> }
```


## Use Application
```
npm init
npm install
nodemon -L app.js
```