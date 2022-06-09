## # API Structured

### BR

Uma API simples feita em NodeJS e Express com a intenção de trabalhar estruturas com NodeJS como MVC

### EN

A Sample API working with NodeJS and Express with intention to work structure in NodeJS like MVC


## # Running

- Clone this repo
- run `npm install`
- run `node .` or `node index.js` to start API

## # Routes

- **GET** | `localhost:3000/`
    ```
    Home API returning "Hello World!!!"
    ```

---

- **GET** | `localhost:3000/name`

    ```
    Return all contents in Name data
    ```

    Example:
    ```json
    [
        "Maria Eduarda"
    ]
    ```

---

- **POST** | `localhost:3000/name`

    ```
    Insert new value in Name data.
    ```
    
    Example:
    ```json
    {
        "content":"Leonardo Frederiche"
    }
    ```

---

- **GET** | `localhost:3000/name/:index`

    ```
    Return the object position (starting 1) from Name data.
    ```

    Example:
    ```json
    localhost:3000/1
    // => Maria Eduarda

    localhost:3000/2
    // => Leonardo Frederiche
    ```

---

- **PUT** | `localhost:3000/name/:index`
    ```
    Update content in position informed from index parameter.
    ```

    Example:
    ```json
    // PUT => localhost:3000/name/2

    {
        "content":"Leonardo Camp Frederiche"
    }
    ```