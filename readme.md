# Validation Forms JS

A collection of form validation forms.

Client side validation is performed by a web browser, before input is sent to a web server.

## To-do 

Main Page 
- Main page media breakpoints working. 
- Simple style -- no frills minimalist. 

Payment Form 
- 

User Registration Form 
- 

Comment / Post Form 
- Has three input fields: name, email, comment. 
- Name field is required to be atleast 5 characters in length. 
- Email field is tested for validity using the following regular expression:
```
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
- Comment field is required to be atleat 1 character in length. 
- The submit btn remains disabled unless all fields have their requirements met.
- The validity of the input fields is dynamically updated as the user interacts with the fields. 
This is done using both HTML Unicode icons (checkmark (&#9989;) and x (&#10060;)) and also with error messages below each field that is not valid. 
- On clicking the submit button a window alert is used to provide user feedback that their submission was successful.

Product Review Form 
- 