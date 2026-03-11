
import { Share2, Trash2, RotateCcw, CheckSquare, Square } from 'lucide-react';
import { SHOPPING_CATEGORIES } from '../data/mealData';


interface ShoppingViewProps {
  checkedItems: Record<string, boolean>;
  onToggleItem: (key: string) => void;
  onClearAll: () => void;
  onResetAll: () => void;
}

export function ShoppingView({ checkedItems, onToggleItem, onClearAll, onResetAll }: ShoppingViewProps) {
  const totalItems = SHOPPING_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const handleShare = async () => {
    const lines: string[] = ['🛒 Lista de Compras — Plano Alimentar\n'];
    SHOPPING_CATEGORIES.forEach((cat) => {
      lines.push(`\n${cat.emoji} ${cat.label}`);
      cat.items.forEach((item) => {
        const key = `${cat.id}__${item}`;
        lines.push(`${checkedItems[key] ? '☑' : '☐'} ${item}`);
      });
    });
    const text = lines.join('\n');
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        /* cancelled */
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert('Lista copiada para a área de transferência!');
    }
  };

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
          padding: '24px 20px 24px',
          borderRadius: '0 0 28px 28px',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: '24px',
            fontFamily: 'Poppins, Inter, sans-serif',
            fontWeight: 700,
            color: 'white',
          }}
        >
          🛒 Lista de Compras
        </h1>
        <p style={{ margin: '4px 0 16px', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
          {checkedCount} de {totalItems} itens marcados
        </p>

        {/* Progress bar */}
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${(checkedCount / totalItems) * 100}%`,
              background: 'white',
              borderRadius: '3px',
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
          <button
            onClick={handleShare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.25)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '10px',
              padding: '8px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px',
            }}
            aria-label="Compartilhar lista"
          >
            <Share2 size={14} />
            Compartilhar
          </button>
          <button
            onClick={onClearAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.25)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '10px',
              padding: '8px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px',
            }}
            aria-label="Desmarcar todos os itens"
          >
            <Trash2 size={14} />
            Desmarcar todos
          </button>
          <button
            onClick={onResetAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.25)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '10px',
              padding: '8px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px',
            }}
            aria-label="Marcar todos os itens"
          >
            <RotateCcw size={14} />
            Marcar todos
          </button>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '16px 16px', paddingBottom: '100px' }}>
        {SHOPPING_CATEGORIES.map((cat) => {
          const catChecked = cat.items.filter((item) => checkedItems[`${cat.id}__${item}`]).length;
          const allChecked = catChecked === cat.items.length;

          return (
            <div
              key={cat.id}
              style={{
                background: 'white',
                borderRadius: '18px',
                marginBottom: '14px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                overflow: 'hidden',
              }}
            >
              {/* Category header */}
              <div
                style={{
                  padding: '14px 18px',
                  borderBottom: '1px solid #F0F4F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '22px' }}>{cat.emoji}</span>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#1B2D1E' }}>
                    {cat.label}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    color: allChecked ? '#4CAF50' : '#9E9E9E',
                    fontWeight: 600,
                  }}
                >
                  {catChecked}/{cat.items.length}
                </span>
              </div>

              {/* Items */}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {cat.items.map((item, idx) => {
                  const key = `${cat.id}__${item}`;
                  const isChecked = !!checkedItems[key];

                  return (
                    <li key={key}>
                      <button
                        onClick={() => onToggleItem(key)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '12px 18px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          textAlign: 'left',
                          borderBottom: idx < cat.items.length - 1 ? '1px solid #F5F8F5' : 'none',
                          transition: 'background 0.1s ease',
                          minHeight: '44px',
                        }}
                        aria-label={`${isChecked ? 'Desmarcar' : 'Marcar'}: ${item}`}
                        aria-pressed={isChecked}
                      >
                        {isChecked ? (
                          <CheckSquare size={20} style={{ color: '#4CAF50', flexShrink: 0 }} />
                        ) : (
                          <Square size={20} style={{ color: '#C8E6C9', flexShrink: 0 }} />
                        )}
                        <span
                          style={{
                            fontSize: '13px',
                            color: isChecked ? '#9E9E9E' : '#1B2D1E',
                            textDecoration: isChecked ? 'line-through' : 'none',
                            lineHeight: 1.5,
                            flex: 1,
                          }}
                        >
                          {item}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
