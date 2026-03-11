import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { RECIPES, type Recipe } from '../data/mealData';

function RecipeModal({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'flex-end',
      }}
      onClick={onClose}
      className="animate-fade-in"
    >
      <div
        style={{
          background: 'white',
          borderRadius: '24px 24px 0 0',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
        className="animate-slide-up"
      >
        {/* Modal header */}
        <div
          style={{
            padding: '20px 20px 16px',
            borderBottom: '1px solid #F0F4F0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '36px' }}>{recipe.emoji}</span>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                margin: 0,
                fontSize: '18px',
                fontFamily: 'Poppins, Inter, sans-serif',
                fontWeight: 700,
                color: '#1B2D1E',
              }}
            >
              {recipe.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F5F5F5',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Fechar receita"
          >
            <X size={18} style={{ color: '#5A7A5C' }} />
          </button>
        </div>

        {/* Modal content */}
        <div style={{ overflow: 'auto', padding: '16px 20px 40px' }}>
          {/* Ingredients */}
          <div style={{ marginBottom: '20px' }}>
            <h3
              style={{
                margin: '0 0 12px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#4CAF50',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              🛒 Ingredientes
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {recipe.ingredients.map((ing, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '8px 0',
                    borderBottom: idx < recipe.ingredients.length - 1 ? '1px solid #F0F4F0' : 'none',
                    fontSize: '14px',
                    color: '#1B2D1E',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      background: '#E8F5E9',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      color: '#4CAF50',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    {idx + 1}
                  </span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3
              style={{
                margin: '0 0 12px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#4CAF50',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              👩‍🍳 Modo de Preparo
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: '#1B2D1E',
                lineHeight: 1.7,
                background: '#F9FBF9',
                padding: '14px 16px',
                borderRadius: '12px',
              }}
            >
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipe, onClick }: { recipe: Recipe; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'white',
        borderRadius: '18px',
        padding: '20px 16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
        border: '1px solid transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        transition: 'all 0.15s ease',
        width: '100%',
      }}
      aria-label={`Ver receita: ${recipe.name}`}
      className="touch-feedback"
    >
      <span style={{ fontSize: '40px', marginBottom: '10px' }}>{recipe.emoji}</span>
      <p
        style={{
          margin: 0,
          fontSize: '14px',
          fontWeight: 700,
          color: '#1B2D1E',
          lineHeight: 1.3,
          marginBottom: '10px',
          flex: 1,
        }}
      >
        {recipe.name}
      </p>
      <span
        style={{
          background: '#E8F5E9',
          color: '#4CAF50',
          fontSize: '11px',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '20px',
        }}
      >
        Ver receita →
      </span>
    </button>
  );
}

export function RecipesView() {
  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filtered = RECIPES.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div style={{ padding: '24px 20px 16px' }}>
        <h1
          style={{
            margin: 0,
            fontSize: '24px',
            fontFamily: 'Poppins, Inter, sans-serif',
            fontWeight: 700,
            color: '#1B2D1E',
          }}
        >
          📖 Receitas
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#5A7A5C' }}>
          {RECIPES.length} receitas saudáveis para você
        </p>
      </div>

      {/* Search */}
      <div style={{ padding: '0 16px 16px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'white',
            borderRadius: '14px',
            padding: '10px 14px',
            border: '1.5px solid #E0EDE0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <Search size={18} style={{ color: '#9E9E9E', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Buscar receita..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '14px',
              color: '#1B2D1E',
              background: 'transparent',
            }}
            aria-label="Buscar receita"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
              aria-label="Limpar busca"
            >
              <X size={16} style={{ color: '#9E9E9E' }} />
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          padding: '0 16px',
          paddingBottom: '100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
        }}
      >
        {filtered.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
        {filtered.length === 0 && (
          <div
            style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '40px 20px',
              color: '#9E9E9E',
              fontSize: '14px',
            }}
          >
            <p style={{ fontSize: '36px', marginBottom: '10px' }}>🔍</p>
            Nenhuma receita encontrada
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}
