# Validation Forms JS
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A collection of validation forms made using JavaScript.

Github repo: https://github.com/RubinoD1/Validation-Forms-JS

Live page: https://rubinod1.github.io/Validation-Forms-JS/

## What is Validation Forms JS?

Validation Forms JS contains a set of client side validation forms. This collection of forms makes use of JavaScript in order to check various user inputs such as user names, credit card numbers, email, passwords, star ratings, comments, etc.  

**NO data is actually saved to local storage or server-side.** The submit button on the forms is enabled once all fields are valid. When the submit button is clicked, the form is reset to its default state.

## Form information

**General functionality**
- The submit button remains disabled unless all fields have their requirements met.
- The validity of the input fields is dynamically updated as the user interacts with the fields. 
This is done using the HTML Unicode icons (checkmark (&#9989;) and x (&#10060;)) and also with error messages below each field that is not valid. 
- On clicking the submit button, a window alert is used to provide user feedback, and the form is reset to its default state.

**Payment Form** 
- Cardholder name: Must contain one space and be at least two characters in length. 
- Card number: Can contain only numbers and must be 16 characters in length. A space is added between every 4 characters to provide better readability for the user. 
- Expiry date (month / year): Makes use of dropdown menus for both inputs. Once the user selects an option, the field is set to valid.  
- CVV: Only numbers are allowed and must be three characters in length. 

**User Registration Form** 
- The user registration form has six input fieleds: first name, last name, email, username, password and re-type password. 
- The first and last name fields check that the value entered by the user is not just empty spaces. Other than that, the max character length allowed is set to 30 characters. 
- Email field is tested for proper format using the following regular expression:
```
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Example: anything + @ + anything + . + anything
```
This regex doesn't allow for spaces in the email address but is a versatile check that allows for international characters. 
- Username must be a minimum of 4 characters in length with a maximum of 20. 
- Password: must contain a number, uppercase letter, special character, no space and is between 8 and 16 characters in length.

- There is a dynamically updating password check that allows the user to see the required password criteria and if they have been meet. 
- Re-type password is enabled once the password field has a valid input. It is disabled again if the user changes the password field to an invalid value. The re-type field checks for a matching value with the password field. 
- The Show password check boxes allow the user to see the password value if selected. If deselected, the password becomes hidden as it is by default.  

**Comment / Post Form**  
- Has three input fields: name, email and comment. 
- Name field is required to be at least 5 characters in length with a max length of 30 characters.
- Email uses the same regex that the user registration form uses.
- Comment field is required to be at least 1 character in length with a max length of 200 characters. 

**Product Review Form**  
- Star ratings: Three star ratings are included in the product review form: value for money, overall quality, and features & functionality. The star rating is based on a 5-star rating scale. All star ratings are required in the product review form.   
- Product review: A text area with a maximum character count of 3000 words. A minimum of 1 character is required in order for the product review to be valid. A validity check is in place that checks that the user input isn't simply spaces. 
- Emoji rating: A 5-scale emoji rating is included for an overall satisfaction rating. The scale goes from very dissatisfied to very happy. This is a required field in order for the product review to be valid. HTML unicode was used for the emojis. 

## Screenshots
![comment form](./assets/images/screenshots/comment%20form.png)<br>
![payment form](./assets/images/screenshots/payment%20form.png)<br>
![product review form](./assets/images/screenshots/product%20review%20form.png)<br>
![user registration form](./assets/images/screenshots/user%20registration%20form.png)<br>