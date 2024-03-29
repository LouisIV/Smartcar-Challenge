export const mainConfig = {
  title: "Add new user",
  url: "https://jsonplaceholder.typicode.com/users",
  method: "POST",
  body: [
    {
      name: "email",
      type: "email",
      max: 24,
      min: 3
    },
    {
      name: "full-name",
      type: "text",
      placeholder: "John Doe",
      required: true
    },
    {
      name: "phone",
      type: "tel",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    }
  ]
};

export const example1 = {
  title: "Create new user",
  url: "https://jsonplaceholder.typicode.com/users",
  method: "POST",
  body: [
    {
      name: "email",
      type: "email",
      max: 24,
      min: 3
    },
    {
      name: "full-name",
      type: "text",
      placeholder: "John Doe",
      required: true
    },
    {
      name: "phone",
      type: "tel"
    }
  ]
};

export const example2 = {
  title: "Get users",
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET"
};
