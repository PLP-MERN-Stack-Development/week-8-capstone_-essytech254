# 💖 HealthBuddy - Wellness & Goal Tracker App

HealthBuddy is a full-stack web application that helps users track their health, share progress with the community, and stay motivated through wellness tips and encouragement.

## 📁 Project Structure

```
/client # Frontend built with React + Tailwind CSS
/server # Backend built with Node.js + Express + MongoDB
```

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 📆 Track weight goals with start and target dates
- 🎯 Save goals to MongoDB
- 🌍 Share progress updates in the community
- 💡 Daily health tips and motivational messages
- 🧘‍♀️ Responsive, modern UI with Tailwind CSS

---

## 🛠️ Setup Instructions

### 1. Clone the Repositories

Clone both the client and server folders (or place them accordingly):

```bash
git clone https://github.com/your-username/healthbuddy-client.git
git clone https://github.com/your-username/healthbuddy-server.git
```

### 2. 🌐 Start the Backend Server

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Then start the backend:

```bash
npm run dev
```

### 3. 💻 Start the Frontend Client

```bash
cd client
npm install
```

Create a `.env` file inside the client folder:

```env
VITE_API_URL=http://localhost:5000
```

Then start the frontend:

```bash
npm run dev
```

Frontend will run on http://localhost:5173

---

## 🔗 API Routes

| Method | Route                | Description                     |
|--------|----------------------|---------------------------------|
| POST   | /api/goals           | Save user goal to MongoDB       |
| GET    | /api/goals/:userId   | Get user goals                  |
| POST   | /api/community       | Post community update           |
| GET    | /api/community       | Fetch all community posts       |
| POST   | /api/auth/register   | Register new user               |
| POST   | /api/auth/login      | Login existing user             |

---

## 🧠 Technologies Used

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Auth**: JWT-based authentication
- **Styling**: Tailwind CSS

---

## 📸 Screenshots (Add yours here)

- 📆 Goal Calendar
- 🧘‍♀️ Wellness Dashboard
- 🌍 Community Feed

---

## 📬 Future Features

- ✅ Visual countdown/progress bar
- ✅ Cycle tracking like Flo
- ✅ User profiles with avatars
- ✅ Comments and likes on community posts

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to add features or report bugs, feel free to fork the repo or open issues.

---

## 🛡️ License

MIT License. Free to use and modify.

---

## 📩 Contact

Made with 💙 by [Your Name]

---

### ✅ What to Do Next

1. Replace `"your_mongodb_connection_string"` in `.env` with your MongoDB URI.
2. Add any screenshots if you like under the **Screenshots** section.
3. Replace `[Your Name]` at the bottom with your name or GitHub handle.
