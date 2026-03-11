import { Home, UtensilsCrossed, BookOpen, ShoppingCart, Lightbulb } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'today', label: 'Hoje', icon: Home },
  { id: 'meals', label: 'Refeições', icon: UtensilsCrossed },
  { id: 'recipes', label: 'Receitas', icon: BookOpen },
  { id: 'shopping', label: 'Compras', icon: ShoppingCart },
  { id: 'tips', label: 'Dicas', icon: Lightbulb },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      aria-label="Navegação principal"
      style={{
        background: 'white',
        borderTop: '1px solid #E0EDE0',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <div className="flex items-center justify-around px-1 pb-safe" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className="flex flex-col items-center justify-center touch-feedback"
              style={{
                minWidth: '44px',
                minHeight: '56px',
                padding: '8px 12px',
                borderRadius: '12px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flex: 1,
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '16px',
                  background: isActive ? '#E8F5E9' : 'transparent',
                  transition: 'all 0.2s ease',
                  marginBottom: '2px',
                }}
              >
                <Icon
                  size={20}
                  style={{
                    color: isActive ? '#4CAF50' : '#5A7A5C',
                    transition: 'color 0.2s ease',
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#4CAF50' : '#5A7A5C',
                  transition: 'color 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
