# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: In JavaScript, "this" is a key word that references the current class or object being used to invoke methods. An example of using "this" in react would be "this.setState" to render an update to the current component. 

  Researched answer: We can use "this" to bind to class methods in order to access props and state of a component. We can access functions using this. Common uses of this include: this.state, this.props, this.setState. A few other uses: this.forceUpdate(callback) - for data outside state and props if that data would be used to change part of the UI, this.isReactComponent - property tells us by having a value that it is a React class component and for functional componenents the property is undefined, and this.context - a way to store data without unnecessarily access middle components if you follow the data flow component tree and you only need to access some compenents deep in the tree.



2. What is React? Why would you use it?

  Your answer: React is a JavaScript library used for creating user interfaces. It is made up of components that are analogous functions and allow for reusability throughout the application. It is used to build a wide variety of projects ranging from web pages to apps, and allows for scalability, which is incredibly important as applications become more and more popular and gain more users. 

  Researched answer: React is known for its scalability, dynamicness, and reusability. One of the most awesome features is the virtal DOM, which allows changes to occur without updating entire webpages. The virtual DOM allows components to be updated without needing to refresh the entire page, which keeps the page from slowing down as well.



3. Which lifecycle method is required in a React class component?

  Your answer: The built-in render() method is the required lifecycle method in a React class component. Render() automatically runs and updates components without refreshing the entire page in a browser.

  Researched answer: We cannot change state or cause side effects in the render method. The render methods allow us to read props and state as well as return JSX code to the root component of the app. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is a mix of html and Javascript languages used to code in react to create dynamic applications for user interfaces. HTML uses class and JSX uses classNames.

  Researched answer: JSX stands for JavaScript XML and is an extension of Javascript that allows us to intertwine HTML with logic by using react. It is faster than regular Javascript. In HTML, multiple elements can be returned, but in JSX only one element can be returned, so we create nests and use fragments to return multiple elements.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager created by Facebppk to manage dependency files. The files that are modifies are package.json and yarn.lock. Yarn is a way to tie everything together.

  Researched answer: Yarn stands for Yet Another Resource Negotiator. It's a package manager that allows developers to use and share code around the world. It doubles as a project manager. Package.json is a manifest that describes the package. Yarn.lock is the main source of information about the current versions of dependencies in a project.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is a function without a name, which means you cannot recall it later. We can use the keyword function to declare an anonymous function. Sometimes anonymous functions are passed as parameters within higher order functions. 

  Researched answer: An anonymous function can have multiple arguments but only one argument. Sometimes an anonymous function is written with arrow syntax. By adding parenthenthis after initialization, we can invoke the function utilizing Self-Executing Functions.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: The process of delivering elements and components based on certain conditions

2. Object-oriented programming: a computer programming model that organizes software design around data or objects, rather than logic and functions

3. Ruby: is an open-source, object oriented programming language

4. Ruby blocks: Are little anonymous functions that can be passed as arguments

5. Ruby hashes: A collection of key: value pairs
