window.onload = function () {

    console.log(' student.js Running ..');


    //Increment Value Of No. coulmn in Student Table
    let val = document.querySelectorAll('.incrementValueByOne');
    console.log(val);
    let i = 0;
    for (const key in val) {
        if (Object.hasOwnProperty.call(val, key)) {
            i++;
            const element = val[key];
            element.firstElementChild.innerHTML += `<th scope="row" > ${i} </th>`            
        }
    }
    




 


}