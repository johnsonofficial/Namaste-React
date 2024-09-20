// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React!"); // In the object we give attributes to the tag
// const root  = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading)


// const heading2 = React.createElement("h2",{},"This is heading2 Tag!");
// const root1= ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(heading2);

/*
create nasted element structure in the React
react element in the code is object
<div> id="parent">
    <div id = "child">
    <h1> I'm h1 Tag </h1>
    </div>
<div> id="child2">
    <h1> I'm h1 Tag </h1>
    <h2> I'm h1 Tag </h2>
    </div>
</div>

*/

// const parent = React.createElement(
//     "div",
//      {id:"parent"},
//      React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I'm h1 Tag"), //here we add one more childeeen to it in the form of array
//         React.createElement("h2",{}, "I'm h2 Tag")]
//      )
// );
// root.render(parent)

//////////////////////////////////////////////////////

/*
<div> id="index">
    <div id = "child">
    <h1> I'm h1 Tag </h1>
    </div>
<div> id="child2">
    <h1> I'm h1 Tag </h1>
    <h2> I'm h1 Tag </h2>
    </div>
</div>
*/

const main = React.createElement(
    
    "div",{id:"index"},
    [    React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'm h1 Tag "),
        React.createElement("h1",{},"I'm h1 Tag ")
        ]
    ),,    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'm h1 Tag "),
        React.createElement("h1",{},"I'm h1 Tag ")
        ]
    ),]
);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);