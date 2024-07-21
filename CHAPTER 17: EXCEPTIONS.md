CHAPTER 17: EXCEPTIONS 

Introduction
    Errors are part of coding

    slacktrace - a list of error messages 

    Review
        logic error- when your program executes without breaking, but doesnt behave the way you thought it would 
            usually require you to consider how you are going about solving the issue to resolve
        runtime error- when your program does not run correctly and an exception is raised 
    
    exception- a runtime error in which a name and message are displayed to provide more information about the error 

Exceptions and Errors 
    ** In JavaScript, a runtime error and an exception are the same thing and can be used interchangeably. 
    
    ** this can cause confusion because a logic error is not an exception!

Error Object 
    When a runtime error, also known as exception, is raised JavaScript returns an Error object. 

    An error object has two properties: a name and a message 
        the name refers to the type of error that occurred
        the message gives the user information on why that exception occurred 

    JavaScript has built in exception with pre-defined names and messages, however, JavaScript also gives you the ability to create your own error messages 

Common Exceptions 
    JavaScript has built in exceptions 

    most common is  Syntax Error
    Syntax Error- thrown when we include a symbol JavaScript is not expecting 
        Example 
            console.log("This is" an example);
        Console output: 
            SyntaxError: missing ) after argument list

            --> we put our second quotation in incorrect place 
                Javascript does not know what to do with the second half of our phrase and throws Syntax Error with message: missing ) after argument list 

    Reference error- thrown when we try to use a variable not yet been defined 
        Example 

    Type error- thrown when JavaScript expects something to be one type but provided value is a different type 
        Example 

Exceptions give us a way to provide more info on how something went wrong 
    regularly used in debugging process 


