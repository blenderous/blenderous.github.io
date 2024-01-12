---
layout: post
title: "A taste of DOM manipulation"
description: "Some commonly used javascript utilities to manipulate the Document Object Model."
date: 2024-01-12
category: development
comments: false
---

## What is DOM?

DOM stands for Document Object Model which is an interface for interacting with elements on a webpage.

One can use `javascript` to manipulate the DOM, in effect making changes to the elements that are present in a `document` object which is the root of all elements in an `HTML` page.

So, before we look at actually manipulating the DOM, let's see how to select elements from the DOM.

## Selecting Elements in the DOM

One can use the following methods to select an element or a group of elements from the DOM
- We can use the `getElementById()` method to select a DOM element by its ID.
- The `getElementsByClassName()` is used to select elements using their `CSS` class name.
- The `getElementsByTagName()` method is used to select elements using their `HTML` tag name.
- To select an element using their tag, class or ID, we can use the `querySelector()` method. It returns the first element that matches the selector that we pass as an argument to the method.
- To select all the elements using their tag, class or Id, we can use the `querySelectorAll()` method which returns all the elements that match the selector that we pass as an argument to the method.

Now, let's see how we can traverse the DOM using certain properties that can be applied to elements.

## Traversing the DOM

Everything in an `HTML` document is a node and the text inside the nodes are text nodes.

We can use the following properties to traverse through the document:
- `parentNode`: For example, `element.parentNode` returns the element's parent node.
- `childrenNodes`: Returns an element's children nodes.
- `firstElementChild`: Returns the first child of the element.
- `lastElementChild`: Returns the last child of the element.
- `nextElementSibling`: Returns the next element that is a sibling of the current element.
- `previousElementSibling`: Returns the previous element that is a sibling of the current element.

Finally, we can have a look at some methods we can use to manipulate the DOM

## Manipulating the DOM

We can manipulate the DOM in the following ways:
- Creaing elements
- Setting text content or inner HTML of an element
- Appending an element
- Inserting one element before another
- Replacing a child element
- Removing a child element

Let's have a look at them one by one.

### Creating Elements

```javascript
const element = document.createElement('div');
```

### Setting Inner HTML

```javascript
const el = document.createElement('div');
el.innerHTML = 'Hello World!';
```

### Appending an Element

```javascript
const divEl = document.createElement('div');
divEl.innerHTML = 'Hello World!';
const parentEl = document.getElementById('parent');
parentEl.appendChild(divEl);
```

### Inserting One Element Before Another

```javascript
const parentEl = document.getElementById('parent');
const firstChildEl = document.getElementById('first-child');
const divEl = document.createElement('div');
divEl.innerHTML = 'I am a React developer';
parentEl.insertBefore(divEl, firstChildEl);
```

### Replacing a Child Element

```javascript
const parentEl = document.getElementById('parent');
const firstChildEl = document.getElementById('first-child');
const divEl = document.createElement('div');
divEl.innerHTML = 'I am a React developer';
parentEl.replaceChild(divEl, firstChildEl);
```

### Removing a Child Element

```javascript
const parentEl = document.getElementById('parent');
const firstChildEl = document.getElementById('first-child');
parentEl.removeChild(firstChildEl);
```

For a detailed explanation of the topics discussed above, visit Chibuike Okere's (post)[https://www.freecodecamp.org/news/how-to-manipulate-the-dom-beginners-guide/].

## An Example (Creating a Nested DOM Structure)

```javascript
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "Hello World!";

document.body.appendChild(fragment);
```

The above code will generate the following DOM tree:

```HTML
<section>
  <ul>
    <li>Hello World!</li>
  </ul>
</section>
```