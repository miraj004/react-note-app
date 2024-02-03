# React Note App

This is a simple note-taking application built using React and Tailwind CSS, and powered by Vite. The app allows users to create, sync, and manage notes with ease.

## Features

1. **Sync Notes with localStorage:**
    - The app automatically syncs notes with the browser's `localStorage`, ensuring that your notes are preserved even if you close the application or refresh the page.

2. **Add Note Summary Titles:**
    - Each note includes a summary title, making it easy to quickly identify the content of each note in the list.

3. **Move Modified Notes to the Top:**
    - Modified notes are automatically moved to the top of the list, providing a quick reference to recently updated or accessed notes.

4. **Delete Notes:**
    - Easily delete unwanted notes with the built-in delete functionality. Confirmations are provided to avoid accidental deletions.

## Technologies Used

- **React:**
    - A JavaScript library for building user interfaces. Components and state management are utilized to create a dynamic and interactive UI.

- **Tailwind CSS:**
    - A utility-first CSS framework used for styling the application. Tailwind's utility classes provide a flexible and efficient way to style components.

- **Vite:**
    - A fast and opinionated web development build tool that serves as the project's build and development environment.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/miraj004/react-note-app.git
   ```

2. Install dependencies:
   ```bash
   cd react-note-app
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the app.

## Usage

- Create a new note by clicking the "New Note" button.
- Edit and save notes. Modified notes will appear at the top of the list.
- Delete notes by clicking the delete button next to each note.

## Contributions

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.