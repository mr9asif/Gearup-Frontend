# 🏋️ GearUp Frontend

A modern, full-stack sports gear rental platform built with **Next.js 16**, **React 19**, and **TypeScript**. GearUp enables users to discover and rent sports equipment, providers to manage their inventory, and administrators to oversee the entire platform through dedicated dashboards.

---

## 🌐 Live Links

| Resource | Link |
|----------|------|
| 🚀 Live Application | https://gearup-frontend-alpha.vercel.app |
| 🔗 Backend API | https://gearup-tz3a.onrender.com |
| 💻 Frontend Repository | https://github.com/mr9asif/gearup-frontend |
| ⚙️ Backend Repository | https://github.com/mr9asif/GearUp |

---

## 🚀 Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack React Query
- Zustand
- Axios
- React Hook Form
- Zod
- Sonner
- Lucide React
- next-themes

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Render
- Cloudinary

---

## ✨ Features

### 🔐 Authentication

- JWT Authentication
- Access & Refresh Token
- Persistent Login
- Role-Based Authorization
- Protected Routes
- Secure Logout

---

### 👤 Customer

- Register & Login
- Browse Sports Gears
- Search & Filter Gears
- View Gear Details
- Rent Equipment
- Rental History
- Review & Rating System
- Profile Management

---

### 🏪 Provider

- Provider Dashboard
- Add New Gear
- Update Gear Information
- Delete Gear
- Manage Inventory
- View Rental Requests
- Accept / Reject Rentals
- Track Rental Status

---

### 🛠️ Admin

- Admin Dashboard
- Manage Users
- Manage Categories
- Manage Gears
- Manage Providers
- Platform Monitoring

---

### 🎨 User Experience

- Responsive Design
- Dark / Light Mode
- Pagination
- Loading Skeletons
- Toast Notifications
- Reusable Components
- Modern Dashboard UI
- Form Validation
- Optimistic UI Updates

---

# 📂 Project Structure

```text
src/
│
├── app/
│   ├── (public)
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   └── layout.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
│
├── features/
│   ├── auth/
│   ├── category/
│   ├── gear/
│   ├── rental/
│   ├── review/
│   └── user/
│
├── hooks/
│
├── lib/
│
├── providers/
│
├── services/
│
├── store/
│
├── types/
│
├── utils/
│
└── constants/
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/mr9asif/gearup-frontend.git
```

```bash
cd gearup-frontend
```

---

## 2. Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

## 3. Configure Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

For production:

```env
NEXT_PUBLIC_API_BASE_URL=https://gearup-tz3a.onrender.com/api
```

---

## 4. Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📦 Available Scripts

Start Development Server

```bash
npm run dev
```

Build Production

```bash
npm run build
```

Start Production Server

```bash
npm run start
```

Run ESLint

```bash
npm run lint
```

---

# 🔑 User Roles

| Role | Permissions |
|------|-------------|
| Customer | Browse, Rent Gear, Reviews, Manage Profile |
| Provider | Manage Gears, Inventory, Rental Requests |
| Admin | Manage Users, Categories, Providers & Platform |

---

# 🧩 Main Modules

- Authentication
- User Management
- Category Management
- Gear Management
- Rental Management
- Review System
- Customer Dashboard
- Provider Dashboard
- Admin Dashboard

---

# 🔐 Authentication Flow

- User Registration
- User Login
- JWT Access Token
- Refresh Token
- Persistent Authentication
- Protected Routes
- Role-Based Route Access

---

# 📡 Backend API

The frontend communicates with the GearUp REST API.

**Production API**

```
https://gearup-tz3a.onrender.com/api
```

---

# 🚀 Deployment

## Frontend

- Platform: Vercel
- Framework: Next.js

## Backend

- Platform: Render
- Runtime: Node.js
- Database: PostgreSQL (Neon)

---

# 📱 Responsive Design

Fully optimized for:

- 💻 Desktop
- 💼 Laptop
- 📱 Mobile
- 📲 Tablet

---

# 🔮 Upcoming Features

- Online Payment Integration
- Wishlist
- Email Verification
- Password Reset
- Notifications
- Analytics Dashboard
- Advanced Search
- Booking Calendar

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create your feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

**MD Asif Ali**

- 🌐 Portfolio: https://mr9asif.vercel.app
- 💼 LinkedIn: https://linkedin.com/in/mr9asif
- 🐙 GitHub: https://github.com/mr9asif

---

<div align="center">

### ⭐ If you found this project helpful, please consider giving it a star!

Made with ❤️ using **Next.js**, **TypeScript**, and **React Query**.

</div>
