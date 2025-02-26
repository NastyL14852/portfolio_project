const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Разрешаем CORS (если фронт отдельно)
app.use(cors());

// Указываем путь к папке public (поднимаемся на уровень выше из backend)
app.use(express.static(path.join(__dirname, "..", "build")));

// Отдаём index.html при заходе на /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
