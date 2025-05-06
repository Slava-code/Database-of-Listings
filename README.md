# Database of Listings
Submit listing information via a simple form. 
## Listing Info
The following are stored about each listing:
- Listing Title
- Description
- Rent
- Address
- Number of Rooms
- Contact Info
## Setup
### 1. Clone the repo and install dependencies
```
git clone https://github.com/Slava-code/listings-database.git
cd listings-database
npm install
```
### 2. Configure .env
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=listings_db
PORT=3000
```
Replace DB_USER and DB_PASSWORD values as needed to access your MySQL.
### 3. Setup MySQL database
Run in your console:
```
CREATE DATABASE listings_db;
USE listings_db;

CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  rent DECIMAL(10,2),
  address VARCHAR(255),
  num_rooms INT,
  contact_info VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
### 4. Start server
```
npm start
```
Then go to:
http://localhost:3000/
