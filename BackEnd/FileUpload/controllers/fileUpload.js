const File = require('../models/file')
const cloudinary = require("cloudinary").v2;

// loacalFileUpload => handler function

exports.localFileUpload = async (req, res) => {
    try {
        // file kaise nikale 
        const file = req.files.file;
        console.log("YEA RAHA FILE => ", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
        console.log("path: ", path);

        //move file
        file.mv(path, (e) => {
            console.log("error", e);
        });

        res.json({
            success: true,
            message: 'File successfully moved'
        })

    } catch (error) {
        console.log(error);
    }
}
// file type support hai ya nahi check karega yea function
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

function isLargeFile(fileSize) {
    // converting bytes ito megabytes
    const mbSize = fileSize / (1024 * 1024);
    console.log("filesize is --> ", mbSize);
    return mbSize > 40;
}

// function to upload cloudinary 
async function uploadFileToCloudinary(file, folder, quality) {
    const options = {
        folder: folder,
        resource_type: "auto",

        // these 3 lines will help to keep the original filename in the database
        public_id: file.name,
        use_filename: true,
        unique_filename: false
    };

    console.log("temp file path", file.tempFilePath);

    if (quality) {
        options.quality = quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options); // main code for uploading
}

// imageUpload handler
exports.imageUpload = async (req, res) => {
    try {
        //data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile; // file receive from 
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase(); // galti na ho isliye lower case
        console.log("File Type:", fileType);

        // upar function define kiya hai 
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            });
        }

        //agar file format is supported
        console.log("Uploading to Cloudinary");
        const response = await uploadFileToCloudinary(file, "DotBatch"); // upload fucntion to Cloudinary upar kiya hai
        console.log(response);

        // Save entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });
        // sent karte he dekhega 
        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

//videoUpload Handler
exports.videoUpload = async (req, res) => {
    try {
        //data fetch
        // const { name, tags, email } = req.body;
        // console.log(name, tags, email);

        const file = req.files.videoFile;

        //Validation
        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File Type:", fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            });
        }

        // add a upper limit of 5MB for Video
        const fileSize = file.size;
        if (isLargeFile(fileSize)) {
            return res.status(400).json({
                success: false,
                message: 'Files greater than 5mb are not supported'
            })
        }

        //file format and size are supported
        console.log("Uploading to Cloudinary");

        const response = await uploadFileToCloudinary(file, "DotBatch");
        console.log(response);

        //Saving Entry in DB
        const fileData = await File.create({
            // name,
            // tags,
            // email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video Successfully Uploaded",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

//imageSizeReducer handler
exports.imageSizeReducer = async (req, res) => {
    try {
        //data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File Type:", fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            });
        }

        //add a upper limit of 5MB for image
        const fileSize = file.size;
        if (isLargeFile(fileSize)) {
            return res.status(400).json({
                success: false,
                message: "Files greater than 5mb are not supported",
            });
        }

        //file format and size are supported
        console.log("Uploading to Cloudinary");

        //COMPRESS using width and height - options = {width: 800, height: 600}
        //compressing using quality property of options objects
        const response = await uploadFileToCloudinary(file, "DotBatch", 10);
        console.log(response);

        // Saving Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
