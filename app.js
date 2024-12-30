// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');
const app = express();

// Utilisation de CORS comme middleware
app.use(cors());

// Exemple de route (facultatif)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
