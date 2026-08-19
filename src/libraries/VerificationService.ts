// Initialise API base
const apibase = "/";

// Verify submission
export async function verify(time:string, email:string, firstname:string, lastname:string, phone:string, loadSuccess:() => void) {
    if (time != "") {
        alert("Invalid time.");
        return;
    }
    if (email != "") {
        alert("Invalid email.");
        return;
    }
    if (firstname != "" && lastname != "") {
        alert("Invalid name.");
        return;
    }
    if (phone != "") {
        alert("Invalid phone.");
        return;
    }
    const response = await fetch(apibase + "submit", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "time":time,
            "email":email,
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
        loadSuccess();
    }
}