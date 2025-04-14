const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'uploads';

    if (file.fieldname === 'foto') {
      folder = 'uploads/fotos';
    } else if (file.fieldname === 'assinatura') {
      folder = 'uploads/assinaturas';
    } else if (file.fieldname === 'comprovante') {
      folder = 'uploads/comprovantes';
    }

    // Cria a pasta se não existir
    fs.mkdirSync(folder, { recursive: true });

    cb(null, folder);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

module.exports = upload;
