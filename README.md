# Contacts Dial Pad

A contacts search application with a dial pad interface built with **React + Vite + Tailwind CSS**.

## Setup & Running

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in Chrome.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Features

- **Dial pad** — click buttons or use keyboard (digits, `*`, `#`, `Backspace`)
- **Search by name** — T9-style: each digit maps to its phone letters (e.g. `862` → T/U/V, M/N/O, A/B/C → matches "Tobias", "Toby", "Uncle Mike")
- **Search by number** — filters contacts whose phone number contains the entered digit sequence
- **Toggle** — switch between name/number mode with the toggle; clears input on switch
- **Scrollable list** — contact list scrolls when results exceed visible area
- **Avatar fallback** — colored circle with initials when no contact image is available
- **Montserrat font** — loaded via Google Fonts
- **Gradient background** — uses `#251285`, `#3d5afe`, `#04e7e7`

## Adding Contact Images

Place image files in `public/images/` and update `public/contacts.json` with the image path:

```json
{ "id": 1, "name": "Angie", "phone": "862-847-9392", "image": "/images/angie.jpg" }
```

## Project Structure

```
contacts-dialpad/
├── public/
│   └── contacts.json       # Contact data
├── src/
│   ├── components/
│   │   └── DeleteIcon.jsx  # Backspace SVG icon
│   ├── App.jsx             # Main application
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind + global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
