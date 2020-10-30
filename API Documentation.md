# API Documentation for Healthy Foodie App

## USER

**User Sign Up**
----
  Create a new user in the database

* **URL**

  `/signup`

* **Method:**
  
  `POST` 

* **URL Params**

  NONE

* **Header Data Params**

  NONE


* **Body Data Params**

  ```json
    {
      "email" : "user@mail.com",
      "password" : "userPassword",
      "name" : "John Doe"
    }

  ```


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** <br>
    `message : 'Account registration successful: user@mail.com'`

 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  <!-- **Content:** `{ error : "Log in" }` -->

-------


**User Sign In**
----
  Registered User sign in

* **URL**

  `/signin`

* **Method:**
  
  `POST` 

* **URL Params**

  NONE

* **Header Data Params**

  NONE

* **Body Data Params**

  ```json
    {
      "email" : "user@mail.com",
      "password" : "userPassword"
    }

  ```



* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 
  ```json    
    {
      "access_token" : "access_token"
    }

  ```


 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  **OR** <br>
  * **Code:** 401 Invalid email or password <br />
  <!-- **Content:** `{ error : "Log in" }` -->

-------


**User Sign In via Google**
----
  User sign in via Google oAuth

* **URL**

  `/googleSignin`

* **Method:**
  
  `POST` 

* **URL Params**

  NONE

* **Header Data Params**

  NONE

* **Body Data Params**

  ```json
    {
      "google_access_token" : "google_access_token"
    }

  ```



* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 
  ```json    
    {
      "access_token"
    }

  ```


 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  
  **OR** <br><br>

  * **Code:** 401 Invalid email or password <br />
  <!-- **Content:** `{ error : "Log in" }` -->

-------


**Find User**
----
  Find user in database

* **URL**

  `/findOne`

* **Method:**
  
  `GET` 

* **URL Params**

  NONE

  
* **Header Data Params**

  ```json
    {
      "access_token"
    }

  ```

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 
  ```json    
    {
      "name" : "John Doe",
      "avatarUrl" : "http://www.imageUrl.com"
    }

  ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  

-------


**Add to Favorites**
----
  Adding currently displayed recipe to favorites

* **URL**

  `/addToFavorites`

* **Method:**
  
  `GET` 

* **URL Params**

  Required : 
  Query : 
  - UserId as `id = [Integer]` 
  - RecipeId, recipeName as `{ RecipeId = [Integer], recipeName = [String] }`

  
* **Header Data Params**

  ```json
    {
      "access_token"
    }

  ```

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 201 Created <br />



 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  **OR**
  * **Code:** 400 Recipe had already been added to favorites <br />

-------

**Remove from Favorites**
----
  Remove User's favorites recipe from the list

* **URL**

  `/delete`

* **Method:**
  
  `GET` 

* **URL Params**

  Required : `RecipeId = [Integer]` 

  
* **Header Data Params**

  ```json
    {
      "access_token"
    }

  ```

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 201 Sucessfully deleted Favorite Item <br />



 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR<br />
  **OR**
  * **Code:** 400 Cannot find favorite item<br />

-------




**Get User Favorites**
----
  Get Users' favorites recipes data

* **URL**

  `/favorites`

* **Method:**
  
  `GET` 

* **URL Params**

  NONE

  
* **Header Data Params**

  ```json
    {
      "access_token"
    }

  ```

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 
    ```json    
      {
        "data" : "favorites Object",
      }

    ```

 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR<br />
  **OR**
  * **Code:** 400 Cannot find favorite item<br />

-------


## ZOMATO

**Get City Id from Zomato**
----
  Getting city Id from zomato to be used for search

* **URL**

  `/restaurants/city`

* **Method:**
  
  `GET` 

* **URL Params**

  Required:
  Query : `city = [String]`

* **Header Data Params**

  NONE

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 
  ```json    
    {
      "id" : "city ID",
      "name" : "city name"
    }

  ```

 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  
-------


**Search Restaurant**
----
  Search available restaurant based on city and food

* **URL**

  `/restaurants/search`

* **Method:**
  
  `GET` 

* **URL Params**

  Required:
  - `city = [Integer]`
  - `makanan = [String]`

* **Header Data Params**

  NONE

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 
  ```json    
    {
      "id" : "restaurant Id",
      "name" : "restaurant Name",
      "url" : "restaurant Url in zomato",
      "location" : "restaurant address",
      "thumbnail" : "restaurant thumbnail url",
      "img" : "restaurant featured image url in zomato"
    }

  ```

 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  
-------

## SPOONACULAR

**Search Recipe**
----
  Search recipe based on food query

* **URL**

  `/recipes/search`

* **Method:**
  
  `GET` 

* **URL Params**

  Required:
  Query : `food = [String]`


* **Header Data Params**

  NONE

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 

    spoonacular Recipe Object


 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  
-------



## UNSPLASH

**Get Random Pic**
----
  Search random picture from unsplash

* **URL**

  `/img/random`

* **Method:**
  
  `GET` 

* **URL Params**

  NONE


* **Header Data Params**

  NONE

* **Body Data Params**

  NONE


* **Success Response:**

  * **Code:** 200 OK <br />

  **Content:** 

    ```json
      {
        "id" : "image data id [Integer]",
        "imgUrl" : "image data links"
      }
    ```

 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
  
-------

