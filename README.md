# Finstreet-internship-test
Finstreet Customer Details APIs
Using Node.js, MySQL and JWT

HTML form:


![image](https://user-images.githubusercontent.com/70695037/138586079-41908763-3698-4fba-9247-7cf049f23887.png)

 
![image](https://user-images.githubusercontent.com/70695037/138586101-215b537a-61a3-4b49-8fe5-45c5c6339b0b.png)

 


On Submit -> Redirected to /users/all
 
  
 
![image](https://user-images.githubusercontent.com/70695037/138586110-15ba7641-d85e-4f80-bb84-888c5aed6bee.png)
![image](https://user-images.githubusercontent.com/70695037/138586114-680cf270-b8d2-4e6a-bc49-1c9c766695d3.png)




•	/details


Structure: BASE_URL/details/${user_id}

Returns: object:{...user_details}
 
![image](https://user-images.githubusercontent.com/70695037/138586119-b6363569-2af8-4500-9060-041a75b2e237.png)


















•	/update

Structure: BASE_URL/update

Request Body: object:{...new_details_of_user}

Returns: Some kind of a success or failure message for acknowledgement

1.	Update without login: Fails with error message “No token provided!”
  ![image](https://user-images.githubusercontent.com/70695037/138586127-7e69e6af-0edc-49e5-bb09-f819532f9955.png)


2.	Update with Login: Using username and password generates unique access token, valid for 24hrs.

 ![image](https://user-images.githubusercontent.com/70695037/138586135-04444c3f-203f-4173-b4a1-dece9937ffca.png)



3.	Adding access token to header

![image](https://user-images.githubusercontent.com/70695037/138586139-3a0621d8-dfca-452b-87cb-ad6416b4317e.png)


4.	Updating total orders


 ![image](https://user-images.githubusercontent.com/70695037/138586143-db88f453-36fe-4514-8f1e-9b6e65381356.png)


















•	/image


Structure: BASE_URL/image/${user_id}

Returns: object:{...user_image}
 
 
 ![image](https://user-images.githubusercontent.com/70695037/138586146-3ed753fd-6b9a-4d03-850d-55c89f0f8ed2.png)





















•	/insert


Structure: BASE_URL/insert

Request Body: object:{user_details}

Returns: Some kind of success or failure message

1.	Creating a new user: Get Success message
  
  ![image](https://user-images.githubusercontent.com/70695037/138586150-3d0b70a2-af05-4bcb-807a-85148b5b8b27.png)

2.	Adding user using duplicate user_name: Error: “Username already in use”
 ![image](https://user-images.githubusercontent.com/70695037/138586155-77f92b52-d6a1-4030-83d8-429461726aff.png)





•	/delete


Structure: BASE_URL/delete/${user_id}

Returns: A success or failure message

 ![image](https://user-images.githubusercontent.com/70695037/138586158-1d8df2f6-2c37-4a00-8608-c3afb4063a93.png)

