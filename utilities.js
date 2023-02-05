  const createNode = (options) => {
    const node = document.createElement(options.tag);
    if(options.className) node.setAttribute('class',options.className);
    if(options.innerHTML) node.innerHTML = options.innerHTML;
    if(options.attributes) Object.keys(options.attributes).forEach(key => node.setAttribute(key,options.attributes[key]) );
    if(options.style) Object.keys(options.style).forEach(key => node.style[key] = options.style[key]);
    if(options.event_listeners) Object.keys(options.event_listeners).forEach(key => node.addEventListener(key,options.event_listeners[key]) )
    if(options.root) options.root.appendChild(node);
    return node;
  }

  const xhrURL = (options) => new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => resolve(xhr.responseText) );
    xhr.addEventListener('error', () => resolve(false) );
    xhr.open(options.method ? options.method : 'GET', options.url);
    if(options.content_type) xhr.setRequestHeader('Content-type', options.content_type);
    const params = new URLSearchParams(options.params).toString();
    xhr.send(params);
  });

  const loadImage = src => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(false);
    img.src = src;
  });