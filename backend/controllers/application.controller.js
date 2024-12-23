import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id
        if (!jobId) {
            return res.status(404).json({
                message: "JobId is required",
                success: false
            })
        }
        // check if user alread applied on this job or not
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "Already Applied for this Job",
                success: false
            })
        }

        //is job exist
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "job not found",
                success: false
            })
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })
        job.applications.push(newApplication._id)
        await job.save()

        return res.status(201).json({
            message: "Job Applied Successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "company",
                options: { sort: { createdAt: -1 } },
            }
        })
        if (!application) {
            res.status(404).json({
                message: "No Appllications found",
                success: false
            })
        }
        res.status(200).json({
            application,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant"
            }
        })
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: "Status is Required",
                success: false
            })
        }
        const application = await Application.findOne({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            })
        }
        application.status = status.toLowerCase()
        await application.save()

        return res.status(200).json({
            message: "Status Updated Successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}