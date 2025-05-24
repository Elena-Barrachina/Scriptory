import { useEffect } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { Layout } from '@/components/Layout';
import { Banner } from '@/components/ui/Banner';

function App() {
  const { section, setSection } = useUIStore();

  const lastVisited = localStorage.getItem('lastVisited');

  useEffect(() => {
    if (section !== 'home') {
      localStorage.setItem('lastVisited', section);
    }
  }, [section]);

  return (
    <Layout>
      {section === 'home' && (
        <Banner
          lastSection={lastVisited}
          onNavigate={(section) => setSection(section as any)}
        />
      )}
    </Layout>
  );
}

export default App;