# Samarium

## Endpoints

### 1. GET /countries
Retrieves a list of all countries.

### 2. POST /countries
Adds a new country.

#### Request Body (JSON)
```json
{
  "name": "United States Of America",
  "countryCode": "USA"
}
```

### 3. PATCH /countries/:countryCode
Updates an existing country's name.

#### Request Body (JSON)
```json
{
  "name": "United States Of America"
}
```

### 4. DELETE /countries/:countryCode
Deletes a country by its country code.
