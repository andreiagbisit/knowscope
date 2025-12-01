import { clerkClient } from '@clerk/express'
import Course from '../models/Course.js'
import { v2 as cloudinary } from 'cloudinary'
import { Purchase } from '../models/Purchase.js'
import User from '../models/User.js'

// UPDATE ROLE TO EDUCATOR
export const updateRoleToEducator = async(req, res) => {
    try {
        const { userId } = req.auth()
        
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator',
            }
        })

        res.json({ success: true, message: 'You may now publish a course.' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// ADD NEW COURSE
export const addCourse = async (req, res) => {
    try {
        const { courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth().userId

        if(!imageFile) {
            return res.json({ success: false, message: 'Thumbnail not attached.' })
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()

        res.json({ success: true, message: 'Course added.' })

    } catch (error) {
        if (error.name === 'ValidationError') {
            if (error.message.includes('lectureUrl')) {
                return res.json({ success: false, message: 'YouTube URL not added.' })
            }
            
            return res.json({ success: false, message: 'Please fill out all required fields.' })
        }

        res.json({ success: false, message: error.message })
}

}

// GET EDUCATOR COURSES
export const getEducatorCourses = async (req, res) => {
    try {
        const educator = req.auth().userId
        
        const courses = await Course.find({educator})
        res.json({ success: true, courses })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// GET EDUCATOR DASHBOARD DATA (TOTAL EARNING, ENROLLED STUDENTS, NO. OF COURSES )
export const educatorDashboardData = async (req, res) => {
    try {
        const educator = req.auth().userId
        const courses = await Course.find({educator})
        const totalCourses = courses.length

        const courseIds = courses.map(course => course._id)

        // CALCULATE TOTAL EARNINGS FROM PURCHASES
        const purchases = await Purchase.find({
            courseId: {$in: courseIds},
            status: 'completed'
        })

        const totalEarnings = purchases.reduce((sum, purchase) => sum + purchase.amount, 0)

        // COLLECT UNIQUE ENROLLED STUDENT ID'S WITH THEIR COURSE TITLES
        const enrolledStudentsData = []
        for (const course of courses) {
            const students = await User.find({
                _id: {$in: course.enrolledStudents}
            }, 'name imageUrl')

            students.forEach(student => {
                enrolledStudentsData.push({
                    courseTitle: course.courseTitle,
                    student
                })
            })
        }

        res.json({ success: true, dashboardData: {
            totalEarnings, enrolledStudentsData, totalCourses
        }})

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// GET ENROLLED STUDENTS DATA W/ PURCHASE DATA
export const getEnrolledStudentsData = async (req, res) => {
    try {
        const educator = req.auth().userId
        const courses = await Course.find({educator})
        const courseIds = courses.map(course => course._id)

        const purchases = await Purchase.find({
            courseId: { $in: courseIds },
            status: 'completed'
        }).populate('userId', 'name imageUrl').populate('courseId', 'courseTitle')

        const enrolledStudents = purchases.map(purchase => ({
            student: purchase.userId,
            courseTitle: purchase.courseId.courseTitle,
            purchaseDate: purchase.createdAt
        }))

        res.json({success: true, enrolledStudents})

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
