class Contact {
    constructor(name, email, phone, message){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message
    }
    static saveToLocalStorage(contact){
        const contacts = JSON.parse(localStorage.getItem("contacts")) || []
        contacts.push(contact)
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }
}


export default Contact;