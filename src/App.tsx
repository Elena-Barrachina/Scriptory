import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUIStore } from '@/stores/uiStore';
import { Layout } from '@/components/Layout';
import { WritingPad } from '@/pages/WritingPad';
import { Library } from '@/pages/Library';
import { FamilyTree } from '@/pages/FamilyTree';
import { Settings } from '@/pages/Settings';
import { Home } from '@/pages/Home';

function App() {
  const { section } = useUIStore();

  const renderSection = () => {
    switch (section) {
      case 'write':
        return <WritingPad />;
      case 'library':
        return <Library />;
      case 'tree':
        return <FamilyTree />;
      case 'settings':
        return <Settings />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderSection()}
    </Layout>
  );
}

function LastVisited() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      localStorage.setItem('lastVisited', location.pathname);
    }
  }, [location]);

  return null;
}

export default App;
