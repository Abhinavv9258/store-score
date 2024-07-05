# StoreScore

## Overview

StoreScore is a web application that enables users to submit ratings for stores registered on the platform. Users can rate stores on a scale of 1 to 5. The platform features a single login for all user roles, with role-specific functionalities displayed upon login. New users can sign up to start using the service. The application supports three types of users: System Admin, Normal User, and Store Owner, each with specific functionalities.

## Features

### System Admin Functionalities

- Add new stores, normal users, and admin users.
- View a dashboard with:
  - Total Users
  - Total Stores
  - Total Ratings Submitted by Users
- Manage users with fields:
  - Name
  - Email
  - Password
  - Address
- Display stores with fields:
  - Name
  - Email
  - Address
  - Rating
- Display users with fields:
  - Name
  - Email
  - Address
  - Role
- Filter listings by name, email, address, and role.
- View user details including ratings for store owners.
- Logout option.

### Normal User Functionalities

- Sign up with fields:
  - Name
  - Email
  - Address
  - Password
- Login and change password.
- View all registered stores.
- Search stores by name and address.
- Store listing includes:
  - Name
  - Address
  - Overall ratings
  - My submitted rating
  - Option to submit or modify rating
- Submit ratings between 1 and 5.
- Logout option.

### Store Owner User Functionalities

- Login and change password.
- View dashboard with:
  - List of users who submitted ratings.
  - Average rating for their store.
- Logout option.

### Additional Features

- Sorting functionality on important fields (e.g., name, email).
- Best practices followed for frontend and backend.
- Proper database schema design.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (non-relational) or PostgreSQL/MySQL (relational)
- **Frontend**: React.js
- **Authentication**: JWT (JSON Web Token)

## Contact

For further questions or support, please contact [abhinavv218@gmail.com](mailto:abhinavv218@gmail.com).
