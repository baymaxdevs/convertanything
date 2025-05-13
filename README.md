# ConvertAnything

A modern, responsive web application for converting files between various formats. ConvertAnything provides a simple and intuitive interface for users to convert images, videos, documents, ebooks, audio files, and archives.

![ConvertAnything Logo](frontend/public/logo192.png)

## Features

- **Multiple Format Support**: Convert between 100+ file formats
- **User-Friendly Interface**: Clean, responsive design that works on all devices
- **Cloud Processing**: All conversions happen in the cloud - no local software needed
- **Secure**: Files are automatically deleted after conversion
- **Free to Use**: All basic conversions are completely free

## Tech Stack

- **Frontend**: React.js with Material-UI
- **Backend**: Node.js with Express
- **Cloud Services**: Firebase (Hosting, Functions, Storage)
- **Conversion Engine**: Custom API deployed on Google Cloud Run

## Project Structure

```
ConvertAnything/
├── frontend/             # React frontend application
│   ├── public/           # Static files
│   ├── src/              # Source code
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── theme/        # Theme configuration
│   │   ├── utils/        # Utility functions
│   │   └── App.js        # Main application component
│   └── package.json      # Frontend dependencies
├── functions/            # Firebase Cloud Functions
│   ├── src/              # Source code
│   │   ├── api/          # API endpoints
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   └── package.json      # Backend dependencies
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI
- Google Cloud SDK (optional, for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/baymaxdevs/convertanything.git
   cd convertanything
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../functions
   npm install
   ```

### Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)

2. Create a `.env` file in the `frontend` directory with the following variables (replace with your own values):
   ```
   REACT_APP_API_URL=your_api_url
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase login
   firebase init
   ```

### Running Locally

1. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

2. Start the Firebase emulators for local development:
   ```bash
   cd functions
   npm run serve
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Frontend Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Firebase Hosting:
   ```bash
   firebase deploy --only hosting
   ```

### Backend Deployment

1. Deploy Firebase Functions:
   ```bash
   firebase deploy --only functions
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

BaymaxDevs - iamsharadh7@gmail.com

Project Link: [https://github.com/baymaxdevs/convertanything](https://github.com/baymaxdevs/convertanything)

## Acknowledgements

- [Material-UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)
- [Google Cloud Run](https://cloud.google.com/run)
