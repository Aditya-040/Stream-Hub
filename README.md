# Full-Stack Video Hosting Application

A robust and modern full-stack application designed to handle backend and frontend functionalities seamlessly. Built with the latest technologies for efficiency, scalability, and ease of use.

---

## Features

### Backend
- **Authentication**: Secure user authentication using **JWT** and password hashing with **bcrypt**.
- **Database**: MongoDB integration with schema models using **Mongoose**.
- **File Uploads**: Efficient media handling with **Multer** and **Cloudinary**.
- **Middleware**: Request logging, CORS handling, and cookie parsing.
- **Paginated Queries**: Aggregate queries with pagination.

### Frontend
- **Responsive Design**: Mobile-first interface styled with **Tailwind CSS**.
- **Form Handling**: Smooth user input handling with **React Hook Form**.
- **Global State Management**: Efficiently managed using **Redux Toolkit**.
- **Routing**: Fast client-side navigation with **React Router DOM**.
- **Notifications**: Interactive toast notifications with **React Hot Toast**.
- **Infinite Scroll**: Continuous data loading for better user experience.

---

## Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** and **Mongoose**
- **Cloudinary** for file uploads
- **JWT** for authentication
- **Multer** for file handling
- **Morgan** for logging

### Frontend
- **React**
- **Redux Toolkit**
- **React Router DOM**
- **React Hook Form**
- **Axios**
- **Tailwind CSS**

---

## Installation

### Prerequisites
- **Node.js**: Ensure version 16.x or higher is installed.
- **MongoDB**: Set up a database connection.
- **Cloudinary**: Create an account for media uploads.
  
### Project Structure

```bash
.
├── backend/
│   ├── src/
│   │   ├── controllers/    # API business logic
│   │   ├── models/         # MongoDB schema definitions
│   │   ├── routes/         # API route definitions
│   │   └── index.js        # Backend entry point
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── redux/          # State management
│   │   ├── main.jsx        # Frontend entry point
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── package.json        # Frontend dependencies

```
