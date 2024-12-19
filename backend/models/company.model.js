import mongoose from "mongoose";

const companyModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    }
}, { timestamps: true })

export const Company = mongoose.model('Company', companyModel)