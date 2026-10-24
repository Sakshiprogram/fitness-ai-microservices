# Fitness AI Microservices

A full-stack, AI-powered fitness application built with **Spring Boot microservices**, a **React frontend**, **Google Gemini AI**, **Keycloak OAuth2 security**, **RabbitMQ**, and **service discovery and configuration** using Spring Cloud.

The application lets users record fitness activities and receive personalized, AI-generated recommendations based on those activities.

## Architecture

![Fitness AI Microservices Architecture](architecture.png)

The system is composed of independently deployable microservices:

| Service | Responsibility | Database |
|---|---|---|
| **API Gateway** | Entry point for client requests; routes requests to backend services | — |
| **Eureka Server** | Service registration and discovery | — |
| **Config Server** | Centralized configuration management | Git/config repository |
| **User Service** | Manages user profiles and validates users | MySQL |
| **Activity Service** | Records and manages user fitness activities | MongoDB |
| **AI Service** | Consumes activity events and generates recommendations using Google Gemini | MongoDB |
| **Fitness App Frontend** | React UI for authentication, activity tracking, and recommendations | — |

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Cloud
- **Frontend:** React
- **Security:** Keycloak, OAuth 2.0, JWT
- **Service Discovery:** Netflix Eureka
- **Configuration:** Spring Cloud Config Server
- **Messaging:** RabbitMQ
- **Databases:** MySQL, MongoDB
- **AI Integration:** Google Gemini API
- **Build Tool:** Maven

## How It Works

1. A user signs in through **Keycloak** using OAuth 2.0.
2. The React frontend sends authenticated requests through the **API Gateway**.
3. The gateway validates the JWT and routes requests to the appropriate microservice.
4. The **Activity Service** saves activities such as running, walking, or cycling.
5. When a new activity is saved, the Activity Service publishes an event to **RabbitMQ**.
6. The **AI Service** consumes the event, calls **Google Gemini**, generates a fitness recommendation, and stores it in MongoDB.
7. The frontend displays the user's activity history and AI-generated recommendations.

## Project Structure

```text
fitness-ai-microservices/
├── configserver/
├── eureka/
├── gateway/
├── userservice/
├── activityservice/
├── aiservice/
├── fitness-app-frontend/
└── architecture.png
```

## Prerequisites

Install the following tools and services:

- Java 17 or later
- Maven
- Node.js and npm
- MySQL
- MongoDB
- RabbitMQ
- Keycloak
- Google Gemini API key

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sakshiprogram/fitness-ai-microservices.git
cd fitness-ai-microservices
```

### 2. Start Infrastructure Services

Start the infrastructure required by your application:

- MySQL
- MongoDB
- RabbitMQ
- Keycloak

Ensure these services are configured and accessible before starting the backend services.

### 3. Configure Environment Variables

Configure the environment variables required by your application. For example:

```env
GEMINI_API_KEY=your_google_gemini_api_key
KEYCLOAK_CLIENT_ID=your_client_id
KEYCLOAK_CLIENT_SECRET=your_client_secret
```

**Important:** These are example variable names. Confirm that they match the names expected by your application before running it.

Never commit real API keys, passwords, access tokens, or client secrets to GitHub.

### 4. Start the Backend Services

Start each Spring Boot service from its respective directory, using the following order as a starting point.

**Config Server**

```bash
cd configserver
mvn spring-boot:run
```

**Eureka Server**

```bash
cd ../eureka
mvn spring-boot:run
```

**API Gateway**

```bash
cd ../gateway
mvn spring-boot:run
```

**User Service**

```bash
cd ../userservice
mvn spring-boot:run
```

**Activity Service**

```bash
cd ../activityservice
mvn spring-boot:run
```

**AI Service**

```bash
cd ../aiservice
mvn spring-boot:run
```

Run each service in a separate terminal so that it can continue running while you start the next one. Confirm the required ports and startup dependencies in your configuration.

### 5. Start the React Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd fitness-app-frontend
npm install
npm run dev
```

The frontend will usually be available at:

```text
http://localhost:5173
```

Check the URL printed by Vite in your terminal if a different port is used.

## Key Features

- Microservices-based backend architecture
- React frontend integrated with backend APIs
- OAuth 2.0 authentication and JWT-based authorization using Keycloak
- API Gateway-based request routing
- Service registration and discovery with Eureka
- Centralized configuration using Spring Cloud Config
- Asynchronous, event-driven communication using RabbitMQ
- AI-powered fitness recommendations using Google Gemini
- Separate data stores for user, activity, and AI-related data

## Learning Outcomes

This project demonstrates practical experience with:

- Building and connecting Spring Boot microservices
- Securing applications with Keycloak and OAuth 2.0
- Implementing synchronous REST communication
- Implementing asynchronous messaging with RabbitMQ
- Integrating generative AI into a backend service
- Working with relational and NoSQL databases
- Connecting a React frontend to a microservices backend
