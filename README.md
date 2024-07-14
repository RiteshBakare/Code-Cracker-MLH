# Code-Cracker

Code-Cracker is an online judge platform similar to LeetCode. Users can register, log in, solve coding problems, and see the results of their submissions. The backend REST APIs are built using Node.js, Express, and MongoDB.

## Features

- User authentication (register, login, logout)
- Update profile image
- Fetch user details
- Fetch all problems and individual problem details
- Execute Python code submissions and return results

## Endpoints

### User Endpoints

- **Login User**: `POST /api/v1/user/login`
- **Register User**: `POST /api/v1/user/register`
- **Update Profile Image**: `POST /api/v1/user/update-profile-image`
- **Logout User**: `GET /api/v1/user/logout`
- **Get User Details**: `GET /api/v1/user/details`

### Problem Endpoints

- **Get All Problems**: `GET /api/v1/problem/`
- **Get Problem by ID**: `GET /api/v1/problem/:id`

### Code Execution Endpoint

- **Run Python Code**: `POST /api/v1/problem/python`
---
## Postman Screenshots 

<h4>Run Python Judge</h4>
<img src="https://github.com/user-attachments/assets/01f916a0-9503-4091-9872-a4952b5e6096" width="550" title="hover text">

<h4>Run Python Judge with wrong code logic</h4>
<img src="https://github.com/user-attachments/assets/58131dc0-f3fb-4e02-9064-ba0411ca8d33" width="550" title="hover text">

<h4>Run Python Judge with error code</h4>
<img src="https://github.com/user-attachments/assets/d2bf791b-e8b3-4af9-9e57-e967413b8388" width="550" title="hover text">

<h4>Login User</h4>
<img src="https://github.com/user-attachments/assets/de314b86-e881-46da-85dc-2d067188f151" width="550" title="hover text">

<h4>Register User</h4>
<img src="https://github.com/user-attachments/assets/0118a21a-77dc-4b76-96d3-345712e38a92" width="550" title="hover text">

<h4>Get All Problems</h4>
<img src="https://github.com/user-attachments/assets/c54c2de6-f62b-443d-8ae1-5563dae50866" width="550" title="hover text">

<h4>Get Problems By Id</h4>
<img src="https://github.com/user-attachments/assets/e5c2f409-8349-4259-b5db-5b4998b2d996" width="550" title="hover text">


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RiteshBakare/Code-Cracker-MLH.git
   cd code-cracker
2. npm install
3. Create a .env file in the root directory and add the following environment variable
  ```
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  ```
4. Start the server: ```npm start```
