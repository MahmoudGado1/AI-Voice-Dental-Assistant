# AI Voice Dental Assistant

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?logo=next.js) 
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.5-teal?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)

An **AI-powered voice assistant** for dental clinics, built with **Next.js**, **Clerk**, and **VAPI**.  
Manage appointments, doctors, and clinic performance using both a dashboard and voice commands.

---

![Dashboard](/screenshots/dashboard.png)
![Appointments](/screenshots/appointment.png)
![Voice Assistant](/screenshots/voice.png)
![Admin](/screenshots/admin.png)
![Pro](/screenshots/pro.png)


## 🚀 Features

- **Voice Assistant** – Interact with the system using natural language.
- **Appointment Management** – View, confirm, and complete patient appointments.
- **Doctor Management** – Add, edit, and monitor doctor availability.
- **Admin Dashboard** – Overview stats, total appointments, and active doctors.
- **Authentication** – Secure login via [Clerk](https://clerk.com).
- **Responsive UI** – Built with [shadcn/ui](https://ui.shadcn.com/) and TailwindCSS.

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15+, React, TailwindCSS, shadcn/ui  
- **Backend:** Next.js API Routes, Prisma ORM  
- **Database:** PostgreSQL (via Prisma)  
- **Authentication:** Clerk  
- **Voice Assistant:** VAPI  
- **Icons:** lucide-react  

---

## 📥 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MahmoudGado1/AI-Voice-Dental-Assistant.git
cd AI-Voice-Dental-Assistant

2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

4. Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev


Open http://localhost:3000
 to view the app.

 🗂 Project Structure
app/                  # Next.js app directory
components/           # Reusable UI components
hooks/                # Custom React hooks
lib/                  # Helper functions and API clients
prisma/               # Prisma schema & client
public/               # Static assets (logo, images)

🧑‍💼 Admin Dashboard

URL: /admin

Accessible only to the admin email defined in .env.local.

View stats, manage doctors, and monitor appointments.