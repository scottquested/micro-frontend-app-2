import App from 'App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('micro-frontend-app-1');

if (container) {
  const root = createRoot(container);

  root.render(<App />);
}
