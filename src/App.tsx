import { useEffect } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { Layout } from '@/components/Layout';
import { Banner } from '@/components/ui/Banner';
import { WritingPad } from '@/pages/WritingPad';
import { Library } from '@/pages/Library';
import { FamilyTree } from '@/pages/FamilyTree';
import { Settings } from '@/pages/Settings';
import { Home } from '@/pages/Home';

const sectionToComponentMap: Record<string, React.ReactNode> = {
  write: <WritingPad />,
  library: <Library />,
  tree: <FamilyTree />,
  settings: <Settings />,
  home: <Home />,
};

function App() {
  const { section, setSection } = useUIStore();

  const lastVisited = localStorage.getItem('lastVisited');

  useEffect(() => {
    if (section && section !== 'home') {
      localStorage.setItem('lastVisited', section);
    }
  }, [section]);

  const currentComponent = sectionToComponentMap[section] ?? <Home />;

  return (
    <Layout>
      {currentComponent}
      {section === 'home' && (
        <Banner
          lastSection={lastVisited && lastVisited !== 'home' ? lastVisited : null}
          onNavigate={(s) => setSection(s as any)}
        />
      )}
    </Layout>
  );
}

export default App;