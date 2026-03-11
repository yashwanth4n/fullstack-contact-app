async function saveContact() {

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;

console.log("Sending data...");

const response = await fetch(
"https://2axwrehn0a.execute-api.us-east-1.amazonaws.com/dev/contacts",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: name,
phone: phone
})
}
);

const data = await response.text();

alert(data);

}
