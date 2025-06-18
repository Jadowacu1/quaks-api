# 🧪 Simple REST API – Backend Internship Task

This is a basic REST API built with **Node.js**, **Express**, and **UUID**. It was developed as part of the Quarks Group backend internship assessment.

---

## 🚀 Features

- Create a user with a unique ID
- Retrieve user by ID
- Store user data in memory (no database)
- Return JSON responses
- Built using **ES Modules**
- Basic error handling implemented

---

## 🧰 Tech Stack

- Node.js (v18+ recommended)
- Express
- UUID
- Nodemon (development only)
- ECMAScript Modules (ESM)

---

## 📁 Project Structure

Sure! Here's your cleaned and fully formatted version **entirely in proper Markdown** syntax — no extra tooltips, YAML, or formatting labels:

---

```markdown
# 🧪 Simple REST API – Backend Internship Task

This is a basic REST API built with **Node.js**, **Express**, and **UUID**. It was developed as part of the Quarks Group backend internship assessment.

---

## 📁 Project Structure

```

quaks-api/
├── app.js
├── package.json
├── README.md

````

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/quaks-api.git
cd quaks-api
npm install
````

---

## ⚙️ Scripts

```bash
npm start       # Start the server
npm run dev     # Start the server with nodemon for development
```

---

## ▶️ Running the API

Start the development server:

```bash
npm run dev
```

Server will run at:

```
http://localhost:3000
```

---

## 📬 API Endpoints

### ✅ POST /users

Create a new user.

**Request:**

```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com"}'
```

**Successful Response:**

```json
{
  "id": "generated-uuid",
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Error Response (Missing fields):**

```json
{
  "error": "Missing name or email"
}
```

---

### ✅ GET /users/\:id

Get a user by ID.

**Request:**

```bash
curl http://localhost:3000/users/<user-id>
```

**Successful Response:**

```json
{
  "id": "user-id",
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Error Response (User not found):**

```json
{
  "error": "User not found"
}
```

---

## ❗ Notes

* This app stores data in memory — restarting the server clears all users.
* Use **Node 14+**, preferably **Node 18+**.
* Ensure `"type": "module"` is set in your `package.json` for ES Module support.

---

## 👨‍💻 Author

Developed by **\[Your Name]**
GitHub: [https://github.com/your-username](https://github.com/your-username)

---

🔧 Replace:

* `your-username` with your actual GitHub username
* `[Your Name]` with your real name

```

---

Let me know if you want me to generate a `README.md` file for download or walk you through how to publish this to GitHub.
```
