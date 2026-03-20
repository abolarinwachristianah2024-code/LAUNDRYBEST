const multer = require('multer');

exports.upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, './assests')
        },
        // filename: function(req, file, cb) {
        //     const uniqueSuffix = 'nana'
        //     console.log(file)
        //     cb(null, file.filename + '.' + file.mimetype.split("/")[1])
        // }
          filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
    }), 
    limits: {
        filesize: 1024 * 1024 * 12
    },
    fileFilter: (req, file, cb) => {
        if(! file.mimetype.startsWith('image/')) {
            cb(new Error('Only image files are allowed!'))
        }else{
            cb(null, true)
        }
        
    }
})