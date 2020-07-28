POST Register User
https://lambda-sprout.herokuapp.com/register
Register a new user

BODY raw
{
    "username": "Test1",
    "password": "test123",
    "phoneNumber": "9705555555"
}



POST Login User
https://lambda-sprout.herokuapp.com/login
Register a new user

BODY raw
{
    "username": "Test1",
    "password": "test123"
}



PUT Update Users Phone Number
https://lambda-sprout.herokuapp.com/user/1
Register a new user

HEADERS
tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM
BODY raw
{
    "username": "Test123"
}



GET Get Specific Users Plants
https://lambda-sprout.herokuapp.com/users/3/plants
Register a new user

HEADERS
tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoiVGVzdDEyMzQ1IiwiaWF0IjoxNTk1OTIwMTc3fQ.Xi-eAXTDCAQEdPE1V6K63AsAbK5pbjQpzykS4B4Gyzg


GET Get An Individual Plant By Plant ID
https://lambda-sprout.herokuapp.com/plants/2
Register a new user

HEADERS
tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM


POST Post A New Plant
http://localhost:2100/users/3/plants
Register a new user

HEADERS
tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJuYW1lIjoiVGVzdDEyMzQ1IiwiaWF0IjoxNTk1OTE4NTgzfQ.qLMeqmyX7LRaihQwoUtTkmWAfryieYl5puwdl04ZBcA
BODY raw
{
    "nickname": "Nope Plant",
    "species": "Poison Oak",
    "h2oFrequency": 8,
    "image": "Coming Soon"
}



PUT Update An Existing Plant By ID
https://lambda-sprout.herokuapp.com/plants/7
Register a new user

HEADERS
tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM
BODY raw
{
    "nickname": "Spike",
    "species": "Aloe Vera",
    "h2oFrequency": 5,
    "image": "Coming Soon"
}



DEL Delete An Existing Plant By ID
https://lambda-sprout.herokuapp.com/plants/7
Register a new user

HEADERS
tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiVGVzdDEiLCJpYXQiOjE1OTU5MTcyODB9._3f2LUVByz9txkb6HFmgjT5vYFOizbwSw_U_9J-uLoM
BODY raw
{
    "nickname": "Dr. Plant",
    "species": "Aloe Vera",
    "h2oFrequency": 5,
    "image": "Coming Soon"
}
