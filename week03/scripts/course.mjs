// contain course object section data and methods used to enroll and drop students from course
//Move byuiCourse object into course file from modules.mjs file
const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        {
            sectionNumber: 1,
            enrolled: 88,
            instructor: "Brother Bingham",
        },
        {
            sectionNumber: 2,
            enrolled: 81,
            instructor: "Sister Shultz",
        },
        {
            sectionNumber: 3,
            enrolled: 95,
            instructor: "Sister Smith",
        },
    ],
    changeEnrollment: function (sectionNumber, add = true) {
        // Find the section with the given section number
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNumber == sectionNumber
        );
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            // renderSections(this.sections);
            // a run-time error will occur when an update is attempted given this function is no longer available to call within new module file
        }
    },
};

// in course.mjs file, export byuiCourse object as default (can be last line of file)


export default byuiCourse;