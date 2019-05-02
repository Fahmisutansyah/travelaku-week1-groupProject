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
            "Afghanistan",
            "Åland Islands",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            ...
        ]
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
    Params : country=[string]
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
    URL : /currecy
    Method : GET
    Headers: None
    Authenticate = None
    Body : None
    Params : origin=[string], destination=[string] (name country)
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

## Use Application
```
npm init
npm install
nodemon -L app.js
```