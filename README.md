# Nature's Platter

A simple demo application built using **Next.js (App Router)** with **NextAuth.js** authentication and a minimal **Express.js backend**.  
The project includes public pages, protected pages, UI components, and a clean responsive design.

---

## 🚀 Live Demo & Repository

- **Live Demo:** https://your-vercel-url.vercel.app
- **Backend API:** https://your-backend-url  
  _(Replace with your real deployment links)_

---

## 📌 Project Overview

This project follows the assignment requirements:

### ✔ Public Pages

- **Landing Page (/)**

  - Navbar (sticky, responsive, login/register)
  - Hero section
  - 4 additional sections (features, products preview, testimonials, banner)
  - Footer

- **Items List Page (/items)**

  - Search bar (UI only)
  - Category filter (UI only)
  - Grid of item cards (minimum 6)

- **Item Details Page (/items/[id])**

  - Large image/banner
  - Full description
  - Meta info (price/date)
  - Back button

- **Login / Register (/auth/login)**
  - Google Sign-in
  - Credentials login
  - Redirects to `/` after login

---

### 🔐 Protected Pages

Only available for logged-in users. Unauthenticated users are redirected to `/auth/login`.

- **Add Product (/dashboard/add)**

  - Form: title, short description, full description, price, date, priority, image
  - Shows toast on success

- **Manage Products (/dashboard/manage)**
  - List of all products
  - Actions: View, Delete

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **NextAuth.js**
- **Tailwind CSS**
- **Express.js Backend**
- **MongoDB or JSON-based storage**
- **React Hot Toast**
- **React Icons**

---

## 📁 Folder Structure
