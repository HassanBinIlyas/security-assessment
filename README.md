# MERN Auth Security Project


## Overview

This repository contains a complete Full-stack MERN (MongoDB, Express, React, Node.js) authentication project with enhanced security measures.  

The project demonstrates how to build a secure authentication system and apply industry‑standard security practices to protect against common vulnerabilities.

---

## Code Source

The base code was cloned from  [Full-stack MERN app with authentication](https://github.com/kirankumargonti/MERN-stack-login-authentication).  

This served as the foundation to implement additional security features and strengthen the application.

---

## Implemented Changes

### Task 1 – Vulnerability Identification

- Performed initial scans and identified insecure points in the application.  

- Found missing input validation and weak password handling.  



### Task 2 – Implementing Security Measures

- Added **Helmet middleware** to enforce security headers.  

- Applied **JWT authentication** for protected routes.  

- Implemented **input validation** to prevent injection attacks.  

- Improved password storage using **bcrypt hashing + salting**.  



### Task 3 – Advanced Security and Final Reporting

- Conducted **basic penetration testing** (unauthorized access, broken authentication, parameter tampering).  

- Integrated **Winston logging** to record login attempts, failed logins, and errors in `security.log`.  

- Configured **HTTPS** using self‑signed SSL certificates (`key.pem`, `cert.pem`).  

- Compiled a **security checklist** for long‑term best practices.  

---

## Running the Project

### 1. Clone the repository:

```bash
git clone https://github.com/HassanBinIlyas/mern-auth-security-project.git
cd mern-auth-security-project
```



### 2. Install backend dependencies:

```bash
npm install
```
Required backend libraries include:
- express
- mongoose
- passport
- jsonwebtoken
- bcryptjs
- helmet
- winston
- config





### 3. Install frontend dependencies:

Navigate to the client folder:

```bash
cd client
npm install
```
Required frontend libraries include:
- react
- react-dom
- react-router-dom
- redux
- axios

### 4. Environment Variables

Create a `.env` file in the root directory and add your private keys:

```.env
JWT_SECRET=your_private_jwt_secret

```

### 5. Running the Project
**Backend**
```bash
node server.js
```
Runs on:

HTTP: `http://localhost:5000`

HTTPS: `https://localhost:8443`


**Frontend**

```bash
npm run dev
```

Runs on:

React frontend: `http://localhost:3000`


## Security Checklist
- Validate and sanitize all inputs
- Hash and salt passwords before storage
- Use JWT token‑based authentication
- Apply Helmet middleware for security headers
- Configure HTTPS for encrypted communication
- Maintain Winston logs for monitoring and audits

