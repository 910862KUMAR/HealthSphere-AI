# 🏥 HealthSphere AI – Enterprise Healthcare Management System

A full-stack Healthcare Management System built using **Spring Boot**, **React**, **PostgreSQL**, and **JWT Authentication**, with an integrated **AI Medical Assistant** powered by Groq LLM.

The application enables secure management of patients, doctors, appointments, medical records, prescriptions, laboratories, pharmacy, billing, and AI-powered healthcare assistance through a modern dashboard.

---

# 🚀 Live Demo

Frontend: https://healthsphere-ai-frontend.vercel.app

Backend API: https://healthsphere-ai-6.onrender.com

Swagger UI:
https://healthsphere-ai-6.onrender.com/swagger-ui/index.html

---

# 📸 Screenshots

> Add screenshots here

- Login Page
- Dashboard
- Patient Management
- Doctor Management
- Appointment Management
- AI Chat
- Swagger API

---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Refresh Token
- BCrypt Password Encryption
- Role-Based Access Control (RBAC)

---

## Dashboard

- Total Patients
- Total Doctors
- Total Appointments
- Total Medical Records
- Total Prescriptions
- Total Laboratories
- Total Pharmacy
- Total Bills
- Recent Activity
- Charts & Statistics

---

## Hospital Modules

### Patient Management

- Add Patient
- Update Patient
- Delete Patient
- Search Patient
- View Patient Details

---

### Doctor Management

- Add Doctor
- Update Doctor
- Delete Doctor
- Search Doctor

---

### Appointment Management

- Schedule Appointment
- Update Appointment
- Cancel Appointment
- View Appointment History

---

### Medical Records

- Create Medical Record
- Update Medical Record
- Patient History

---

### Prescription Management

- Add Prescription
- Update Prescription
- View Prescriptions

---

### Laboratory

- Add Laboratory Test
- Update Test Report

---

### Pharmacy

- Medicine Management
- Medicine Availability

---

### Billing

- Generate Bill
- View Billing History

---

### AI Medical Assistant

- AI Chat
- Healthcare Question Answering
- Groq LLM Integration

---

# 🛠 Tech Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- JWT
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

---

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router

---

## AI

- Spring AI
- Groq LLM

---

## Deployment

- Render
- Vercel
- Docker

---

# 📂 Project Structure

```
HealthSphere-AI
│
├── backend
│   ├── auth
│   ├── config
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── exception
│   ├── mapper
│   ├── repository
│   ├── security
│   ├── service
│   └── resources
│
├── frontend
│   ├── assets
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── hooks
│   ├── utils
│   └── App.jsx
│
├── docker-compose.yml
├── README.md
└── screenshots
```

---

# 🏗 System Architecture

```
                React Frontend
                      │
                React Router
                      │
                    Axios
                      │
               REST API Request
                      │
           Spring Security Filter
                      │
                 JWT Validation
                      │
                Controller Layer
                      │
                 Service Layer
                      │
              Repository Layer
                      │
                 PostgreSQL DB
                      │
               Response to Client
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
Authentication API
      │
      ▼
Validate Credentials
      │
      ▼
Generate JWT Token
      │
      ▼
Store Token
      │
      ▼
Frontend Sends Token
      │
      ▼
Spring Security
      │
      ▼
Access Protected APIs
```

---

# 👨‍⚕️ Patient Workflow

```
Admin Login
      │
      ▼
Dashboard
      │
      ▼
Patient Module
      │
      ▼
Create / Update / Delete Patient
      │
      ▼
Database
      │
      ▼
Dashboard Updated
```

---

# 📅 Appointment Workflow

```
Patient
     │
     ▼
Doctor
     │
     ▼
Create Appointment
     │
     ▼
Database
     │
     ▼
Dashboard Statistics
```

---

# 🤖 AI Chat Workflow

```
User
   │
   ▼
React Chat UI
   │
   ▼
Spring Boot API
   │
   ▼
Spring AI
   │
   ▼
Groq LLM
   │
   ▼
AI Response
```

---

# 🗄 Database

Main Tables

- users
- refresh_tokens
- patients
- doctors
- appointments
- medical_records
- prescriptions
- laboratory
- pharmacy
- billing

---

# 🔌 API Endpoints

## Authentication

- POST /auth/register
- POST /auth/login
- POST /auth/refresh

## Patient

- GET /api/patients
- POST /api/patients
- PUT /api/patients/{id}
- DELETE /api/patients/{id}

## Doctor

- GET /api/doctors
- POST /api/doctors

## Appointment

- GET /api/appointments
- POST /api/appointments

## Medical Records

- CRUD Operations

## Laboratory

- CRUD Operations

## Pharmacy

- CRUD Operations

## Billing

- CRUD Operations

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/your-username/HealthSphere-AI.git
```

Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Deployment

Backend

- Render

Frontend

- Vercel

Database

- PostgreSQL

---

# 🔮 Future Enhancements

- Email Notifications
- SMS Notifications
- Payment Gateway
- Medical Image Upload
- Report Export (PDF)
- Analytics Dashboard
- Mobile Application
- AI Disease Prediction

---

# 👨‍💻 Author

**Kumar GK**

Aspiring Software Engineer | Java Backend Developer | Full Stack Developer

LinkedIn:
(Add your LinkedIn URL)

GitHub:
(Add your GitHub URL)

---

# ⭐ If you like this project

Please consider giving the repository a ⭐ on GitHub.
