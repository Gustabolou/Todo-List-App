# todo-list-app

This is a simple and functional Todo-List project, built with **HTML**, **CSS** e **JavaScript**. It allows you to add, mark as completed, and remove tasks, with data persistence using `localStorage`.

## Technologies Used
- **HTML5**
- **CSS3** (Responsive Design)
- **JavaScript** (DOM Manipulation and localStorage)

## Features
✅ Add new tasks
✅ Mark tasks as completed
✅ Remove tasks
✅ Automatically save tasks in `localStorage`

## How to Run the Project
1. Clone this repository:
```bash
git clone https://github.com/Gustabolou/todo-list-app.git
```
2. Navigate to the project directory:
```bash
cd todo-list-app
```
3. Open the `index.html` file directly in your browser.

## File Structure
```
.
├── index.html
├── src
│   ├── style.css
│   ├── script.js
│   └── images
│       ├── icon.png
│       ├── unchecked.png
│       └── checked.png
```

## Code Explanation
### HTML (`index.html`)
- Main structure of the application.
- Contains the input field for new tasks and the task list.

### CSS (`style.css`)
- Responsive styling with an elegant, modern layout.
- Uses a gradient for the background and a white card to highlight the content.

### JavaScript (`script.js`)
- **`addTask()`**: Adds a new task to the list. If the input field is empty, an alert message is displayed.
- **`saveData()`**: Saves tasks to `localStorage` to preserve data even after the page is reloaded.
- **`displayTask()`**: Displays the saved tasks when the app starts.
- **Event Listener**: Allows you to mark a task as completed or remove it.

## Future Improvements
🚀 Add a filter to view only pending or completed tasks.
🚀 Allow direct task editing.
🚀 Implement light and dark themes.

## Autor
- [Luís Gustavo](https://github.com/Gustabolou)
