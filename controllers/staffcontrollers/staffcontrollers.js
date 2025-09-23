import Staff from "../../models/staffmodels/staff.js";


export const storeStaff = async (req, res) => {
  try {
    const {
      staffId,
      // Personal
      name,
      gender,
      dob,
      mobile,
      email,
      qualification,
      experience,
      address,
      // Company
      branchName,
      designation,
      department,
      salary,
      joiningDate,
      availability,
      // Bank
      accountHolderName,
      accountNumber,
      bankName,
      ifscCode,
      bankBranch,
      branchLocation,
    } = req.body;

  console.log("req.body", req.body)
    const uploaded = req.uploadedFiles || {};

    const newStaff = new Staff({
      staffId,
      personalDetails: {
        name:name,
        gender:gender,
        dob:dob,
        mobile:mobile,
        email:email,
        qualification:qualification,
        experience:experience,
        address:address,
      },
      companyDetails: {
        branchName:branchName,
        designation:designation,
        department:department,
        salary:salary,
        joiningDate:joiningDate,
        availability:availability,
      },
      bankDetails: {
        accountHolderName:accountHolderName,
        accountNumber:accountNumber,
        bankName:bankName,
        ifscCode: ifscCode,
        bankBranch:bankBranch,
        branchLocation:branchLocation,
      },
      documents: {
        resume: uploaded.resume?.url || "",
        highestQualification: uploaded.highestQualification?.url || "",
        panCard: uploaded.panCard?.url || "",
        aadharCard: uploaded.aadharCard?.url || "",
      },
    });

    console.log("newStaff",newStaff)

    await newStaff.save();

    return res.status(201).json({
      status: true,
      message: "Staff created successfully",
      data: newStaff,
    });
  } catch (error) {
    console.error("Error creating staff:", error);

    
    if (error.code === 11000 && error.keyPattern?.["personalDetails.email"]) {
      return res.status(400).json({
        status: false,
        message: "Email already exists",
      });
    }

    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// ---------------- READ STAFF LIST (Summary for Table) ----------------
export const showStaff = async (req, res) => {
  try {
    const staffList = await Staff.find(
      {},
      {
        staffId: 1,
        "personalDetails.name": 1,
        "personalDetails.mobile": 1,
        "personalDetails.email": 1,
        "personalDetails.address": 1,
        "companyDetails.designation": 1,
        "companyDetails.joiningDate": 1,
        "companyDetails.availability": 1,
        "companyDetails.salary": 1,
      }
    );

    return res.status(200).json({ status: true, data: staffList });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// ---------------- VIEW STAFF (Full Details) ----------------
export const viewStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);

    if (!staff) {
      return res.status(404).json({ status: false, message: "Staff not found" });
    }

    return res.status(200).json({ status: true, data: staff });
  } catch (error) {
    console.error("Error viewing staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// ---------------- UPDATE STAFF ----------------
export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      // Personal
      name,
      gender,
      dob,
      mobile,
      email,
      qualification,
      experience,
      address,
      // Company
      branchName,
      designation,
      department,
      salary,
      joiningDate,
      availability,
      // Bank
      accountHolderName,
      accountNumber,
      bankName,
      ifscCode,
      bankBranch,
      branchLocation,
    } = req.body;

    // ✅ Uploaded files from middleware
    const uploaded = req.uploadedFiles || {};

    const existingStaff = await Staff.findById(id);
    if (!existingStaff) {
      return res.status(404).json({ status: false, message: "Staff not found" });
    }

    // ✅ Build update object safely (skip empty/null fields)
    const updateData = {
      personalDetails: {
        name: name ?? existingStaff.personalDetails.name,
        gender: gender ?? existingStaff.personalDetails.gender,
        dob: dob ?? existingStaff.personalDetails.dob,
        mobile: mobile ?? existingStaff.personalDetails.mobile,
        email: email?.trim() ? email : existingStaff.personalDetails.email,
        qualification: qualification ?? existingStaff.personalDetails.qualification,
        experience: experience ?? existingStaff.personalDetails.experience,
        address: address ?? existingStaff.personalDetails.address,
      },
      companyDetails: {
        branchName: branchName ?? existingStaff.companyDetails.branchName,
        designation: designation ?? existingStaff.companyDetails.designation,
        department: department ?? existingStaff.companyDetails.department,
        salary: salary ?? existingStaff.companyDetails.salary,
        joiningDate: joiningDate || existingStaff.companyDetails.joiningDate,
        availability: availability ?? existingStaff.companyDetails.availability,
      },
      bankDetails: {
        accountHolderName: accountHolderName ?? existingStaff.bankDetails.accountHolderName,
        accountNumber: accountNumber ?? existingStaff.bankDetails.accountNumber,
        bankName: bankName ?? existingStaff.bankDetails.bankName,
        ifscCode: ifscCode ?? existingStaff.bankDetails.ifscCode,
        bankBranch: bankBranch ?? existingStaff.bankDetails.bankBranch,
        branchLocation: branchLocation ?? existingStaff.bankDetails.branchLocation,
      },
      documents: {
        resume: uploaded.resume?.url || existingStaff.documents.resume,
        highestQualification:
          uploaded.highestQualification?.url || existingStaff.documents.highestQualification,
        panCard: uploaded.panCard?.url || existingStaff.documents.panCard,
        aadharCard: uploaded.aadharCard?.url || existingStaff.documents.aadharCard,
      },
    };

    const updatedStaff = await Staff.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      status: true,
      message: "Staff updated successfully",
      data: updatedStaff,
    });
  } catch (error) {
    console.error("Error updating staff:", error);

    // ✅ Handle duplicate email error
    if (error.code === 11000 && error.keyPattern?.["personalDetails.email"]) {
      return res.status(400).json({
        status: false,
        message: "Email already exists",
      });
    }

    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// ---------------- DELETE STAFF ----------------
export const deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);

    if (!deletedStaff) {
      return res.status(404).json({ status: false, message: "Staff not found" });
    }

    return res.status(200).json({
      status: true,
      message: "Staff deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};
















/*import Staff from "../../models/staffmodels/staff.js";


export const storeStaff = async (req, res) => {
  try {
    const {
      staffId,
      name,
      gender,
      dob,
      mobile,
      email,
      qualification,
      experience,
      address,
      branchName,
      designation,
      department,
      salary,
      joiningDate,
      availability,
      bankDetails,
    } = req.body;

    const uploaded = req.files || {};

    const newStaff = new Staff({
      staffId,
      name,
      gender,
      dob,
      mobile,
      email,
      qualification,
      experience,
      address,
      designation,
      salary,
      companyDetails: {
        branchName,
        designation,
        department,
        salary,
        joiningDate,
      },
      availability: availability || "Unavailable", 
      bankDetails,
      documents: {
        resume: uploaded.resume ? uploaded.resume[0].path : "",
        highestQualification: uploaded.highestQualification
          ? uploaded.highestQualification[0].path
          : "",
        panCard: uploaded.panCard ? uploaded.panCard[0].path : "",
        aadharCard: uploaded.aadharCard ? uploaded.aadharCard[0].path : "",
      },
    });

    await newStaff.save();

    return res.status(201).json({
      status: true,
      message: "Staff created successfully",
      data: newStaff,
    });
  } catch (error) {
    console.error("Error creating staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};


export const showStaff = async (req, res) => {
  try {
    const staffList = await Staff.find(
      {},
      {
        staffId: 1,
        name: 1,
        "companyDetails.designation": 1,
        mobile: 1,
        email: 1,
        address: 1,
        "companyDetails.salary": 1,
        "companyDetails.joiningDate": 1,
        availability: 1,
        documents: 1,
      }
    );

    return res.status(200).json({ status: true, data: staffList });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};


export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      gender,
      dob,
      mobile,
      email,
      qualification,
      experience,
      address,
      branchName,
      designation,
      department,
      salary,
      joiningDate,
      availability,
      bankDetails,
    } = req.body;

    const uploaded = req.files || {};

    const existingStaff = await Staff.findById(id);
    if (!existingStaff) {
      return res.status(404).json({ status: false, message: "Staff not found" });
    }

    const updateData = {
      name: name || existingStaff.name,
      gender: gender || existingStaff.gender,
      dob: dob || existingStaff.dob,
      mobile: mobile || existingStaff.mobile,
      email: email || existingStaff.email,
      qualification: qualification || existingStaff.qualification,
      experience: experience || existingStaff.experience,
      address: address || existingStaff.address,
      companyDetails: {
        branchName: branchName || existingStaff.companyDetails.branchName,
        designation: designation || existingStaff.companyDetails.designation,
        department: department || existingStaff.companyDetails.department,
        salary: salary || existingStaff.companyDetails.salary,
        joiningDate: joiningDate || existingStaff.companyDetails.joiningDate,
      },
      availability: availability || existingStaff.availability,
      bankDetails: bankDetails || existingStaff.bankDetails,
      documents: {
        resume:
          uploaded.resume?.[0]?.path || existingStaff.documents.resume,
        highestQualification:
          uploaded.highestQualification?.[0]?.path ||
          existingStaff.documents.highestQualification,
        panCard:
          uploaded.panCard?.[0]?.path || existingStaff.documents.panCard,
        aadharCard:
          uploaded.aadharCard?.[0]?.path || existingStaff.documents.aadharCard,
      },
    };

    const updatedStaff = await Staff.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      status: true,
      message: "Staff updated successfully",
      data: updatedStaff,
    });
  } catch (error) {
    console.error("Error updating staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};


export const deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);

    if (!deletedStaff) {
      return res.status(404).json({ status: false, message: "Staff not found" });
    }

    return res.status(200).json({
      status: true,
      message: "Staff deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting staff:", error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};*/
