// reduced to just event listeners and function calls

// import byuiCourse from './course.mjs'
import byuiCourse from './course.mjs';
// import setSectionSelection function from sections module
//in curly brakets because it's a named export; brackets aren't required for single import, but recommended for clarity 
//this function isn't default export of module; could be converted into default export in module, but unnecessary 
import { setSectionSelection } from './sections.mjs';
// import named function exports from output file
//two functions separated by comma
import { setTitle, renderSections } from './output.mjs';

//add renderSections(this.section); to both event listeners to update output after enroll/ drop button clicked 
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);