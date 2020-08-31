//named export -- has a name . have as many as needed
//default export -- has no name . you can only have one

const message = "some message from mymodule.js";

const location = "nagpur";

const getGreeting = (name) => {
  return `Welcome to the course ${name}`;
};

export { message, getGreeting, location as default };
