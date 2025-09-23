
import Student from "../../models/studentmodels/student.js"


export const storeStudents = async (req, res) => {
  try {
    const { name, age, rollNumber, email, phone, department, semester, address } =
      req.body;

    if (
      !name ||
      !age ||
      !rollNumber ||
      !email ||
      !phone ||
      !department ||
      !semester ||
      !address
    ) {
      return res
        .status(403)
        .json({ status: false, message: "All fields are required" });
    }

    const result = await Student.create({
      name,
      age,
      rollNumber,
      email,
      phone,
      department,
      semester,
      address,
    });

    return res.status(201).json({
      status: true,
      message: "Student inserted successfully",
      student: result,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};


export const showStudents = async (req, res) => {
  try {
    const result = await Student.find();
    if (!result || result.length === 0) {
      return res
        .status(400)
        .json({ status: false, message: "No students in database" });
    }
    return res.status(200).json({
      status: true,
      message: "Data fetched successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};


export const updateStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const student = await Student.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res
        .status(404)
        .json({ status: false, message: "Student not found" });
    }

    console.log("Updated Student:", student);

    res.status(200).json({
      status: true,
      message: "Student updated successfully",
      updatedStudent: student,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};


export const deleteStudents = async (req, res) => {
  try {
    const { id } = req.body;
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res
        .status(404)
        .json({ status: false, message: "Student not found" });
    }

    return res.status(200).json({
      status: true,
      message: "Student deleted successfully",
      deletedStudent: student,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
