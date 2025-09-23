import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: "dywpuv3jk",
  api_key: "843216346619295",
  api_secret: "_pM6huf17wznJnFn0VY-Khgph3w",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "staffDocuments",
    resource_type: "auto",
    allowed_formats: [
      "jpeg","jpg","png","gif","svg","webp","bmp","tiff",
      "pdf","docx","doc"
    ],
    public_id: `${Date.now()}-${file.originalname}`,
  }),
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
}).fields([
  { name: "resume", maxCount: 1 },
  { name: "highestQualification", maxCount: 1 },
  { name: "panCard", maxCount: 1 },
  { name: "aadharCard", maxCount: 1 },
]);

const uploadStaffFiles = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);

      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          status: "error",
          message: "File size too large. Max size is 10MB.",
        });
      }

      if (err.code === "LIMIT_UNEXPECTED_FILE") {
        return res.status(400).json({
          status: "error",
          message: "Unexpected field. Allowed: resume, highestQualification, panCard, aadharCard",
        });
      }

      return res.status(500).json({ status: "error", message: err.message });
    }

    const files = req.files;
    const fileData = {};

    if (files?.resume?.[0]) {
      fileData.resume = {
        url: files.resume[0].path,
        filename: files.resume[0].filename,
      };
    }
    if (files?.highestQualification?.[0]) {
      fileData.highestQualification = {
        url: files.highestQualification[0].path,
        filename: files.highestQualification[0].filename,
      };
    }
    if (files?.panCard?.[0]) {
      fileData.panCard = {
        url: files.panCard[0].path,
        filename: files.panCard[0].filename,
      };
    }
    if (files?.aadharCard?.[0]) {
      fileData.aadharCard = {
        url: files.aadharCard[0].path,
        filename: files.aadharCard[0].filename,
      };
    }

    if (Object.keys(fileData).length > 0) {
      req.uploadedFiles = fileData;
    }

    next();
  });
};

export default uploadStaffFiles;
