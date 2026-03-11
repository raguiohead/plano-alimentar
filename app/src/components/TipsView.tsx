import { TIPS } from '../data/mealData';

export function TipsView() {
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
          💡 Dicas & Bem-Estar
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#5A7A5C' }}>
          Hábitos saudáveis para o seu dia a dia
        </p>
      </div>

      <div style={{ padding: '0 16px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {TIPS.map((tip) => (
          <div
            key={tip.id}
            style={{
              background: 'white',
              borderRadius: '18px',
              padding: '18px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  flexShrink: 0,
                }}
              >
                {tip.emoji}
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#1B2D1E',
                  lineHeight: 1.3,
                }}
              >
                {tip.title}
              </h2>
            </div>

            <p
              style={{
                margin: '0 0 12px',
                fontSize: '13px',
                color: '#5A7A5C',
                lineHeight: 1.6,
              }}
            >
              {tip.content}
            </p>

            {/* Item list */}
            {tip.items && (
              <div
                style={{
                  background: '#F9FBF9',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  marginBottom: tip.recipe ? '12px' : 0,
                }}
              >
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {tip.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        padding: '4px 0',
                        fontSize: '13px',
                        color: '#1B2D1E',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: '#4CAF50', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recipe section */}
            {tip.recipe && (
              <div>
                <div
                  style={{
                    background: '#F1F8E9',
                    borderRadius: '12px',
                    padding: '14px',
                    border: '1px solid #C8E6C9',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 10px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#2E7D32',
                    }}
                  >
                    🛒 Ingredientes:
                  </p>
                  <ul style={{ margin: '0 0 12px', padding: 0, listStyle: 'none' }}>
                    {tip.recipe.ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          gap: '8px',
                          padding: '3px 0',
                          fontSize: '13px',
                          color: '#1B2D1E',
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: '#4CAF50', flexShrink: 0 }}>•</span>
                        {ing}
                      </li>
                    ))}
                  </ul>

                  <p
                    style={{
                      margin: '0 0 8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#2E7D32',
                    }}
                  >
                    👩‍🍳 Preparo:
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '13px',
                      color: '#1B2D1E',
                      lineHeight: 1.6,
                    }}
                  >
                    {tip.recipe.instructions}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer attribution */}
        <div
          style={{
            background: '#F9FBF9',
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center',
            border: '1px solid #E0EDE0',
          }}
        >
          <p style={{ margin: 0, fontSize: '12px', color: '#9E9E9E', lineHeight: 1.6 }}>
            Plano Alimentar Personalizado
          </p>
          <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#5A7A5C', fontWeight: 600 }}>
            Nutricionista Adla Torres — Unimed Ceará
          </p>
          <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#9E9E9E' }}>
            Guilherme Pereira Alves · Janeiro 2026
          </p>
        </div>
      </div>
    </div>
  );
}
