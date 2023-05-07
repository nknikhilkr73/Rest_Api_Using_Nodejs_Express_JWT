1. The user can register in the (POST:http://localhost:5000/api/users/register)
Using their , Username, email and password

2. The user can login in the (POST:http://localhost:5000/api/users/login)
Using their  email and password
and can get the accesstoken

3.  The user can  get the current user's details the (GET:http://localhost:5000/api/users/current)
Using the accesstoken in the Authorization -> Bearer Token 

4. User can create contacts (POST:http://localhost:5000/api/contacts/)
using the name , email and phone number

5. User can get the contacts (GET:http://localhost:5000/api/contacts/)

6. User can update the Contact (PUT:http://localhost:5000/api/contacts/(The contact id of the contact you want to update))

7. User can delete their contacts using (DELETE:http://localhost:5000/api/contacts/(Contact id to be deleted))

8. resources used here are , node js, express, ejs, mongodb, mongoose , and JWT  