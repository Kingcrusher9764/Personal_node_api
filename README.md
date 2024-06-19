# Personal API for Project and Tag CRUD Operation

## Overview

This API provides CRUD (Create, Read, Update, Delete) operations for managing Project and Tag collections in a MongoDB database. The API endpoints allow you to perform various operations such as creating new projects and tags, retrieving information about existing projects and tags, updating details, and deleting records.

## Base URL

```
http://localhost:5000
```
if .env file is provided
```
http://localhost:5000
```

## Endpoints

### Project Endpoints

1. **Create Project**
    - **URL:** `/projects`
    - **Method:** `POST`
    - **Description:** Create a new project.
    - **Request Body:**
      ```json
      {
        "name": "Project Name",
        "description": "Project Description",
        "tags": ["tag1", "tag2"],
        "image": "image_url",
      }
      ```
    - **Response:**
      ```json
      {
        "message": "Project created successfully",
        "project": {
          "_id": "projectId",
          "name": "Project Name",
          "description": "Project Description",
          "tags": ["tag1", "tag2"],
          "image": "image_url",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
      }
      ```

2. **Get All Projects**
    - **URL:** `/projects`
    - **Method:** `GET`
    - **Description:** Retrieve all projects.
    - **Response:**
      ```json
      [
        {
          "_id": "projectId",
          "name": "Project Name",
          "description": "Project Description",
          "tags": ["tag1", "tag2"],
          "image": "image_url",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        },
        ...
      ]
      ```

3. **Get Project by ID**
    - **URL:** `/projects/{id}`
    - **Method:** `GET`
    - **Description:** Retrieve a project by its ID.
    - **Response:**
      ```json
      {
        "_id": "projectId",
        "name": "Project Name",
        "description": "Project Description",
        "tags": ["tag1", "tag2"],
        "image": "image_url",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
      ```

4. **Update Project**
    - **URL:** `/projects/{id}`
    - **Method:** `PUT`
    - **Description:** Update an existing project.
    - **Request Body:**
      ```json
      {
        "name": "Updated Project Name",
        "description": "Updated Project Description",
        "tags": ["tag1", "tag3"],
        "image": "new_image_url",
      }
      ```
    - **Response:**
      ```json
      {
        "message": "Project updated successfully",
        "project": {
          "_id": "projectId",
          "name": "Updated Project Name",
          "description": "Updated Project Description",
          "tags": ["tag1", "tag3"],
          "image": "new_image_url",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
      }
      ```

5. **Delete Project**
    - **URL:** `/projects/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete a project by its ID.
    - **Response:**
      ```json
      {
        "message": "Project deleted successfully"
      }
      ```

### Tag Endpoints

1. **Create Tag**
    - **URL:** `/tags`
    - **Method:** `POST`
    - **Description:** Create a new tag.
    - **Request Body:**
      ```json
      {
        "name": "Tag Name",
        "image": "image_url",
      }
      ```
    - **Response:**
      ```json
      {
        "message": "Tag created successfully",
        "tag": {
          "_id": "tagId",
          "image": "image_url",
          "name": "Tag Name",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
      }
      ```

2. **Get All Tags**
    - **URL:** `/tags`
    - **Method:** `GET`
    - **Description:** Retrieve all tags.
    - **Response:**
      ```json
      [
        {
          "_id": "tagId",
          "name": "Tag Name",
          "image": "image_url",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        },
        ...
      ]
      ```

3. **Get Tag by ID**
    - **URL:** `/tags/{id}`
    - **Method:** `GET`
    - **Description:** Retrieve a tag by its ID.
    - **Response:**
      ```json
      {
        "_id": "tagId",
        "name": "Tag Name",
        "image": "image_url",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
      ```

4. **Update Tag**
    - **URL:** `/tags/{id}`
    - **Method:** `PUT`
    - **Description:** Update an existing tag.
    - **Request Body:**
      ```json
      {
        "name": "Updated Tag Name",
        "image": "new_image_url",
      }
      ```
    - **Response:**
      ```json
      {
        "message": "Tag updated successfully",
        "tag": {
          "_id": "tagId",
          "name": "Updated Tag Name",
          "image": "new_image_url",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
      }
      ```

5. **Delete Tag**
    - **URL:** `/tags/{id}`
    - **Method:** `DELETE`
    - **Description:** Delete a tag by its ID.
    - **Response:**
      ```json
      {
        "message": "Tag deleted successfully"
      }
      ```

## Error Handling

In case of errors, the API will return a JSON response with the following structure:

```json
{
  "message": "Error message"
}
```

## Dependencies

- Node.js
- Express
- MongoDB
- Mongoose

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Kingcrusher9764/Personal_node_api.git
   ```

2. Install dependencies:
   ```sh
   cd Personal_node_api
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB connection string and other necessary configurations.
   ```
   PORT=3000
   DATABASE=your_mongodb_url
   ```

5. Start the server:
   ```sh
   npm start
   ```
   or
    ```sh
   nodemon server.js
   ```
