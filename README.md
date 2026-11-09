# FrameLab
Transform ordinary photos into extraordinary visuals. Create text-behind-image designs easily.
Make Your Text Stand Behind the Subject.

Framelab is a free, browser-based text-behind-image editor that transforms ordinary photographs into eye-catching editorial-style designs. Upload an image, automatically remove its background, customize typography, and create professional compositions — all directly in your browser.

🌐 Live Website: https://framelab.rf.gd/

✨ Features

Image Upload – Upload JPG, PNG, and WebP images.

AI Background Removal – Automatically separate the main subject from the background using browser-based processing.

Creative Typography – Customize text using a collection of Google Fonts.

Text Customization – Adjust font size, weight, color, spacing, opacity, rotation, and position.

Multiple Text Layers – Add, duplicate, and manage multiple text sets.

Live Preview – See your changes instantly.

High-Resolution Export – Download your final composition as a PNG at the original image resolution.

Light & Dark Themes – Choose your preferred editing environment.

Privacy Focused – Images are processed locally in the browser without uploading them to an application server.

🖼️ How It Works

Upload an Image – Select a JPG, PNG, or WebP photograph.

Remove Background – Let the background-removal engine extract the foreground subject.

Customize Text – Add text and adjust its typography, color, position, and effects.

Create the Effect – Framelab places text between the original image and the extracted subject.

Export – Download your finished design as a high-resolution PNG.

🛠️ Built With
## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Application functionality |
| Canvas 2D API | Image compositing and rendering |
| @imgly/background-removal | AI-powered background removal |
| Google Fonts | Typography customization |

⚙️ Getting Started

Run Locally

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate to the project folder:

cd framelab

Open index.html in your browser.

Alternatively, use the VS Code Live Server extension.

Note: An internet connection may be required to load the background-removal library, its model assets, and Google Fonts.

📁 Project Structure

framelab/
│
├── index.html
└── README.md

The project uses a single self-contained HTML file containing the application's HTML, CSS, and JavaScript.

🔒 Privacy

Framelab is designed with a local-first approach.

No user accounts required.

No application-server image uploads.

No cloud-based image storage.

Image editing and canvas compositing happen in the browser.

External resources, including the background-removal library and Google Fonts, may require network access.

🚀 Future Improvements

More advanced text effects and styling.

Ready-made creative templates.

Undo and redo functionality.

Additional export options.

Improved mobile editing experience.

Save and reopen editable projects.
