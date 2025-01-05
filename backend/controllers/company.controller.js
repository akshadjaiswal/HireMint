import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName, description, website, location } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company Name is require",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register same company again",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      description: description,
      website: website,
      location: location,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in user;
    let companies = await Company.find({ userId });
    if (!companies) {
      return res.status(400).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "No company found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const { name, description, website, location } = req.body;
    // console.log(name, description, website, location)
    const file = req.file;
    if(!file){
        res.status(400).json({
            message:"Company logo needed",
            success:false
        })
    }
    //cloudinary
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    const updateData = { name, description, website, location, logo };
    const company = await Company.findByIdAndUpdate(companyId, updateData, {
      new: true,
    });

    if (!company) {
      res.status(404).json({
        message: "Company Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
