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
- The user registration form has six input fileds: first name, last name, email, username, password and re-type password. 
- The first and last name fields check that the value entered by the user is not just empty spaces. Other than that the max character length allowed is set to 30 characters. 
- Email is set to use the same emailRegex var that the comment / post form uses and more details can be found **here (link to readme section)**
- Username must be a minimum of 4 characters in length with a maximum of 20. 
- Password uses the following regex: 
```
//passRegex: contains number, uppercase letter, special character, no space and is between 8 and 16 characters in length.
const passRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
```
There is a dynamically updating password check that allows the user to see the required password criteria and if they have been meet. 
- Re-type password is enabled once the password field has a valid input. It is disabled again if the user changes the password field to an invalid value. The re-type field checks for a matching value with the password field. 
- The Show password check boxes allow the user to see the password value if selected. If deselected the password becomes hidden as it is by default.  



Comment / Post Form 
- Has three input fields: name, email and comment. 
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