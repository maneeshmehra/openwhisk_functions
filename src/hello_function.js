'use strict';

function main(params) {
   var greeting = params.greeting;
   var name = params.name;
   var message = greeting + ", " + name;

   console.log('Hello function called');
   console.log('Greeting: ' + greeting);
   console.log('Name: ' + name);

   return {
      "Message": message,
      "Status": "Success",
      "Code": 200
   }
}
