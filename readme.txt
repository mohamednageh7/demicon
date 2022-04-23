you can run the project 
backend => yarn run dev (or) docker compose up
frontend => yarn start

you can build the project
backend => yarn run build
forntend => yarn run build

api for get data from Random user web site
- http://localhost:5000/api/getRandomUser

api for get user in the web application
- http://localhost:5000/api/getUser

*** Deployment  ***
- I might use AWS EC2 or EKS(Elstic Kubernetes Services)
- what considerations need to be made to scale your application?
  1- The amount of users I expect and the trafic I might have
  2- Pick the right software architecture pattern for scalability( Monolithic Architecture or Microservices Architecture.)
  3- Use metrics to define my scalability challenge