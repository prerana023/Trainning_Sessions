// Problem: Write a program to implement a simple address book application.

class AddressBook {
    constructor() {
        this.contactInformation = {}
    }


    /**
     * 
     * This function creates a new contact inforamtion
     * 
     * @param {string} name 
     * @param {string} phonenumber 
     * @param {string} address 
     * @param {string} email 
     * @returns Error Message/New Contact Information
     */


    add_contact(name, phonenumber, address, email) {
        if (this.contactInformation.hasOwnProperty(name)) {
            this.update_contact(name, phonenumber, address, email)
            return console.log("Contact Information already exists")
        }
        else {
            this.contactInformation[name] = {
                phonenumber,
                address,
                email
            }
            return console.log(`Added contact ${name}: phone - ${phonenumber}, address - ${address}, email - ${email}`);
        }
    }


    /**
     * 
     * This function updated existing contact information
     * 
     * @param {string} name 
     * @param {string} phonenumber 
     * @param {string} address 
     * @param {string} email 
     * @returns Error Message/Updated Contact Information
     */


    update_contact(name, phonenumber, address, email) {
        if (this.contactInformation.hasOwnProperty(name)) {
            this.contactInformation[name] = { phonenumber, address, email }
            // const contactName = (Object.keys(this.contactInformation))
            return console.log(`Updated contact ${name}: phone - ${phonenumber}, address - ${address}, email - ${email}`);
        }
        else {
            return console.log("Contact not found")
        }
    }

    /**
     * 
     * This function retrives information of given name
     * 
     * @param {string} name 
     * @returns Error Message/Gets contact information of given name
     */


    get_contact(name) {
        if (this.contactInformation.hasOwnProperty(name)) {
            const contactInfo = this.contactInformation[name];
            return console.log(`${name} your contact information is Phone Number: ${contactInfo.phonenumber}, Address: ${contactInfo.address}, Email: ${contactInfo.email}`);
        }
        else {
            return console.log("Contact not found")
        }
    }


    /**
     * 
     * This function deletes the information of given name
     * 
     * @param {string} name 
     * @returns Error Message/Deleted contact name
     */


    delete_contact(name) {
        if (this.contactInformation.hasOwnProperty(name)) {
            delete this.contactInformation[name]
            return console.log(`Deleted information of ${name}` )
        }
        else {
            return console.log("Contact not found")
        }
    }

}

let addressbook = new AddressBook()
addressbook.add_contact("Prerana", "9861322471", "Pokh", "prerana@gmail.com");
addressbook.get_contact("Prerana")
addressbook.delete_contact("Prerana");
