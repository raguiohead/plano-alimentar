import { useState } from 'react';
import './index.css';
import { BottomNav } from './components/BottomNav';
import { TodayView } from './components/TodayView';
import { MealsView } from './components/MealsView';
import { RecipesView } from './components/RecipesView';
import { ShoppingView } from './components/ShoppingView';
import { TipsView } from './components/TipsView';
import { useLocalStorage, useGreeting } from './hooks/useLocalStorage';
import { SHOPPING_CATEGORIES } from './data/mealData';

type TabId = 'today' | 'meals' | 'recipes' | 'shopping' | 'tips';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('today');
  const greeting = useGreeting('Gui');

  // Persist selected meal options across sessions
  const [selectedOptions, setSelectedOptions] = useLocalStorage<Record<string, string>>(
    'plano-alimentar__selectedOptions',
    {}
  );

  // Persist completed meals (reset daily via date key)
  const todayKey = new Date().toISOString().slice(0, 10);
  const [completedMealsRaw, setCompletedMealsRaw] = useLocalStorage<
    Record<string, Record<string, boolean>>
  >('plano-alimentar__completedMeals', {});

  const completedMeals = completedMealsRaw[todayKey] ?? {};

  const toggleMeal = (mealId: string) => {
    setCompletedMealsRaw((prev) => ({
      ...prev,
      [todayKey]: {
        ...(prev[todayKey] ?? {}),
        [mealId]: !completedMeals[mealId],
      },
    }));
  };

  const selectOption = (mealId: string, optionId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [mealId]: optionId }));
  };

  // Shopping list
  const [checkedItems, setCheckedItems] = useLocalStorage<Record<string, boolean>>(
    'plano-alimentar__shopping',
    {}
  );

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearAll = () => {
    setCheckedItems({});
  };

  const markAll = () => {
    const all: Record<string, boolean> = {};
    SHOPPING_CATEGORIES.forEach((cat) => {
      cat.items.forEach((item) => {
        all[`${cat.id}__${item}`] = true;
      });
    });
    setCheckedItems(all);
  };

  const renderView = () => {
    switch (activeTab) {
      case 'today':
        return (
          <TodayView
            selectedOptions={selectedOptions}
            completedMeals={completedMeals}
            onToggleMeal={toggleMeal}
            onGoToMeals={() => setActiveTab('meals')}
            greeting={greeting}
          />
        );
      case 'meals':
        return (
          <MealsView
            selectedOptions={selectedOptions}
            onSelectOption={selectOption}
          />
        );
      case 'recipes':
        return <RecipesView />;
      case 'shopping':
        return (
          <ShoppingView
            checkedItems={checkedItems}
            onToggleItem={toggleItem}
            onClearAll={clearAll}
            onResetAll={markAll}
          />
        );
      case 'tips':
        return <TipsView />;
    }
  };

  return (
    <div
      style={{
        maxWidth: '480px',
        margin: '0 auto',
        height: '100%',
        position: 'relative',
        background: '#F9FBF9',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Scrollable content area */}
      <main
        id="main-content"
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: '64px',
          WebkitOverflowScrolling: 'touch',
        }}
        aria-label="Conteúdo principal"
      >
        {renderView()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as TabId)}
      />
    </div>
  );
}

export default App;
