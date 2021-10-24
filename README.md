# Finstreet-internship-test
Finstreet Customer Details APIs
Using Node.js, MySQL and JWT

HTML form:
![image](https://user-images.githubusercontent.com/70695037/138586079-41908763-3698-4fba-9247-7cf049f23887.png)

 

 


On Submit -> Redirected to /users/all
 
 



•	/details
Structure: BASE_URL/details/${user_id}
Returns: object:{...user_details}
 


















•	/update
Structure: BASE_URL/update
Request Body: object:{...new_details_of_user}
Returns: Some kind of a success or failure message for acknowledgement

1.	Update without login: Fails with error message “No token provided!”
 

2.	Update with Login: Using username and password generates unique access token, valid for 24hrs.
 


3.	Adding access token to header
 

4.	Updating total orders
 

















•	/image
Structure: BASE_URL/image/${user_id}
Returns: object:{...user_image}
 




















•	/insert
Structure: BASE_URL/insert
Request Body: object:{user_details}
Returns: Some kind of success or failure message
1.	Creating a new user: Get Success message
 
2.	Adding user using duplicate user_name: Error: “Username already in use”
 




•	/delete
Structure: BASE_URL/delete/${user_id}
Returns: A success or failure message

 
