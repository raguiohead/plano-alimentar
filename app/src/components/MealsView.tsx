import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { MEALS, type Meal, type MealOption } from '../data/mealData';

interface MealsViewProps {
  selectedOptions: Record<string, string>;
  onSelectOption: (mealId: string, optionId: string) => void;
}

function IngredientList({ ingredients }: { ingredients: MealOption['ingredients'] }) {
  return (
    <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none' }}>
      {ingredients.map((ing, idx) => (
        <li
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            padding: '6px 0',
            borderBottom: idx < ingredients.length - 1 ? '1px solid #F0F4F0' : 'none',
          }}
        >
          <span style={{ color: '#4CAF50', marginTop: '2px', flexShrink: 0 }}>•</span>
          <span style={{ flex: 1, fontSize: '13px', color: '#1B2D1E', lineHeight: 1.5 }}>
            <strong>{ing.item}</strong>
            {ing.quantity && (
              <span style={{ color: '#5A7A5C' }}> — {ing.quantity}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MealOptionCard({
  option,
  isSelected,
  onSelect,
}: {
  option: MealOption;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [expanded, setExpanded] = useState(isSelected);

  return (
    <div
      style={{
        border: isSelected ? '2px solid #4CAF50' : '1.5px solid #E0EDE0',
        borderRadius: '14px',
        overflow: 'hidden',
        marginBottom: '10px',
        background: isSelected ? '#F1F8E9' : 'white',
        transition: 'all 0.2s ease',
      }}
    >
      <button
        onClick={() => setExpanded((e) => !e)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          textAlign: 'left',
        }}
        aria-expanded={expanded}
        aria-label={`${option.label} — ${expanded ? 'recolher' : 'expandir'}`}
      >
        <span
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: isSelected ? '#2E7D32' : '#1B2D1E',
            flex: 1,
          }}
        >
          {option.label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {isSelected && (
            <span
              style={{
                background: '#4CAF50',
                color: 'white',
                borderRadius: '20px',
                padding: '2px 10px',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              ✓ Selecionada
            </span>
          )}
          {expanded ? (
            <ChevronUp size={18} style={{ color: '#5A7A5C' }} />
          ) : (
            <ChevronDown size={18} style={{ color: '#5A7A5C' }} />
          )}
        </div>
      </button>

      {expanded && (
        <div style={{ padding: '0 16px 16px', animationDuration: '0.2s' }} className="animate-fade-in">
          <IngredientList ingredients={option.ingredients} />
          {option.note && (
            <div
              style={{
                marginTop: '10px',
                padding: '10px 12px',
                background: '#FFF8E1',
                borderRadius: '10px',
                fontSize: '12px',
                color: '#E65100',
                lineHeight: 1.4,
              }}
            >
              {option.note}
            </div>
          )}
          <button
            onClick={onSelect}
            style={{
              marginTop: '14px',
              width: '100%',
              padding: '12px',
              background: isSelected ? '#E8F5E9' : '#4CAF50',
              color: isSelected ? '#4CAF50' : 'white',
              border: isSelected ? '2px solid #4CAF50' : 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.15s ease',
              minHeight: '44px',
            }}
            aria-label={isSelected ? 'Opção já selecionada' : `Selecionar ${option.label}`}
          >
            {isSelected ? (
              <>
                <Check size={16} />
                Selecionada para hoje
              </>
            ) : (
              'Selecionar para hoje'
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function MealSection({
  meal,
  selectedOptionId,
  onSelectOption,
}: {
  meal: Meal;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '18px',
        marginBottom: '14px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '16px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'left',
        }}
        aria-expanded={open}
        aria-label={`${meal.label} — ${open ? 'fechar' : 'abrir'}`}
      >
        <span style={{ fontSize: '26px' }}>{meal.emoji}</span>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#1B2D1E' }}>
            {meal.label}
          </p>
          {selectedOptionId && (
            <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#4CAF50', fontWeight: 600 }}>
              {meal.options.find((o) => o.id === selectedOptionId)?.label ?? ''}
            </p>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: '11px',
              color: '#9E9E9E',
              fontWeight: 500,
            }}
          >
            {meal.options.length} opções
          </span>
          {open ? (
            <ChevronUp size={20} style={{ color: '#5A7A5C' }} />
          ) : (
            <ChevronDown size={20} style={{ color: '#5A7A5C' }} />
          )}
        </div>
      </button>

      {open && (
        <div style={{ padding: '0 16px 16px' }} className="animate-fade-in">
          {meal.tip && (
            <div
              style={{
                padding: '12px 14px',
                background: '#F1F8E9',
                borderRadius: '12px',
                marginBottom: '14px',
                fontSize: '12px',
                color: '#2E7D32',
                lineHeight: 1.5,
                border: '1px solid #C8E6C9',
              }}
            >
              💡 {meal.tip}
            </div>
          )}

          {meal.options.map((option) => (
            <MealOptionCard
              key={option.id}
              option={option}
              isSelected={selectedOptionId === option.id}
              onSelect={() => onSelectOption(option.id)}
            />
          ))}

          {meal.extras && meal.extras.length > 0 && (
            <div
              style={{
                padding: '12px 14px',
                background: '#FFF3E0',
                borderRadius: '12px',
                marginTop: '4px',
                border: '1px solid #FFE0B2',
              }}
            >
              {meal.extras.map((line, idx) => (
                <p
                  key={idx}
                  style={{
                    margin: idx === 0 ? 0 : '4px 0 0',
                    fontSize: '12px',
                    color: '#E65100',
                    lineHeight: 1.5,
                    fontWeight: idx === 0 ? 600 : 400,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function MealsView({ selectedOptions, onSelectOption }: MealsViewProps) {
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
          🍽️ Refeições
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#5A7A5C' }}>
          Selecione suas opções preferidas para hoje
        </p>
      </div>

      <div style={{ padding: '0 16px', paddingBottom: '100px' }}>
        {MEALS.map((meal) => (
          <MealSection
            key={meal.id}
            meal={meal}
            selectedOptionId={selectedOptions[meal.id]}
            onSelectOption={(optionId) => onSelectOption(meal.id, optionId)}
          />
        ))}
      </div>
    </div>
  );
}
