
//######----------------------######
// File Upload with multer
//######----------------------######

const multer = require('multer');
const path = require('path');

// set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 2000000},
    fileFilter: (req, file, callback) => {
        checkFileType(file, callback);
    }
}).array('image_icon');


// Check File Type
function checkFileType(file, callback ) {
    // allowed extension
    const filetypes = /jpeg|jpg|png|gif/;
    // check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return callback(null, true);
    }
    else{
        callback({message: 'File selected is not an image!'});
    }
    
}

module.exports = upload;