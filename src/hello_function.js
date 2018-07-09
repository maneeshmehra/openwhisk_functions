'use strict';

function main(params) {
   console.log('Hello function called');
   var greeting = params.greeting;
   var name = params.name;

   console.log('Greeting: ' + greeting);
   console.log('Name: ' + name);

   var message = greeting + ", " + name;
   return {
      "Message": message,
      "Status": "Success",
      "Code": 200
   }
}
