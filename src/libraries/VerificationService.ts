import { DateType } from 'react-native-ui-datepicker';

// Initialise API base
const apibase = "/";

// Verify submission
export async function verify(date:DateType, people: number, children: number, disabled: number, time:string, email:string, selectedtitle:string, firstname:string, lastname:string, phone:string, formHandler:(name:string, email:string, phone:string) => void, loadSuccess:() => void) {
    if (date == undefined) {
        alert("Invalid date.");
        return;
    }
    if (people == undefined) {
        alert("Invalid number of people.");
        return;
    }
    if (time == "") {
        alert("Invalid time.");
        return;
    }
    if (email == "") {
        alert("Invalid email.");
        return;
    }
    if (firstname == "" && lastname == "") {
        alert("Invalid name.");
        return;
    }
    if (phone == "") {
        alert("Invalid phone.");
        return;
    }
    const response = await fetch(apibase + "submit", {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "date":date,
            "people": people,
            "children": children,
            "disabled": disabled,
            "time":time,
            "email":email,
            "title":selectedtitle,
            "firstname":firstname,
            "lastname":lastname,
            "phone":phone
        })
    });
    if (!response.ok) {
        const message = "An error has occurred with your reservation. Status: " + response.status;
        alert(message);
    }
    else {
        const fullname = selectedtitle + " " + firstname + " " + lastname;
        formHandler(fullname, email, phone);
        loadSuccess();
    }
}