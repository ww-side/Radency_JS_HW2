# Radency_JS_HW2

Link - https://radency-js-hw2.netlify.app/

- React
- TypeScript
- Redux Toolkit
- Tailwind
- animate.css

![Pic](https://images2.imgbox.com/7b/39/4mKXNnxQ_o.png)

### Categories
Categories are predefined: “Task”, “Random Thought”, “Idea” and "Quote". 
They can be set and changed.
![Pic](https://images2.imgbox.com/80/b6/1E5y6nOX_o.png)

### Dates
Notes in the table also display a list of dates mentioned in this note 
as a separate column. The user can change the date in the Edit window 
and the new date will appear in the Dates column.
![Pic](https://images2.imgbox.com/71/6d/Ewqv6xDq_o.png)

### Archive and summary table
There is a summary table that counts notes by category: separately 
for active and archived notes. Users can archive notes. Archived 
notes are not shown in the notes list. Users can view archived notes 
and unarchive them.
![Pic](https://images2.imgbox.com/10/fb/BNkaxy28_o.png)

### Add a new note
Users can add a new note by pressing Add a new note.
![Pic](https://images2.imgbox.com/aa/0f/kmYcnDI4_o.png)

### Edit the note
User can edit selected note.
![Pic](https://images2.imgbox.com/bb/e2/Ort1lPay_o.png)

### Error page
If the user tries to go to another page, they will be greeted by this page.
![Pic](https://images2.imgbox.com/3c/d1/Uo4PQvUj_o.png)

### Task text
1. Your task is to rewrite the existing notes app using React.js, Redux (or Redux Toolkit) and TypeScript. 
2. All the functionality should be the same - users can add, edit and remove notes, archive and unarchive them.
3. Store data in the redux store. Prepopulate it with 7 notes and use it by default as an initial state so that they are shown when the page is reloaded. 
4. Aim to structure components properly (container, page, component), reuse components, and reflect the apps component hierarchy:
https://dev.to/admantium/structuring-react-components-n6g
5. Bonus task: Tables for “List of notes” and “Summary” should use the same table component.

The goal of the task is to let you get better acquainted with React.js and Redux. If you don’t know some of the APIs needed for the task, you might use these resources as references:
https://reactjs.org/docs/getting-started.html
https://redux.js.org/api/api-reference

While working on your task you should utilize all of the following:
1. React
   - Functional (a.k.a. stateless) component
   - React Hooks
2. Redux
   - Use Action Creators, write meaningful action names
   - Keep the immutability and readability of your reducers
   - Do not transform your store data in the components
   - Use the Redux DevTools Extension for Debugging

To set up the basic React app structure use Create React App:
https://reactjs.org/docs/create-a-new-react-app.html

Using template “typescript”:
npx create-react-app my-app --template typescript

Or use the following guide:
https://create-react-app.dev/docs/adding-typescript


To connect the Redux library use Redux Core or Redux Toolkit (which is not recommended for beginners):
https://redux.js.org/introduction/getting-started


Or, as a basic boilerplate use the following repo:
https://github.com/yogeshdatir/React-Notes-and-Collections/tree/master/Redux/redux-boiler-plate/src/components

Use the following guide for writing the application using the best practices:
https://redux.js.org/style-guide/style-guide
