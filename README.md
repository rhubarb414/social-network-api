# Social Network API

## Description

This is the back end for a blog-like social network where users and post thoughts, react to thoughts, and add one another as friends. It uses MongoDB and Mongoose to create a non-relational database. Aside from giving me practice building databases, it also provided more practice with the MVC framework. It's a lot more files and folders than I've used before, but I enjoy how compartmentalized everything is, and I can see the benefit for scaling and updating code in the future.

The acceptance criteria was as follows:

````AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list```

## Installation

Users will need to install dependences in the terminal using 'npm i' and then start the app with "node server.js."

## Usage

To interact with the app, users will need a client API such as Insomnia. From there, you can make CRUD requests. See the following video demo:

[Demo](https://drive.google.com/file/d/1QBVUXvonR0XDv78iZkk5TYSYZkNr78I6/view?usp=sharing)


## Credits

- User email validation reg ex was modified from https://regexr.com/3e48o

## License

Code is under the MIT license. See documentation in repo.

````
