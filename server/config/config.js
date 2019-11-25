// ============================
// Puerto
// ============================

process.env.PORT = process.env.PORT || 3000;

// ========================
// Entorno
// ==========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================
// Entorno
// ==========================

// 60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.SEED = process.env.SEED || 'este-es-token'

//================
// BD

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb+srv://valentin:y7qnySxMDeSePja9@cluster0-t6np9.mongodb.net/cafe?retryWrites=true&w=majority';
}
process.env.URLBD = urlBD;