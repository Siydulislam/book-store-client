import React from 'react';

const Answer = () => {
    return (
        <div>
            <h1>How React Works?</h1>
            <p>Answer: React, at its core, maintains a tree that can do efficient diff computations on the nodes. React effectively permits re-constructing the DOM(Document Object Model) in JavaScript and pushing only those changes to the DOM. ReactDOM creates nodes recursively depending on their 'type' property and appends them finally to the DOM. React formed a copy of DOM using virtual DOM in JavaScript, and it uses to diff it to any changes and apply it to real DOM. It would make the least amount of changes possible.</p>
            <h1>Difference between props and state?</h1>
            <p>Answer: The State, a set of variables, can only be defined inside a component and changeable within that component. Props, on the other hand, a short form of properties, is a set of attributes(can be data variables or functions) that can be passed from a parent component to a child component. But, the vice-versa can not be altered. So,  Props can pass from one component to another, whereas State can only pass within a component. Props are immutable that can not be changed, on the other hand, State is mutable.</p>
            <h1>How useState() Works?</h1>
            <p>Answer: In React, useState() is a hook that allows adding State to function components. A state variable, which is preserved in React, normally, variables disappear when a function exists, is declared by useState(). It can accept only the initial state as an argument. It returns the current state and a function that updates it.</p>
        </div>
    );
};

export default Answer;