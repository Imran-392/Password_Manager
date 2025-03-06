# Password Manager

A secure and user-friendly password management tool built with HTML, CSS, and JavaScript. This application allows users to store, manage, and retrieve their passwords safely, ensuring better security and convenience. ✨

## Features

- **Secure Storage:** Safely store your passwords with encryption.
- **User-Friendly Interface:** Intuitive design for easy navigation and management.
- **Responsive Design:** Accessible on various devices, including desktops and mobiles.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Build Tool:** Vite

## Project Structure

- **backend/**: Contains backend-related code and configurations.
- **public/**: Static assets and public files.
- **src/**: Main source code for the frontend application.
  - **components/**: Reusable UI components.
  - **assets/**: Images, styles, and other assets.
  - **App.js**: Root component.
  - **main.js**: Entry point of the application.
- **index.html**: Main HTML file.
- **package.json**: Project dependencies and scripts.
- **vite.config.js**: Vite configuration file.

## Installation & Setup

### Prerequisites

- Node.js installed on your machine.
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Imran-392/Password_Manager.git
   cd Password_Manager
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   This will launch the application, and you can access it at `http://localhost:3000`.

## Usage

1. **Add a Password:** Use the "Add Password" feature to securely store a new password.
2. **View Passwords:** Access your stored passwords.
3. **Delete Passwords:** Remove passwords that are no longer needed.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to contact [Imran Ansari](https://github.com/Imran-392).

