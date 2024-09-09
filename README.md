# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started

You can clone this repo to run the project locally, or test live throught Elastic Beanstalk deployment.

## Project Instructions

To complete this project, you will need to:

* Set up node environment
cd project starter code
npm i
* Create a new endpoint in the server.js file
* Run application locally
npm start
* Deploying your system
eb init
eb create
eb deploy

## Testing

Successful URL responses should have a 200 code. Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.
Open in browser: 
http://full-stack-apps-aws-dev3.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?rs=1&pid=ImgDetMain

## License

[License](LICENSE.txt)
