# SQLite Geonames Backend

This is a simple geocoding backend built with Node.js and Express using a SQLite database populated with Geonames data to convert addresses into geographic coordinates (latitude and longitude).

## Features

- Geocode addresses using a local SQLite database of Geonames data.
- Responds with latitude, longitude, and display name for the given address.

## Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)
- SQLite (for managing the SQLite database)

## Getting Started

### 1. Clone the Repository

git clone <repository-url>
cd geocoding-sqlite-geonames-backend

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

npm install express sqlite3

### 3. Move the Database File

Ensure that the geonames.db file is located in the project directory (geocoding-sqlite-geonames-backend).

### 4. Start the Server

You can start the server using npm:

npm start

The server will be running on http://localhost:3000.

### 5. Test the Geocoding Endpoint

You can test the geocoding functionality using a tool like Postman or your web browser.

Make a GET request to the following URL, replacing <address> with the address you want to geocode:

http://localhost:3000/geocode?address=<address>

## How It Works

1. The server listens for GET requests on the /geocode endpoint.
2. When a request is received, the server extracts the address from the query parameters.
3. The server queries the SQLite database (geonames.db) for matching records.
4. The server responds with the latitude, longitude, and display name of the most relevant result.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
