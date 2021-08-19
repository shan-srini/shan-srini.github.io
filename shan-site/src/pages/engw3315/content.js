import React, { useEffect, useState } from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import functions from './codeScreenshots/functions.png';
import classes from './codeScreenshots/classes.png';
import classCar from './codeScreenshots/classCar.png';
import calcUsage from './codeScreenshots/calcUsage.png';
import fileIO from './codeScreenshots/fileIO.png';
import firstKeyValDB from './codeScreenshots/firstKeyValDB.png';
import instanceVar from './codeScreenshots/instanceVar.png';
import dataMethod from './codeScreenshots/dataMethod.png';
import putBody from './codeScreenshots/putBody.png';
import deleteBody from './codeScreenshots/deleteBody.png';
import getBody from './codeScreenshots/getBody.png';
import terminalProgramInteraction from './codeScreenshots/terminalProgramInteraction.png';
import terminalProgramInteraction2 from './codeScreenshots/terminalProgramInteraction2.png';

const Hint = ({ hint, text }) => {
    return (
        <Tooltip title={<Typography color="inherit">{hint}</Typography>} >
            <span style={{ cursor: 'help', textDecoration: 'underline', textDecorationColor: 'cadetblue' }}>{text}</span>
        </Tooltip>
    )
}

const Code = ({ text }) => {
    return (
        <pre style={{
            background: '#00000',
            border: '1px solid #85144B',
            borderLeft: '3px solid #85144B',
            color: 'lightgreen',
            pageBreakInside: 'avoid',
            fontFamily: 'monospace',
            fontSize: '15px',
            lineHeight: '1.6',
            marginBottom: '1em',
            maxWidth: '100%',
            overflow: 'auto',
            padding: '.5em 1.5em',
            display: 'block',
            wordWrap: 'break-word',
        }}>
            <code>
                {text}
            </code>
        </pre>
    )
}

const subHeading = {
    marginTop: '1em',
    color: '#87CEFA',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    textUnderlinePosition: 'under'
}

const content = [
    {
        title: "1. Overview of Project Goals",
        content: <>
            <li> This guide is intended to teach you how to create your very own simple key-value database store in Ruby. </li>
            <br />
            <li> This guide will attempt to assume minimal technical knowledge, however some concepts may require further independent research depending on comfort level. The following sections will include developer environment setup, introduction to Ruby and databases, program design, and finally a walkthrough of database API development. </li>
            <br />
            <li> By the end of this guide, you should have a working program and be able to interact with your database using simple key-value database operations such as PUT/SET, GET, and DELETE. </li>
        </>
    },
    {
        title: "2. Developer Environment Setup",
        content: <>
            <strong style={subHeading}>Editor</strong>
            <br />
            If you have ever worked on a codebase before, you likely have some sort of experience using an IDE/text editor such as Visual Studio Code.
            <br /> <i>If this is the case you may skip ahead to the next section.</i>
            <br />It is important to note that for this tutorial a text editor does not refer to a program such as Microsoft Word.
            <br />Word Processor programs such as Microsoft Word often append meta information into a file which can help with styling the page.
            Therefore the text which you see on a .doc file is not the actual content of the file.
            <br />For this tutorial you will need software such as <i>Visual Studio Code, Atom, NotePad, or Vim</i> in order to write a <Hint hint="Ruby file extension" text=".rb" /> file.
            <br /><br />
            <strong style={subHeading}>Environment</strong><br />
            In order to create a key-value database store which is able to persist information past termination of the program (don’t worry if this doesn’t make sense now), we will need to create a directory in which we can work with our new program.
            <br />For this guide, I will be working in the directory `~/projects/engw3315/ruby_kv_db`.
            <br />In this directory we will be storing our source code along with a data file which can be considered as our <Hint hint="An interface which the client user does not directly interact with, but may be responsible for tasks such as information storage or processing." text="backend."></Hint>
            <li>Create a file called `kv_db.rb` which stands for key-value database.</li>
            <li>Create another file called `data.json` and add one line with the content `{"{ }"}` (no quotes).</li>

            <br />
            <strong style={subHeading}>Ruby setup</strong><br />
            Simply creating a Ruby file is not enough to actually run a Ruby program.
            <br />Ruby is an interpreted language which means that we must also have an interpreter installed. An interpreter is responsible for reading our Ruby file and actually running our program.
            <br /><br />If this is confusing, think of a jpeg image file stored on your machine.
            Although you have that image file on your machine, you need software to open and interpret the binary data that the file is composed of in order to visually display the image.
            <br /><br />Ruby installation instructions can be found <a href="https://www.ruby-lang.org/en/documentation/installation" style={{ textDecoration: 'underline', color: 'inherit' }}>here</a>.
            For MacOS users, Ruby is preinstalled on your machine as long as your MacOS version is after El Capitan (source Ruby docs).
            Windows users will have to follow the instructions in the documentation in order to run a one time program to install Ruby.
        </>
    },
    {
        title: "3. What is a Ruby Program?",
        content: <>
            Similar to any other programming language, a Ruby program is simply a set of instructions written in a syntax which the Ruby interpreter understands.
            <br />There are a few computer programming concepts which we will briefly cover in this section in order to help you effectively follow along.
            <br /><i>If you have any introductory knowledge of computer programming you may find this section redundant and can skip on to the next section.</i>
            <br />The following concepts are general to all of computer programming and not necessarily isolated to just Ruby.

            <br /><br /><strong style={subHeading}>Variables</strong><br />
            <u>Purpose</u>: Variables are a way to keep track of information through the execution of a program. In the context of the program we will be creating, this may include information about the file in which our data is stored or the data which the user has inputted to our program through the command line. In Ruby you can assign variables using <Code text={`variable_name = “variable_value”`} /> This would assign the variable variable_name to a string containing the data “variable_value”.
            <br /><u>Naming Convention</u>: In Ruby typically snake_case, words are separated by an underscore, capitalization is lowercase. Ruby specific notation is that constants (values that should not and will not change throughout the program are all caps). VARIABLE_NAME can only be set to a value once, attempts to set it afterwards will cause warnings (program won’t crash, but it’s bad practice). It’s also important to note that there are <Hint hint="Reserved keywords are words in programming languages which are already used as part of the built in syntax. For example, a reserved keyword synonymous to almost all programming languages is `if` used in if statement conditionals. This word could never be used outside of the context of an if statement because the interpreter would always treat its presence as an if statement." text="reserved keywords" /> such as “def” and “end” which cannot be used as variable names.
            <br /><br /><strong style={subHeading}>Functions</strong><br />
            <u>Purpose</u>: Functions are a grouped set of instructions which can be repeatedly run. Functions also provide the ability to provide arguments which allow us to slightly vary the instructions being run. Arguments are variables which can be passed to functions and are valid with the given name only for the duration of that function. As an example, here’s a function which prints the String that we provide as an argument.
            <br /><img src={functions} /><br />
            Here we created a function called print_string with the set of instructions that says to call the function puts (you could also use “p value”, as "p" serves the same purpose as "puts" in Ruby) which prints a line onto the screen using the value that we supplied. We also created a variable and passed it as an argument to the function, then <Hint text="re-assigned" hint="To initially set a variable's value is to assign it, to change it afterwards is to re-assign it." /> the variable and called the function again to get a different result.
            <br />To run this example, copy the content into a new .rb file and then in your terminal navigate to the file’s location and run <Code text={`ruby file_name.rb`} /> You should be able to see two lines printed onto the screen.
            <br /><u>Naming Convention</u>: Define a function <Hint text="block" hint="In Ruby, a block is simply a segment of code. Functions, methods, classes, if statements, loops, etc. are all `blocks` of code, and Ruby gives you a specific way to express that. Different languages may use different syntax, for example Java uses curly brackets, {}. To create a block in Ruby you will follow the instructions in this section." /> using the reserved keyword “def” and end the function with the reserved keyword “end”. Naming is the same as snake_case described in variable naming convention.
            <br /><u>Note</u>: Lines beginning with # are called comments and are purely for sake of readability for the developer.
            <br /><u>Note</u>: An important concept for readability is whitespace. Essentially whitespace is a syntax requirement which is horizontal space created by the tab key. Generally, for instructions within a block in Ruby there must be a single indentation. If you are using software such as Visual Studio Code to edit your Ruby file, this whitespace addition should be automatically handled.
            Ruby in specific does not care about whitespace and will not raise errors if it is not present, but it will be very helpful for your ability to read your own code. Other languages such as Python require the correct usage of whitespace in a program.
            <br /><br /><strong style={subHeading}>Methods</strong><br />
            Methods are essentially the same as functions, except that they belong to a class (explained next).
            <br />For now, imagine a class in Ruby as a car, we have many different cars with different attributes such as color, make, year, etc... That being said, all cars should share common functionality such as the ability to drive or turn. By belonging to a class, methods allow us to write blocks of code which can modify or rely on the attributes of a class. If mileage was an attribute of our Car class, then calling `car.drive(20)` may increase the mileage by 20 miles on the specific car instance that we called the drive method on.
            <br /><br /><strong style={subHeading}>Classes</strong><br />
            <u>Purpose</u>: Classes are an important part of many programming languages. For the purpose of this guide, an understanding that classes are a way in which we can further organize our code to store different instructions with a similar overarching goal is mostly sufficient. Here’s an example of a class declaration syntax in Ruby.
            <br /><img src={classes} /><br />
            Similar to functions, a class is a Ruby block which can hold different sets of information such as methods and variables specific to the class. For the purpose of this guide we will not differentiate between more advanced Ruby topics such as <strong>instance</strong> variables and <strong>class</strong> variables although this may be useful as a topic to independently research in the future. Instance variables are the attributes which were referred to previously. A car class may have an instance variable attribute called color which is a String that dictates that color of that specific car.
            <br />Here's an example of using the Calculator class we defined earlier, and also an example of creating a Car instance with an instance variable attribute color set to blue for just that blue_car instance. You could also create another instance called red_car and give it a color of red, both instances of the Car class would have their own @color instance variable value.
            <br /><img src={classCar} />
            <br /><img src={calcUsage} /><br />
            <u>Note</u>: Here we see an example of return values using the `return x+y` statement. This means that after we call a function or method, we can get back a value that it produces. In Ruby the last line of a function or method is the return value by default, or we can explicitly say `return some_value` to explicitly write what we are returning. Ruby developers typically use the last line return fashion, but we will try to be explicit in this guide by using the return statement for clarity. Other programming languages such as Java, Python, and JavaScript require the usage of explicit return statements.
            <br /><br /><strong style={subHeading}>File IO</strong><br />
            <u>Purpose</u>: File IO is a collection of instructions which allows us to interact with files on our machine. Here’s an example of methods using the built in Ruby File class to open a file in your current directory and then read and write to the content of that file.
            <br /><img src={fileIO} /><br />
            We will be using methods of the File class to store a copy of our database on the filesystem. This is because variables are erased when the program is terminated, so our database will only exist as long as the Ruby program is running. To make sure we have the values we set in our database the next time we run our program we will copy all the data in the database to a file. This will persist the data even after the program is terminated for as long as that file is not deleted from the filesystem.
        </>
    },
    {
        title: "4. What is a Database?",
        content: <>
            Databases range from software such as Postgresql or MySQL, which use a query language called SQL, to a piece of paper with an organized lookup method to find information.
            <br />A database is simply something which allows for systematically storing and retrieving information.
            Databases are necessary in almost every aspect of modern everyday life, from keeping track of your credit card purchases to being responsible for online video game infrastructure.
            <br />For this guide, our database will be responsible for holding simple pieces of information by associating a key to any value.
            <br />Our database will be incredibly simple in comparison to battle-tested solutions such as Postgresql. True database software solutions tackle issues such as <Hint text="information sharding" hint="A database concept which entails spreading data across various locations, yet still treating all the data as one logical connected entity. (A very complicated task which is necessary in the modern era of big data)" /> or <Hint text="relations" hint="SQL databases have concepts which allow for easier data querying such as Foreign Keys which allow explictly creating relations in the database between one object and another, for example a User model representing a parent which holds a relation to a User model representing their child." />. One example of how a simple database, like the one we will create, is inferior to true database solutions is that our database will only be able to be run by one instance of the program at a time. Meaning it would not be able to handle things like information sharing or <Hint text="horizontal scaling" hint="Put simply, this is the ability to run multiple instances of the same program simaltaneously to increase ability to handle large scale client demands." />.
        </>
    },
    {
        title: "5. Program Design",
        content: <>
            Our program design will be to provide three database API operations <strong>PUT</strong>, <strong>GET</strong>, and <strong>DELETE</strong>.<br /><br />
            <li>PUT will create new entries in our database by accepting a KEY and a VALUE </li>
            <li>GET will retrieve entries by accepting a KEY</li>
            <li>DELETE will remove entries by accepting a KEY</li>
            <br />We will design a simple class called KeyValDB which will have methods for each of these operations.
            <br /><br />We will also run a while loop (don’t worry if you don’t know what this is yet) which will accept user input on the command line.
            <br />This user, otherwise known as the client, will supply input corresponding to actions that we defined.
            <br /><br />These actions include the aforementioned PUT, GET, and DELETE against the database, as well as an <strong>EXIT</strong> operation which closes the program.
            <br /><br />An important concept to understand is the idea of in-memory versus persistence...
            <br />When our Ruby program is running, we will store a copy of our database in-memory using a Ruby data structure in an instance variable for our KeyValDB class. This means that the data will only be available until we supply the EXIT command.
            <br />If we want the data to be available the next time that we start our program, then we can use a resource outside the context of our program execution (another file on the machine) which will store a copy of our information for us. We will update this file when the user calls the EXIT command.
            <br />We could also take the alternative route of immediately writing to the file for every command that the user makes, but this would likely slow down our program as File IO is a more intensive operation for Ruby than keeping track of the data in-memory.
            <br /><br /><u>Note</u>: Some databases such as Redis (a key-value store) operate on the concept of being in-memory as it significantly speeds up operations.
        </>
    },
    {
        title: "6. Instructions",
        content: <>
            <strong style={subHeading}>Groundwork</strong><br />
            First open the `kv_db.rb` file which you created earlier in the setup steps. We will now begin to write our program.
            <br />For our backend file we will be using a data format called json, a helpful filetype and data structure which allows us to store information with key value pairings. Our Ruby program requires help from a library called ‘json’ in order to use and understand json files. So in the first line of your program add the following.
            <Code text="require 'json'" />
            This line will import the powerful json library into your program and doesn’t require any additional work.
            <br />Next in order to help readability of our program, we will add a constant variable called `BACKEND` which stores the location of our data file. Add the following near the top of the file.
            <Code text="BACKEND = './data.json'" />
            We can also create a help message describing the usage of our program to use later.
            <Code text="HELP_MESSAGE = 'USAGE: GET [key] || PUT [key] [val] || DELETE [key] || EXIT'" />
            Now we will implement the functionality of the program by first using a class to organize our database related operations. Take this task as a challenge to test your comprehension of the basic intro section. Create a class called KeyValDB, then create a method called `initialize` which takes in one argument and does nothing for now, finally create one more method called `data` which does nothing for now. You should have lines similar to the following in your program.
            <br /><img src={firstKeyValDB} /><br />
            Now we will implement the above two methods.
            <br /><br />The `initialize` method is a special method in Ruby which is called whenever we call `ClassName.new`. With this we can pass arguments which we could make available to the class for the duration of its life. To make a variable available to a class for as long as it is in existence in the program, we will use the following syntax similar to what was seen before in the Car class example.
            <br /><img src={instanceVar} /><br />
            It is important to note that whenever we are within the `class KeyValDB` and corresponding `end` line to mark the end of the block of code which represents our class we can always access our instance variable using `@data`.
            <br />Our `@data` variable here is the in-memory version of our database which will be initially equal to whatever `data.json` stores at the beginning of our program.
            <br />Now we will provide our program with a way in which it can access the data stored within this class by implementing the other method `data`. Since we are within the class, we can access our data by using `@data`, so this method will simply `return @data`.
            <br /><img src={dataMethod} /><br />

            <br /><strong style={subHeading}>PUT/SET operation (create new entry in database)</strong><br />
            Now implement a method called `put` within the KeyValDB class which accepts two arguments called `key` and `value`.
            <br />The purpose of this method is to store a key-value pair in our in-memory representation of our database. Our `@data` variable will be of the type <Hint text="Hash" hint="A Hash is the Ruby equivalent of a dictionary in Python, Object in JavaScript, or a HashMap in Java. It is a structure which allows mapping any given KEY to any given VALUE. Therefore, it is very useful in our implementation of a KEY-VALUE database." /> which is the Ruby equivalent to json.
            <br />To set values in our `@data` Hash, we will use `@data[key] = value`. The body of this method should therefore look like the following.
            <br /><img src={putBody} /><br />
            <u>Note</u>: What happens when a key already exists in the database?<br />
            &nbsp;&nbsp;Hash’s only correspond a key to one value. Therefore duplicate calls to put will overwrite the old value.

            <br /><br /><strong style={subHeading}>GET operation (retrieve entry in database)</strong><br />
            Next implement a method called `get` within the KeyValDB class which accepts one argument called `key`.
            <br />The purpose of this method is to retrieve a value from our database using the given key.
            <br />To retrieve a value from a Hash we use `@data[key]`. We will also print this value to the user in this method using the `p` (same as `puts`) function. This method will look like the following.
            <br /><img src={getBody} /><br />

            <u>Note</u>: What happens if a key doesn’t exist in the database?<br />
            &nbsp;&nbsp;Ruby will automatically return a special value called `nil`. This means that our program will not error out and simply print the `nil` value when the requested key doesn’t exist.

            <br /><br /><strong style={subHeading}>DELETE operation (remove entry from database)</strong><br />

            Finally add a method called `delete` within the KeyValDB class which accepts one argument called `key`.
            <br />The purpose of this method is to delete a value from our database which corresponds to the given key.
            <br />Our Hash `@data` variable has a method called `delete` which allows us to remove values from the Hash.
            <br />We can simply call the `delete` method by adding `@data.delete(key)`. Therefore, the method will look like the following.
            <br /><img src={deleteBody} /><br />
            <u>Note</u>: What happens if a key doesn’t exist in the database?<br />
            &nbsp;&nbsp;The Hash delete method silently fails when the given key doesn’t exist in the database. Therefore, our program will not error out when an attempt is made to delete a key which doesn’t exist.
            <br /><br />
            Now that we have finished all the functionality of our KeyValDB class, we have effectively created an API to interact with our database. To add additional functionality, conduct research on the Hash class by searching for a phrase similar to “Ruby Hash methods”.
            <br />This will provide results for documentation on other Hash methods which will allow you to further interact with your database. <Hint text="For example" hint="I recommend beginners taking on this example as a challenge!" />, you may be able to leverage loops to iterate over the keys in your @data Hash to delete all keys with a certain prefix.
            <br /><br />The next step is to write driver code which allows a user to interact with our program.
            <br />Unfortunately, this code is a bit beyond the scope of our guide...
            <br />Paste the below code into your program and read the brief overview below to familiarize yourself with the logic.
            <Code text={`
# refresh our program with the values stored in backend
file = File.read(BACKEND)
data = JSON.parse(file)
# tell KeyValDB we're ready to run by initializing!
db = KeyValDB.new(data)
# get some user command
p "Enter input to interact with db"
p HELP_MESSAGE
input = gets.split
while true
    input[0]
    case input[0]
    when 'PUT'
        db.put(key = input[1], value = input[2])
    when 'GET'
        db.get(key = input[1])
    when 'DELETE'
        db.delete(key = input[1])
    when 'EXIT'
        break
    else
        p HELP_MESSAGE
    end
    # refresh user input for next run
    input = gets.split
end
# While loop only calls "break" when user calls "EXIT"
# Therefore you will only reach this segment of code on "EXIT"
# Update backend to have the data next time program is run
# Retrieves data from DbKeyVal through db.data method
File.write(BACKEND, JSON.dump(db.data))
`} />
            <ol>
                <li>The above code first reads from the `data.json` file (the name of the file is stored in the BACKEND constant variable which should be at the top of your file).</li>
                <li>After retrieving the content of the BACKEND file, the JSON library is used to parse and translate the information into a format which Ruby can understand (the Hash @data structure used in our class).</li>
                <li>The KeyValDB class is initialized by passing in a copy of the persisted database at the beginning of the program’s execution.</li>
                <li>Next the user is prompted to input a command by displaying the HELP_MESSAGE constant variable which should also be present towards the top of your file. <br /><i>In Ruby, we can accept user input into a variable using the `gets` function.</i></li>
                <li>The next part of the code uses more advanced Ruby syntax which retrieves user input using the `gets` function, then splits the contents of the user input string based on the spaces between words and passes it into the methods which you wrote earlier based on whether or not the first word in the user input equals something which the program expects (PUT, GET, DELETE, EXIT).</li>
                <li>If the user input does not have the correct number of arguments, for example `PUT key` (should be `PUT key value`), then the program just assumes `nil` for the expected `value` argument.<br /><i>Therefore `PUT key` would essentially be equivalent to `PUT key nil`.</i></li>
                <li>Finally, when the user inputs `EXIT`, the program takes the in-memory version of the database and copies it over to the persisted version of the database (the data.json file) using the JSON library.</li>
            </ol>
            <br />
            You will now be able to interact with your database in the <strong>terminal</strong> by calling.
            <Code text="ruby kv_db.rb" />
            You may then interact with the program by using the <strong>GET</strong>, <strong>PUT</strong>, <strong>DELETE</strong>, and <strong>EXIT</strong> commands.
            <br /><img src={terminalProgramInteraction} /><br />
            The next time that you start the program and retrieve my_name without first calling `PUT` to insert it in the database, you will still see your value printed onto the screen!
            <br /><img src={terminalProgramInteraction2} /><br />
            <br /> <br /><br />
            <span style={{ width: '100%', display: 'flex', alignItems: 'center', color: 'lightgreen', flexDirection: 'column' }}><strong>Thanks for following along! I hope you learned something new along the way!</strong>
                <i><span style={{ fontSize: 20 }}>Click <a href="/" style={{ textDecoration: 'none' }}>here</a> to find my contact details. Feel free to reach out to me with any questions or suggestions!</span></i>
            </span>

        </>
    }
]

export default content;