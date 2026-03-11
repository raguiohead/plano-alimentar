import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import { MEALS } from '../data/mealData';

interface TodayViewProps {
  selectedOptions: Record<string, string>;
  completedMeals: Record<string, boolean>;
  onToggleMeal: (mealId: string) => void;
  onGoToMeals: () => void;
  greeting: string;
}

export function TodayView({
  selectedOptions,
  completedMeals,
  onToggleMeal,
  onGoToMeals,
  greeting,
}: TodayViewProps) {
  const completedCount = Object.values(completedMeals).filter(Boolean).length;
  const totalMeals = MEALS.length;
  const progressPct = (completedCount / totalMeals) * 100;

  const getMealOptionLabel = (mealId: string) => {
    const meal = MEALS.find((m) => m.id === mealId);
    const optionId = selectedOptions[mealId];
    if (!meal || !optionId) return null;
    const opt = meal.options.find((o) => o.id === optionId);
    return opt?.label ?? null;
  };

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
          padding: '24px 20px 32px',
          borderRadius: '0 0 28px 28px',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '4px' }}>
          Plano Alimentar Personalizado
        </p>
        <h1
          style={{
            color: 'white',
            fontSize: '24px',
            fontFamily: 'Poppins, Inter, sans-serif',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {greeting}
        </h1>

        {/* Progress */}
        <div
          style={{
            marginTop: '20px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <span style={{ color: 'white', fontSize: '13px', fontWeight: 600 }}>
              Refeições do dia
            </span>
            <span style={{ color: 'white', fontSize: '20px', fontWeight: 700 }}>
              {completedCount}/{totalMeals}
            </span>
          </div>
          <div
            style={{
              height: '8px',
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progressPct}%`,
                background: 'white',
                borderRadius: '4px',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
          {completedCount === totalMeals && (
            <p style={{ color: 'white', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>
              🎉 Parabéns! Todas as refeições concluídas!
            </p>
          )}
        </div>
      </div>

      {/* Water reminder */}
      <div
        style={{
          margin: '16px 16px 0',
          padding: '14px 16px',
          background: '#E3F2FD',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid #BBDEFB',
        }}
      >
        <span style={{ fontSize: '22px' }}>💧</span>
        <p style={{ margin: 0, fontSize: '13px', color: '#1565C0', fontWeight: 500, lineHeight: 1.4 }}>
          Não esqueça de levar sua garrafinha de água!
        </p>
      </div>

      {/* Pre-workout banner */}
      <div
        style={{
          margin: '12px 16px 0',
          padding: '14px 16px',
          background: '#FFF3E0',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          border: '1px solid #FFE0B2',
        }}
      >
        <span style={{ fontSize: '22px' }}>🏃</span>
        <div>
          <p style={{ margin: 0, fontSize: '13px', color: '#E65100', fontWeight: 600 }}>
            Dia de corrida?
          </p>
          <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#BF360C', lineHeight: 1.4 }}>
            Consuma rapadura (20g) ou 1 banana antes do treino!
          </p>
        </div>
      </div>

      {/* Meal list */}
      <div style={{ padding: '16px 16px 0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#1B2D1E' }}>
            Refeições de hoje
          </h2>
          <button
            onClick={onGoToMeals}
            style={{
              background: 'none',
              border: 'none',
              color: '#4CAF50',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              padding: '4px 8px',
            }}
            aria-label="Ver todas as refeições"
          >
            Ver todas
            <ChevronRight size={14} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '100px' }}>
          {MEALS.map((meal) => {
            const isDone = completedMeals[meal.id];
            const selectedLabel = getMealOptionLabel(meal.id);

            return (
              <div
                key={meal.id}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: isDone ? '1px solid #A5D6A7' : '1px solid transparent',
                  opacity: isDone ? 0.8 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{meal.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      fontWeight: 700,
                      color: isDone ? '#5A7A5C' : '#1B2D1E',
                      textDecoration: isDone ? 'line-through' : 'none',
                    }}
                  >
                    {meal.label}
                  </p>
                  <p
                    style={{
                      margin: '2px 0 0',
                      fontSize: '12px',
                      color: selectedLabel ? '#5A7A5C' : '#9E9E9E',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {selectedLabel ?? 'Nenhuma opção selecionada'}
                  </p>
                </div>
                <button
                  onClick={() => onToggleMeal(meal.id)}
                  aria-label={`Marcar ${meal.label} como ${isDone ? 'pendente' : 'concluída'}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {isDone ? (
                    <CheckCircle2 size={28} style={{ color: '#4CAF50' }} />
                  ) : (
                    <Circle size={28} style={{ color: '#C8E6C9' }} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
