// Problem: Write a program to implement a simple address book application.

class AddressBook {
    constructor(){
        this.contactInformation = {}
    }

    add_contact(name, phonenumber, address, email){
        if(this.contactInformation.hasOwnProperty(name)){
            this.update_contact(name, phonenumber, address, email )
            console.log("Contact Information already exists")
        }
        else{
            this.contactInformation[name] = {
                phonenumber,
                address,
                email
            }
        }
    }

    update_contact(name, phonenumber, address, email){
        if(this.contactInformation.hasOwnProperty(name)){
            this.contactInformation[name] = {phonenumber, address, email}
            const contactName = (Object.keys(this.contactInformation))
            // console.log(contactName + " Your new contactinfo : " + "Address: " + this.contactInformation[name].address + ", Phone number: " + this.contactInformation[name].phonenumber)
        }
        else{
            return console.log("Contact not found")
        }
    }

    get_contact(name){
        if(this.contactInformation.hasOwnProperty(name)){
            const contactName = (Object.keys(this.contactInformation))
            const contactInformation = (Object.values(this.contactInformation))
        }
        else{
            return console.log("Contact not found")
        }
    }

    delete_contact(name){
        if(this.contactInformation.hasOwnProperty(name)){
            delete this.contactInformation[name]
            const contactInformation = (Object.values(this.contactInformation))
            const contactName = (Object.keys(this.contactInformation))
        }
        else{
            return console.log("Contact not found")
        }
    }

}

let addressbook = new AddressBook()
addressbook.add_contact("Prerana", "9861322471", "Pokh", "prerana@gmail.com");
