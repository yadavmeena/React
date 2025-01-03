const heading=React.createElement("div",{id:"element"},[React.createElement("p",{},"This is paragraph"),React.createElement("h2",{},"I am heading")]);
console.log(heading);
//heading is a react elemnt whose return type is object and not h1
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//The above code is very difficult to read so instead of we will use JSX in future, JSX give us clean clear and human readable code.
