# testAngularKata

Basic template for having fun with Angular and RXJS !

## Launch the Kata
 - move to the src/ClientApp folder
 - npm install
 - ng serve: if this command is not recognised try npm install @angular/cli
 

 ## Play with the interface
 There is a 'Counter' Tab. In this tab you can find a counter that counts. Clicking 'increment' adds a clock based on the counter.

 ## Analyse the existing code
  - In the code there is a clock.Service.ts that provides a clock$.
  - The counter component displays the clock$ from the service using | async
  - Each new created clock displays the same value using | async
 
  ## Task 1
  Log the clocks values in the console when received.
  (hint: tap)
  
  ## Task 2
  The Service is supposed to be a singleton provided to all components. Why is the value not synchronised between all components ?
    
  Make the value synchronised. (Hint: share)
  
  ## Task 3
  Make the values of the clocks (when clicking 'increment') use show a FizzBuzz (%3 = 'Fizz', %5 = 'Buzz').
  (Hint: map)
  
  ## Task 4
  Add a new counter that will only show the clock value when a 'refresh' button is clicked.
  (Hint: zip, subject)
