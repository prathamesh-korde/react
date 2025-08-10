function customRender(reactElement, mainContainer) {
    const domEle = document.createElement(reactElement.type);
    
    // Set the inner HTML with the children content
    domEle.innerHTML = reactElement.props.children;
  
    // Loop through props and set attributes
    for (const prop in reactElement.props) {
      if (prop === 'children') continue; // Skip children
      domEle.setAttribute(prop, reactElement.props[prop]);
    }
  
    // Append the created element to the container
    mainContainer.appendChild(domEle);
  }
  
  const reactElement = {
    type: 'a',
    props: {
      href: "https://google.com",
      target: '_blank',
      children: 'Click me to visit Google'
    }
  };
  
  const mainContainer = document.getElementById("root");
  
  customRender(reactElement, mainContainer);
  