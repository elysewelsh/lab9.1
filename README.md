# 📋 Component Library

Simulated library of mock components to help learn React fundamentals

## 💻 Technologies Used

* **React:** Frontend library for building the user interface.
* **TypeScript:** For static typing of data objects and component props.
* **Tailwind CSS:** Utility-first framework for styling.

## ✨ Features

* **User Profile Rendering:** Renders a User Profile Card from user properties
* **Product Rendering:** Renders a Product listing from product properties
* **Real-Time Alerting:** Can handle multiple alert statuses from alert properties

## 🏛️ Component Architecture

App holds the data and states. ProductDisplay and UserProfileCard components are rendered with product and user data objects held in App. ProductDisplay receives children props from App as well. 

ProductDisplay controls rendering of AlertBox through App. ProductDisplay calls the onAddtoCart function and sends the product.id property to the function held in App. The onAddtoCart function results in a rendering of AlertBox with a success message and adds the product.id to the array of items held in cartItems. (This array is displayed at the bottom of the webpage in faint gray font as information only.)

## ⚙️ Installation

To run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/elysewelsh/lab9.1.git

# Navigate into the directory
cd component-library

# Install dependencies (React, TypeScript, Tailwind, etc.)
npm install

# Start the local development server
npm run dev
```

## 📖 References

* **Project References:** Lessons in Module 9 and DevTools on [lab page](https://perscholas.instructure.com/courses/3086/assignments/599666) for styling 
* **To Format README:** These templates gave me formatting advice and inspiration:
     - [Scrimba README template](https://github.com/elysewelsh/lab2.1/blob/main/README.md)
     - [Frontend Mentor README template](https://github.com/elysewelsh/sba3/blob/main/README-template.md)

## 💖 Acknowledgements

Anyone in the list below has full access to this code and can fork or clone it because they directly contributed to it in some way. Permission has been given to use my repository as reference material to anyone else in class as well. 

* **Jayanthi**
* **Mithra**
* **Phillip**
* **Stacy**

## 🧘 Reflections

1. How did you handle optional props in your components?
    >Within the UserProfileCard component, ternery operators were used to determine if the values of the show/hide properties were true. Children were also used to house additional optional messages passed to componenets. Buttons only appear if their optional properties exist and are true by using the short circuit operator to evaluate the incoming properties.
1. What considerations did you make when designing the component interfaces?
    >I think all of this information was pre-defined within the instructions.
1. How did you ensure type safety across your components?
    >The interfaces define the types of properties that will be used throughout the components and project. Deconstructing the props based on the interfaces and adhering to the types was the only work to be done that I remember.
1. What challenges did you face when implementing component composition?
    >I really didn't call any children from inside a parent component. We sent data back from ProductDisplay to the main App to render the "child" AlertBox. Since AlertBox could be used for multiple scenarios, my group determined it should live at the top of the page and rendered it from the main App.
    >
    >If I were to only use AlertBox for actions dealt with in the ProductDisplay component, I think a challenge I would have is figuring out where handleAddtoCart should live. And maybe that's a question I should have asked anyway because the only action that will call it comes from ProductDisplay. However, I know that, the states and functions have to live where the applicable data lives too, so I think it would always live in the App. Another challenge might be how many other components will call AlertBox and will the properties be generic enough.